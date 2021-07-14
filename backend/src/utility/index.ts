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
    // console.log(22, match, target, ori);
    let tar;

    if(_.startsWith(match, '!')){
      // embed file, need to replace content by path
      let p = _.trim(target.split('|')[0]);
      
      
      const tmp = opts.path.split('/');
      tmp.pop();
      tmp.push(p);
      const file_path = DOC_DIR+'/'+tmp.join('/') + ".md";

      // console.log(333, file_path);

      const content = fs.readFileSync(file_path, {
        encoding: 'utf-8'
      });

      return content;
    }

    if(target === ori){
      tar = `[${target}]`;
    }
    else if (_.includes(target, '|')){
      tar = _.trim(target.split('|')[1]);
      tar = `[${tar}]`;
    }

    tar += `(${_.trim(ori)})`;
    return tar;
  });

  return content;
};
