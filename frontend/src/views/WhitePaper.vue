<template>
  
<div class="c-page">

  <h4>TEA Project Technical White Paper v0.2.1</h4>
  <a class="c-a" :href="root+'/pdf/tech_white_paper_v0.2.1.pdf'" target="_blank">English</a>
  <a class="c-a dis" href="">Chinese (Coming soon)</a>
  <el-divider />
  <h4>TEA Project Token Economy White Paper</h4>
  <a class="c-a dis" href="">English (Coming soon)</a>
  <a class="c-a dis" href="">Chinese (Coming soon)</a>

</div>
</template>
<script>
import request from '../request';

export default {
  data(){
    return {
      root: request.SERVER_URL
    }
  }
}
</script>
<style lang="scss" scoped>
.c-a{
  color: #35a696;
  font-size: 16px;
  display: block;
  font-weight: bold;
  &:hover{
    text-decoration: underline;
  }

  &.dis{
    color: #999;
    font-weight: normal;

    &:hover{
      text-decoration: none;
    }
  }
  
}
</style>