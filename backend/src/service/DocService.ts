import Base from './Base';
import {_} from '../utility';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

const DOC_DIR = process.cwd()+'/../../tea-docs';
const IGNORE_FILES = ['.git', '.github', '.gitignore', 'res', 'tpl', 'README.md', 'config.yaml'];

const doc = {
  replaceName(name){
    return name.replace(/\.md$/ig, '').replace(/ /g, '-').replace(/\./g, '-');
  },
  async getListSortFile(): Promise<any> {
    const path = DOC_DIR+'/config.yaml';
    const text = fs.readFileSync(path, {
      encoding: 'utf-8'
    });

    return new Promise(resolve => {
      yaml.safeLoadAll(text, (doc) => {
        resolve(doc.sort);
      });

    });
  },
  async dir(dir_path, relative_dir=""){
    let files = fs.readdirSync(dir_path);
    const rs_list = [];
    
    _.each(files, async (file)=>{
      if(_.includes(IGNORE_FILES, file)) return;
      const path = dir_path+'/'+file;
      const relative_path = relative_dir+'/'+file;
      const stat = fs.statSync(path);
      if(stat.isFile()){
        if(!/\.md$/i.test(file)) return;
        rs_list.push({
          name: doc.replaceName(file),
          ori_name: file,
          path: relative_path
        })
      }
      else if(stat.isDirectory()){
        rs_list.push({
          name: doc.replaceName(file),
          ori_name: file,
          children: await doc.dir(path, relative_path)
        });
      }
    });

    return rs_list;
  },

  sortList(tar, src){
    return _.map(tar, (item)=>{
      const tmp = _.find(src, (x)=>x.ori_name === item.name);
      
      if(!item.children){
        if(tmp){
          item.path = tmp.path;
          item.name = tmp.name;
        }
      }
      else{
        if(tmp){
          console.log(222, item.children, tmp.children);
          item.children = doc.sortList(item.children, tmp.children || []);
          console.log(333, item.children);
        }
      }

      return item;
    });
  }
};

export default class extends Base {
  async getMdFileList(): Promise<any> {
    const list = await doc.dir(DOC_DIR);
    let sort_list = await doc.getListSortFile();
    sort_list = doc.sortList(sort_list, list);

    return sort_list;
  }

  async getMdFileContent(relative_path): Promise<any> {
    const full_path = DOC_DIR+'/'+relative_path;
    return fs.readFileSync(full_path, {
      encoding: 'utf-8'
    });
  }

  async getDockerComposeFileByName(name): Promise<string>{
    const path = DOC_DIR+'/tpl/'+name+'.yaml';
    return fs.readFileSync(path, {
      encoding: 'utf-8'
    });
  }

  


};