import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import DockerComposeDemo from '../views/DockerComposeDemo';
import DocList from '../views/DocList';
import DocContent from '../views/DocContent';
import Layer1Faucet from '../views/Layer1Faucet';

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
    {
      path: '/demo',
      name: 'demo',
      component: DockerComposeDemo
    },
    {
      path: '/doc_list',
      name: 'doc_list',
      component: DocList
    },
    {
      path: '/doc_content/:doc_path',
      name: 'doc_content',
      component: DocContent
    },
    {
      path: '/tools/layer1_faucet',
      name: 'layer1_faucet',
      component: Layer1Faucet
    }
    
  ]
})