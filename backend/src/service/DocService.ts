import Base from './Base';
import {_} from '../utility';
import * as fs from 'fs';

const DOC_DIR = process.cwd()+'/../../tea-docs';
const IGNORE_FILES = ['.git', '.gitignore', 'README.md'];

const doc = {
  replaceName(name){
    return name.replace(/\.md$/ig, '').replace(/ /g, '-').replace(/\./g, '-');
  },
  async dir(dir_path, relative_dir=""){
    const files = fs.readdirSync(dir_path);
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
          path: relative_path
        })
      }
      else if(stat.isDirectory()){
        rs_list.push({
          name: doc.replaceName(file),
          children: await doc.dir(path, relative_path)
        });
      }
    });

    return rs_list;
  }
};

export default class extends Base {
  async getMdFileList(): Promise<any> {
    return doc.dir(DOC_DIR);
  }

  async getMdFileContent(relative_path): Promise<any> {
    const full_path = DOC_DIR+'/'+relative_path;
    return fs.readFileSync(full_path, {
      encoding: 'utf-8'
    });
  }

};