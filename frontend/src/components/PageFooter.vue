<template>
  <!-- <section class="t-footer bg_2 js_footer">
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
          
        </el-col>

        <el-col :span="12">

        </el-col>
      </el-row>

      <el-divider></el-divider>
      <p style="margin: 0 auto; text-align: center; font-size: 16px">
        Copyright © 2019-2021 
        <b>TeaProject.org</b>
        All Rights Reserved
      </p>
    </div>
  </section> -->

<div class="x-footer">
  <div class="box ww">

    <el-image
      src="/tea-logo/logoname-green.png"
      :lazy="true"
      style="position:absolute;width:150px;left:-20px;top:20px;"
      fit="fit">
    </el-image>


    <div class="t-dd">
      <a class="t-a" target="_blank" href="https://t.me/teaprojectorg">Telegram</a>
      <a class="t-a" target="_blank" href="https://github.com/tearust">Twitter</a>
      <a class="t-a" target="_blank" href="https://github.com/tearust">Github</a>
      <a class="t-a" target="_blank" href="https://teaproject.medium.com">Medium</a>
      <a class="t-a" target="_blank" href="https://github.com/tearust/teaproject/discussions">Discussions</a>
      <a class="t-a" target="_blank" href="https://wallet.teaproject.org">Wallet</a>
    </div>

    <p class="t-df">
      Copyright © 2019-2021 
      <b>TeaProject.org</b>
      All Rights Reserved
    </p>
  </div>
</div>
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
// .t-footer {
//   padding: 24px 0 40px;

//   * {
//     color: #fff;
//   }
//   .t-copy-right-img{
//     display: inline;
//     width: 100px;
//     height: 40px;
//     top: -2px;
//     position: relative;
//   }

//   .t-h {
//     margin: 0 0 20px 0;
//   }
//   .t-a {
//     font-size: 18px;
//     display: table;
//     &:hover {
//       color: #ec7259;
//     }
//   }
// }

.x-footer{
  background: #0b1126;
  .box{
    height: 220px;
    position: relative;

    h2{
      font-size: 24px;
      color: #fff;
      font-weight: bold;
      position: absolute;
      top: 30px;

    }
    .t-dd{
      width: 900px;
      right: 0;
      position: absolute;
      top: 30px;
      text-align: right;
      .t-a{
        display: block;
        color: #fff;
        font-size: 18px;
        margin-left: 20px;
      }
    }
    .t-df{
      margin: 0;
      color: #35a696;
      font-size: 12px;
      position: absolute;
      bottom: 44px;
      line-height: 24px;
      letter-spacing: 1px;
      opacity: 1;
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