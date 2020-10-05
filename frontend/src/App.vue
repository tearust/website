<template>

<section id="app">
  <PageHeader />
  <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>

  <el-divider></el-divider>
  <PageFooter />
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
     
    };
  },
  components: {
    PageHeader,
    PageFooter,
  }
  
};
</script>

<style lang="scss">
#app{
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100%;
  padding-bottom: 20px;
}



</style>

