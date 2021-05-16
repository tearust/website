<template>
<div class="c-page">
  
  <div class="t-sec">
    <h4>Core Team</h4>

    <el-row>
      <el-col :span="12" :xs="{span:24}" v-for="(item, i) in CoreTeams" :key="i" class="t-col">
        <strong class="t-name">{{item.name}}</strong>
        <ul class="t-ul">
          <li v-for="(text, j) in item.desc_list" :key="j">{{text}}</li>

          <li><a :href="item.linkedin" target="_blank">{{item.linkedin}}</a></li>
        </ul>
      </el-col>
    </el-row>
    
    <el-divider />
  </div>
  

</div>
</template>
<script>
import {CoreTeams} from './teams.data';
export default {
  data(){
    return {
      CoreTeams: CoreTeams,
    }
  }
}
</script>
<style lang="scss">
.t-sec{
  h4{
    font-size: 28px;
    color: #35a696;
    text-align: left;
    margin: 0;
  }
  .t-col{
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .t-name{
    color: #555;
    font-size: 20px;
  }
  .t-ul{
    margin: 0;
    padding: 0;
    padding-left: 20px;
    li{
      list-style: disc;
      font-size: 16px;
      font-family: sans-serif;
      margin: 4px 0;
      word-break: break-all;
    }
  }
}
</style>