<template>
<div>
<div class="c-m1">
  
<el-menu :default-active="activeIndex" active-text-color="#fff" class="p-header" mode="horizontal" @select="handleSelect">
  <a href="javascript:void(0)" @click="$router.replace('/'); activeIndex='1';" style="float:left;">
    <el-image
      src="/img/logo.png"
      :lazy="true"
      fit="fit">
      <div slot="error"  >
        Image error.
      </div>
    </el-image>
    
  </a>
  

  <!-- <el-menu-item>
    <a href="https://wallet.teaproject.org" target="_blank">Wallet</a>
    
  </el-menu-item>

  <el-menu-item style="display:none;" index="1">{{$t('nav.test')}}</el-menu-item> -->
  <!-- <el-submenu index="2">

    <template slot="title">{{$t('nav.004')}}</template>
    <el-menu-item index="/tools/layer1_faucet">Free token faucet</el-menu-item>
    <el-menu-item index="/tools/add_node">Add New Tea Node</el-menu-item>
    
    
  </el-submenu> -->
  <!-- <el-menu-item index="/doc_list/Try_the_demo%2FREADME.md">{{$t('nav.002')}}</el-menu-item> -->

  <!-- <el-menu-item>
    <a href="https://github.com/tearust/teaproject/wiki" target="_blank">Wiki</a>
    
  </el-menu-item> -->
  <el-menu-item index="/doc_list">{{$t('nav.003')}}</el-menu-item>
  <!-- <el-menu-item index="/white_paper">{{$t('nav.005')}}</el-menu-item> -->

  <!-- <el-menu-item index="/">{{'Home'}}</el-menu-item> -->

  <!-- <li class="m-icon" @click="openDrawer()"><i class="el-icon-s-operation"></i></li> -->
</el-menu>


<!-- <el-drawer
  title=""
  custom-class="m-drawer"
  append-to-body
  size="60%"
  :modal="false"
  :visible.sync="drawer"
  direction="rtl"
>
  <a href="javascript:void(0)" @click="clickDrawerMenu('/')">{{'Home'}}</a>
  <a href="javascript:void(0)" @click="clickDrawerMenu('/white_paper')">{{$t('nav.005')}}</a>
  <a href="javascript:void(0)" @click="clickDrawerMenu('/doc_list')">{{$t('nav.003')}}</a>
  <a href="javascript:void(0)" @click="clickDrawerMenu('/doc_list/Try_the_demo%2FREADME.md')">{{$t('nav.002')}}</a>

  

</el-drawer> -->
</div>

<!-- <div style="width:100%;text-align:center;background:#0b1126;">
  <a href="https://github.com/tearust/teaproject/wiki/Mining-Contest:-Competitor-Checklist" target="_blank"><img style="margin:5px auto;max-width:100%;" src="/img/banner.png" /></a>

  <a style="display:block; color: #fff; position:relative; background: #0b1126;" href="https://github.com/tearust/teaproject/wiki/Mining-Contest:-Competitor-Checklist" target="_blank">Click here to enter the mining competition</a>
</div> -->

</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: null,

        drawer: false,
      };
    },
    watch: {
      '$route': {
        immediate: true,
        handler (to, from){
          let name = to.path;
          if(to.name === 'doc_content'){
            name = '/doc_list';
          }

          this.activeIndex = name;
        }
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if(key === 'lang'){
          this.changeLang();
          return false;
        }
        this.$router.push(key);
      },
      clickDrawerMenu(key){
        this.handleSelect(key);
        this.drawer = false;
      },
      changeLang(){
        if(this.$i18n.locale === 'en'){
          window.changeLanguage('zh');
        }
        else{
          window.changeLanguage('en');
        }

      },
      openDrawer(){
        this.drawer = true;
      }
    },

  }
</script>
<style lang="scss">

.c-m1{
  background: #000;
  top: 0;
  display: block;
  z-index: 99;
  text-align: center;
}
.p-header{
  max-width:1140px;
  margin: 0 auto;
  height: 100px;
  background: transparent;

  .el-image{
    width: 70px;
    height: 70px;
    position: absolute;
    top: 10px;
    left: 0;
  }

  .m-icon{
    display: none;
  }
  
}
.el-menu--horizontal>.el-menu-item a{
  color: #fff;
  font-size: 17px;
  font-weight: bold;
}
.el-menu--horizontal > .el-menu-item{
  float: right;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  margin-top: 20px;
}
.el-menu--horizontal > .el-submenu{
  float: right;
  
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover{
  background: transparent;
  color: #fff;
}
.el-menu.el-menu--horizontal{
  border-bottom: none;
}

@media screen and (max-width : 600px) {
  
  .p-header{
    padding: 5px 15px 5px;
    max-width: 100%;
    height: 60px;
    
    .el-image{
      width: 60px;
      height: 60px;
      top: 0;
    }

    .m-icon{
      float: right;
      width: 40px;
      height: 40px;
      display: block;
      position: relative;

      i{
        font-size: 40px;
        position: absolute;
        right: 0;
        top: 8px;
        color: rgb(56,198,139);
      }
    }
  }

  .el-menu--horizontal > .el-menu-item{
    display: none;
  }
  .el-menu--horizontal > .el-submenu{
    display: none;
  
  }

  
}

.m-drawer{
  background: #0b1126;
  
  .el-drawer__header{
    margin: 0;
  }
  .el-drawer__body{
    padding: 0 20px;
  }
  a{
    display: block;
    font-size: 18px;
    color: rgb(56,198,139);
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    font-weight: bold;
  }
}

</style>