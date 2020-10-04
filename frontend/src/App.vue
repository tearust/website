<template>

  <section id="app">
    <!--header start-->
    <header class="header white-bg" v-if="!$route.meta.hideHeader">
      <div class="sidebar-toggle-box" @click="toggleSidebar()">
        <i class="fa fa-bars"></i>
      </div>
        <!--logo start-->
      <a href="/" class="logo" v-html="$route.meta.title || 'HOME CREDIT APPLICATION  <span>PORTFOLIO</span>'"></a>
      <ul class="nav pull-right top-menu">
        <!-- some top menu -->
        <li v-if="isLogin" class="c-login-box">
          <span>hi, {{user.username}}</span>
          <el-button @click="logout()" plain round size="small">Logout</el-button>
        </li>
        <li v-if="!isLogin" class="c-login-box">
          <el-button type="success" @click="$router.replace('login')" plain round size="small">Login</el-button>
        </li>
      </ul>
    </header>
    <!--header end-->
        
    <!--sidebar start-->
    <aside>
      <div id="sidebar" class="nav-collapse" :class="{'side-show':side_bar_show}">
        <!-- sidebar menu start-->
        <ul class="sidebar-menu" id="nav-accordion">
          <li v-for="(item, i) in side_data" v-bind:key="i" class="sub-menu">
            <a href="javascript:void(0)" @click="$router.push(item.href)">
              <i :class="'fa fa-'+item.icon"></i>
              <span>{{item.name}}</span>
            </a>
          </li>
          
        </ul>
        <!-- sidebar menu end-->
      </div>
    </aside>
    <!--sidebar end-->
        
    <!--main content start-->
    <section id="main-content" :class="{'side-show':side_bar_show}">
      <section class="wrapper">
        <!-- page start-->
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <!-- page end-->
      </section>
    </section>
    <!--main content end-->

  </section>

</template>

<script>
import request from './request';
import util from './util';
export default {
  data(){
    return {
      side_bar_show : false,
    };
  },
  computed: {
    isLogin(){
      return this.$store.state.isLogin;
    },
    user(){
      return this.$store.state.user;
    },
    side_data(){
      return this.$store.state.menu;
    }
  },
  async mounted() {
    // check login status
    try{
      const user = await request.checkLogin();
      this.$store.commit('user_login', user);

    }catch(e){
      this.$router.replace('login');
    }finally{
      util.publish('init-user', this.$store.state.user);
    }

    
  },

  methods: {
    // show or hide sidebar
    toggleSidebar(){
      this.side_bar_show = !this.side_bar_show;
      
    },
    // logout 
    logout(){
      this.$confirm('Are you sure to logout?', 'Logout', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        return request.logout();
      }).then(()=>{
        this.$store.commit('user_logout');
        this.$router.replace('login');
        util.clearCookie('token');
        this.side_bar_show = false;
      }).catch(() => {
        
      });
    }
  },
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

#main-content {
  margin-left: 0;
  width: auto;
  margin-top: 60px;
  min-height: 300px;

  &.side-show{
    margin-left: 210px;
  }
}

.header, .footer {
    min-height: 60px;
    padding: 0 15px;
}

.header {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1002;
}

.white-bg {
    background: #fff;
    border-bottom: 1px solid #f1f2f7;
}

.wrapper {
  display: inline-block;
  padding: 15px;
  width: 100%;
}

a.logo {
    font-size: 21px;
    color: #2e2e2e;
    float: left;
    margin-top: 15px;
    text-transform: uppercase;
}

a.logo:hover, a.logo:focus {
    text-decoration: none;
    outline: none;
    color: #777;
}

a.logo span {
    color: #FF6C60;
}

.sidebar-toggle-box {
    float: left;
    padding-right: 15px;
    margin-top: 20px;
}

.sidebar-toggle-box .fa-bars {
    cursor: pointer;
    display: inline-block;
    font-size: 20px;
}


.sidebar-closed > #sidebar > ul {
    display: none;
}

.sidebar-closed #main-content {
    margin-left: 0px;
}

.sidebar-closed #sidebar {
    margin-left: -210px;
}

#sidebar {
  width: 210px;
  height: 100%;
  position: fixed;
  background: #2a3542;
  overflow-y: scroll;
  left: -210px;

  &.side-show{
    left: 0;
  }
}

#sidebar ul li {
    position: relative;
}

#sidebar .sub-menu > .sub li  {
    padding-left: 32px;
}

#sidebar .sub-menu > .sub li:last-child {
    padding-bottom: 10px;
}
.nav-collapse.collapse {
    display: inline;
}

ul.sidebar-menu , ul.sidebar-menu li ul.sub{
    margin: -2px 0 0;
    padding: 0;
}

ul.sidebar-menu {
    margin-top: 75px;
}
ul.sidebar-menu li ul.sub li{
    background: #35404D;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
}

ul.sidebar-menu li ul.sub li:last-child{
    border-radius: 0 0 4px 4px;
    -webkit-border-radius: 0 0 4px 4px;
}

ul.sidebar-menu li ul.sub li a {
    font-size: 12px;
    padding: 6px 0;
    line-height: 35px;
    height: 35px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
    color: #aeb2b7;
}

ul.sidebar-menu li ul.sub li a:hover, ul.sidebar-menu li ul.sub li.active a {
    color: #FF6C60;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
    display: block;
}

ul.sidebar-menu li{
    /*line-height: 20px !important;*/
    margin-bottom: 5px;
    margin-left:10px;
    margin-right:10px;
}

ul.sidebar-menu li.sub-menu{
    line-height: 15px;
}

ul.sidebar-menu li a span{
    display: inline-block;
}

ul.sidebar-menu li a{
    color: #aeb2b7;
    text-decoration: none;
    display: block;
    padding: 15px 0 15px 10px;
    font-size: 12px;
    outline: none;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

ul.sidebar-menu li a.active, ul.sidebar-menu li a:hover, ul.sidebar-menu li a:focus {
    background: #35404d;
    color: #fff;
    display: block;
    border-radius: 4px;
    -webkit-border-radius: 4px;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
}


ul.sidebar-menu li a i {
    font-size: 15px;
    padding-right: 6px;
}

ul.sidebar-menu li a:hover i, ul.sidebar-menu li a:focus i {
    color: #FF6C60;
}

ul.sidebar-menu li a.active i {
    color: #FF6C60;
}

.c-login-box{
  position: relative;
  top: 14px;

  &>span{
    font-size: 15px;
    color: #555;
    margin-right: 24px;
  }

  &>button{

  }
}
</style>

