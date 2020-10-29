
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
  mdToHtml(md_content){
    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text){
      let link = marked.Renderer.prototype.link.apply(this, arguments);
      link = link.replace("<a","<a class='js_click_md'");

      return link;
    };

    marked.setOptions({
      renderer: renderer
    });
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