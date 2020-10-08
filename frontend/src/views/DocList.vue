<template>
<div class="c-page">

  <ul class="t-ul" v-if="list">
    <li v-for="(item, i) in list" :key="i">
      <el-link type="primary" @click="goto_content(item)">{{item.name}}</el-link>
    </li>
  </ul>


</div>  
</template>
<script>
import request from '../request';
import _ from 'lodash';
export default {
  data(){
    return {
      list: null
    }
  },
  async mounted(){
    this.$root.loading(true);

    const tmp_list = await request.get_doc_list();
    let list = [];
    _.each(tmp_list, (item)=>{
      if(item.children){
        list = _.concat(list, item.children);
      }
      else{
        list.push(item);
      }
    })
    console.log(list);
    this.list = list;
    this.$root.loading(false);

  },
  methods: {
    goto_content(item){
      this.$router.push('/doc_content/'+encodeURIComponent(item.path));
    }
  }
}
</script>
<style lang="scss" scoped>
.t-ul{
  background:#f9f9f9; 
  min-height: 200px;
  list-style:none;
  padding: 24px 0 80px;

  li{
    margin: 0 24px;
    padding: 10px 0;
    border-bottom: 1px solid #d9d9d9;
    
    .el-link.el-link--primary{
      font-size: 24px;
    }
  }
}
</style>