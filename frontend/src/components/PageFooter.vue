<template>
  <section class="t-footer bg_2 js_footer">
    <div class="c-m" style="background: rgb(53, 166, 150)">
      <el-row>
        <el-col :span="6">
          <h4 class="t-h">Resources</h4>
          <a class="t-a" target="_blank" href="https://t.me/teaprojectorg">Telegram</a>
          <a class="t-a" target="_blank" href="https://github.com/tearust">Twitter</a>
          <a class="t-a" target="_blank" href="https://github.com/tearust">Github</a>
          <a class="t-a" target="_blank" href="https://teaproject.medium.com">Medium</a>
          <a class="t-a" target="_blank" href="https://github.com/tearust/teaproject/discussions">Discussions</a>
          <a class="t-a" target="_blank" href="https://wallet.teaproject.org">Wallet</a>
        </el-col>

        <el-col :span="6">
          <h4 class="t-h">About</h4>
          <!-- <a class="t-a" href="javascript:void(0)" @click="goToTeams()">Team</a> -->
          
        </el-col>

        <el-col :span="12">
          <!-- <h4 class="t-h">Contact</h4> -->
          <!-- <span class="t-a">Email: </span> -->
        </el-col>
      </el-row>

      <el-divider></el-divider>
      <p style="margin: 0 auto; text-align: center; font-size: 16px">
        Copyright © 2019-2021 
        <b>TeaProject.org</b>
        All Rights Reserved
      </p>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    goToTeams(){
      this.$router.push('/about/teams');
    }
  }
}
</script>
<style lang="scss">
.t-footer {
  padding: 24px 0 40px;

  * {
    color: #fff;
  }
  .t-copy-right-img{
    display: inline;
    width: 100px;
    height: 40px;
    top: -2px;
    position: relative;
  }

  .t-h {
    margin: 0 0 20px 0;
  }
  .t-a {
    font-size: 18px;
    display: table;
    &:hover {
      color: #ec7259;
    }
  }
}
@media screen and (max-width: 600px) {
  .t-footer {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>