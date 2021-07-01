import * as _ from 'lodash';
import crypto from './crypto';

_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

export {
  _,
  crypto,

};

export const formatObsidianToMd = (content, opts={}) => {
  const reg = /!?\[\[(([^\]#\|]*)(#[^\|\]]+)*(\|[^\]]*)*)\]\]/g;

  content = content.replace(reg, (match, target, ori)=>{
    // console.log(22, match, target, ori);
    let tar;
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

  console.log(111, opts);
  return content;
};