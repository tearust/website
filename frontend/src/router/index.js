import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';

Vue.use(Router);

//push 
const VueRouterPush = Router.prototype.push 
Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}


// config route
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
  ]
})