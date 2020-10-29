<template>
<div class="c-page">

  <section class="t-md" v-if="html" v-html="html"></section>
  
</div>  
</template>
<script>
import util from '../util';
import _ from 'lodash';
import request from '../request';
export default {
  data(){
    return {
      html: null
    };
  },
  beforeRouteUpdate(to, from, next){
    // console.log(to, from, next)
    _.delay(async ()=>{
      await this.update(to);
    }, 100);
    next();
  },
  async mounted(){
    await this.update(this.$route);
  },
  methods: {
    async update(route){
      this.$root.loading(true);

      const md = await request.get_doc_content(route.params.doc_path);
      if(md){
        this.html = util.mdToHtml(md);
      }

      this.$root.loading(false);
    }
  }
}
</script>
<style lang="scss">
.t-md{

  h1{
    font-size: 32px;
    color: #000;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eaecef;
    font-weight: bold;
  }

  h2{
    font-size: 26px;
    color: #333;
    margin: 30px 0 10px;
    font-weight: bold;
  }

  h3{
    font-size: 22px;
    color: #333;
    margin: 20px 0 10px;
    font-weight: bold;
  }

  h4{
    font-size: 20px;
    color: #333;
    margin: 12px 0 8px;
  }

  p{
    font-size: 16px;
    color: #555;
    margin: 8px 20px;
  }

  ul{
    li{
      list-style: circle;
      font-size: 16px;
      color: #555;
      margin: 8px 10px;
    }
  }

  pre{
    padding: 12px 15px;
    background: #f3f3f3;
    white-space: normal;
    code{
      
    }
  }

  img{
    max-width: 100%;
    margin: 8px 0;
  }
}

</style>