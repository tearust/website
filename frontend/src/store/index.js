import Vue from 'vue';
import Vuex from 'vuex';
import request from '../request';
import util from '../util';
import constant from './constant';

Vue.use(Vuex);

export default new Vuex.Store({
  // init state 
  state: {
    user : null,
    isLogin : false,
    menu : constant.menu.user,

    capability_data : null,
    application_data : null,
    infrastructure_data : null
  },
  // set state 
  mutations: {
    user_login(state, user){
      state.user = user;
      state.isLogin = true;

      if(user.role === 'admin'){
        state.menu = constant.menu.admin;
      }
    },
    user_logout(state){
      state.user = null;
      state.isLogin = false;
      state.menu = constant.menu.user;
    },

    set_capability_data(state, data){
      state.capability_data = data;
    },

    set_application_data(state, data){
      state.application_data = data;
    },

    set_infrastructure_data(state, data){
      state.infrastructure_data = data;
    }
  },
  // return state 
  actions: {
    async set_capability_data(store){
      const data = await request.getCapabilityMapData();
      store.commit('set_capability_data', data);
      return store.state.capability_data;
    },
    async set_application_data(store){
      const data = await request.getApplicationData();
      store.commit('set_application_data', data);
      return store.state.application_data;
    },
    async set_infrastructure_data(store){
      const data = await request.getInfrastructureData();
      store.commit('set_infrastructure_data', data);
      return store.state.infrastructure_data;
    }
  }
})