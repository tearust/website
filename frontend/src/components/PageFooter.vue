<template>

<div class="x-footer">
  <div class="box ww">

    <el-image
      class="t-img"
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
.x-footer{
  background: #0b1126;
  .box{
    height: 220px;
    position: relative;

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
  .x-footer{
    background: #0b1126;
    .box{
      padding: 30px 0 20px;
      width: 100%;
      height: auto;
      position: relative;

      .t-img{
        display: none;
      }
      .t-dd{
        width: 100%;
        position: static;
        text-align: center;
        .t-a{
          display: inline-block;
          color: #fff;
          font-size: 15px;
          margin: 0 5px;
        }
      }
      .t-df{
        margin-top: 20px;
        position: static;
        text-align: center;
      }
    }
  }
}
</style>