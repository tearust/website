<template>
<div class="c-m">
  
<el-menu :default-active="activeIndex" class="p-header" mode="horizontal" @select="handleSelect">
  <a href="javascript:void(0)" @click="$router.replace('/'); activeIndex='1';" style="float:left;">
    <el-image
      style="width: 80px; height: 80px;"
      src="/img/logo.png"
      fit="fit">
    </el-image>
    
  </a>
  

  <el-menu-item @click="changeLang()">{{$t('nav.001')}}</el-menu-item>

  <el-menu-item style="display:none;" index="1">{{$t('nav.test')}}</el-menu-item>
  <el-submenu index="2">

    <template slot="title">{{$t('nav.004')}}</template>
    <el-menu-item index="/tools/layer1_faucet">Free test token faucet</el-menu-item>
    
    
  </el-submenu>
  <el-menu-item index="/demo">{{$t('nav.002')}}</el-menu-item>
  <el-menu-item index="/doc_list">{{$t('nav.003')}}</el-menu-item>

</el-menu>

</div>


</template>
<script>
  export default {
    data() {
      return {
        activeIndex: null,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        if(key === 'lang'){
          this.changeLang();
          return false;
        }
        this.$router.push(key);
      },
      changeLang(){
        if(this.$i18n.locale === 'en'){
          window.changeLanguage('zh');
        }
        else{
          window.changeLanguage('en');
        }

      }
    },
    mounted(){
      this.activeIndex = this.$route.name;
    }
  }
</script>
<style lang="scss" scoped>
.p-header{
  padding: 10px 0;


  
}
.el-menu--horizontal > .el-menu-item{
  float: right;
}
.el-menu--horizontal > .el-submenu{
  float: right;
}
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
</style>