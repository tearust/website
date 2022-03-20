
import PubSubJS from 'pubsub-js';
import _ from 'lodash';
import * as uuid from 'uuid';
import * as marked from 'marked';

const F = {
  setCookie(key, value, expireDays){
    const d = new Date();
    d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + value + "; " + expires;
  },
  clearCookie(key){
    F.setCookie(key, "", -1);
  },
  getCookie(key){
    const name = key + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++){
      let c = ca[i];
      while(c.charAt(0) == ' '){
          c = c.substring(1);
        }
        if(c.indexOf(name) ===0){
          return c.substring(name.length, c.length);
        }
    }
    return "";
  },


  register: PubSubJS.subscribe,
  publish: PubSubJS.publish,

  getJQuery: ()=>{
    return window.$;
  },

  uuid(){
    return uuid.v4();
  },

  formatFileTitle(title){
    const rs = title.replace(/[_]{1,2}/gm, (a)=>{
      if(a === '_') return ' ';
      if(a === '__') return '_';
      return a;
    });
    return rs;
  },

  mdToHtml(md_content){
    const renderer = new marked.Renderer();
    renderer.link = function(href){
      let link = marked.Renderer.prototype.link.apply(this, arguments);

      const title_reg = /(<a.*?[^>]>)(.*)?(<\/a>)/g;
      link = link.replace(title_reg, (all, tag_pre, title, tag_last)=>{
        return `${tag_pre}${F.formatFileTitle(title)}${tag_last}`;
      });

      if(/href="http/i.test(link)){
        link = link.replace("<a","<a target='_blank' ");
      }
      else{
        link = link.replace("<a",'<a class="js_click_md"');
      }

      return link;
    };

    renderer.image = function(src){
      let img = marked.Renderer.prototype.image.apply(this, arguments);
      if(src.charAt(0) !== '/' && !/^[http|https]/.test(src)){
        const s_url = require('../request').default.SERVER_URL;

        const img_file = _.last(src.split('/res/'));
        
        const img_src = s_url+'/res/'+img_file;

        return '<img src="'+img_src+'" />';
      }

      return img;
    }

    renderer.code = function(){
      let code = marked.Renderer.prototype.code.apply(this, arguments);
      if(_.includes(code, '<pre><code class="language-mermaid">')){
        code = code.replace('<pre><code class="language-mermaid">', '<div class="mermaid">');
        code = code.replace('</code></pre>', '</div>');
      }
      return code;
    };

    marked.setOptions({
      renderer: renderer
    });


    md_content = md_content.replace(/\[\/\/TEA\]/g, '<span style="margin-right: 0; font-size: 14px;" class="iconfont icon-a-TeaProject-T"></span>');

    return marked(md_content);
  }
};

const storage = {
  set(key, value){
    localStorage.setItem(key, value);
  },
  get(key){
    const val = localStorage.getItem(key);
    return val || null;
  }
};

F.storage = storage;
export default F;