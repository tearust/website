<template>
<div class="x-page">
<div class="x-header">
  <div class="box ww">

    <el-image
      style="position:absolute;top:0;height:72px;"
      src="/tea-logo/logo.png"
      :lazy="true"
      fit="fit">
    </el-image>

    <div class="t-dd">
      <a class="t-a" href="javascript:void(0)">Home</a>
      <a class="t-a" href="javascript:void(0)" @click="$router.push('/white_paper')">Whitepaper</a>
      <a class="t-a" href="javascript:void(0)" @click="$router.push('/doc_list')">Documents</a>
      <a class="t-a" target="_blank" href="https://github.com/tearust/teaproject/wiki">wiki</a>
      <a class="t-a" href="javascript:void(0)" @click="$router.push('/doc_list/Try_the_demo%2FREADME.md')">Demo</a>
      <a class="t-a" target="_blank" href="https://wallet.teaproject.org">Wallet</a>
    </div>

  </div>
</div>

<div class="x-body">
  <Part1 />
  <Part2 />
</div>

<!-- <div style="height: 50px;"></div> -->
<div class="x-footer">
  <div class="box ww">
    <h2>Tea Project</h2>

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

</div>
</template>
<script>
import Part1 from './hh/Part1';
import Part2 from './hh/Part2';
export default {
  components: {
    Part1,
    Part2,
  }
}
</script>
<style lang="scss">
.ww{
  width: 1140px;
  margin: 0 auto;
}

.x-page{

  
}
.x-header{
  background: #0b1126;
  .box{
    height: 72px;
    position: relative;

    .t-dd{
      width: 900px;
      right: 0;
      position: absolute;
      top: 20px;
      text-align: right;
      .t-a{
        display: inline-block;
        color: #fff;
        font-size: 18px;
        margin-left: 20px;
      }
    }
  }
}
.x-body{
  min-height: 800px;
}
.x-footer{
  background: #1A2859;
  .box{
    height: 130px;
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
        display: inline-block;
        color: #fff;
        font-size: 18px;
        margin-left: 20px;
      }
    }
    .t-df{
      margin: 0;
      color: #fff;
      font-size: 12px;
      position: absolute;
      bottom: 24px;
      line-height: 24px;
      letter-spacing: 1px;
      opacity: 0.5;
    }
  }
}
</style>