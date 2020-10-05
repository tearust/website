<template>
<div class="c-m">
  
<el-menu :default-active="activeIndex" class="p-header" mode="horizontal" @select="handleSelect">
  <el-image
    style="width: 90px; height: 80px;float:left;"
    src="/img/tea.png"
    fit="fit">
  </el-image>

  <el-menu-item @click="changeLang()">{{$t('nav.001')}}</el-menu-item>

  <el-menu-item index="1">{{$t('nav.test')}}</el-menu-item>
  

</el-menu>

</div>


</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      changeLang(){
        if(this.$i18n.locale === 'en'){
          window.changeLanguage('zh');
        }
        else{
          window.changeLanguage('en');
        }

      }
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
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
</style>