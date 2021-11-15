<template>

<section id="app" class="tea-app">
  <PageHeader v-if="!static_home" />
  <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>

  <PageFooter v-if="!static_home" />
  
  <!-- <el-backtop target=".tea-app"></el-backtop> -->
</section>
  
</template>

<script>
import request from './request';
import util from './util';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
export default {
  data(){
    return {
      static_home: false,
    };
  },
  components: {
    PageHeader,
    PageFooter,
  },
  watch: {
    '$route': {
      immediate: true,
      handler (to, from){
        // if(to.name === 'home1'){
        //   this.static_home = true;
        // }
        // else{
        //   this.static_home = false;
        // }
      }
    }
  }
  
};
</script>

<style lang="scss">
#app{
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100%;
}



</style>

