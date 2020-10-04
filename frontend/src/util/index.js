'use strict';

import PubSubJS from 'pubsub-js';
// declare function about cookie
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
  }

};

export default F;