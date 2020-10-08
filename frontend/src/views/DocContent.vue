<template>
<div class="c-page">

  <section class="t-md" v-if="html" v-html="html"></section>
  
</div>  
</template>
<script>
import util from '../util';
import request from '../request';
export default {
  data(){
    return {
      html: null
    };
  },
  async mounted(){
    console.log(this.$route);
    this.$root.loading(true);

    const md = await request.get_doc_content(this.$route.params.doc_path);
    if(md){
      this.html = util.mdToHtml(md);
    }

    this.$root.loading(false);
  }
}
</script>
<style lang="scss">
.t-md{

  pre{
    padding: 12px 15px;
    background: #f3f3f3;
    code{
      
    }
  }
}

</style>