import * as _ from 'lodash';
import crypto from './crypto';
import {DOC_DIR} from '../config';
import * as fs from 'fs';

_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

export {
  _,
  crypto,

};

export const formatObsidianToMd = async (content, opts:any={}) => {
  const reg = /!?\[\[(([^\]#\|]*)(#[^\|\]]+)*(\|[^\]]*)*)\]\]/g;

  content = content.replace(reg, (match, target, ori)=>{
    let tar;

    let is_image = false;

    if(_.startsWith(match, '!')){
      // embed file, need to replace content by path
      let p = _.trim(target.split('|')[0]);
      
      
      const tmp = opts.path.split('/');
      tmp.pop();
      tmp.push(p);
      
      let file_path = DOC_DIR+'/'+tmp.join('/');
      if(_.endsWith(file_path, '.png')){
        is_image = true;
      }
      else{
        file_path += ".md";
      }

      let content = fs.readFileSync(file_path, {
        encoding: is_image ? 'base64' : 'utf-8'
      });

      if(is_image){
        content = '<img src="data:image/png;base64,'+content+'" />';
      }

      return content;
    }

    if(target === ori){
      tar = `[${target}]`;
    }
    else if (_.includes(target, '|')){
      tar = _.trim(target.split('|')[1]);
      tar = `[${tar}]`;
    }

    tar += `(./${_.trim(ori)}.md)`;
    return tar;
  });

  return content;
};
