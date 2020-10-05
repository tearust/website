<template>
  
<div class="c-page">
  <h4>Get the docker-compose file and test in your local.</h4>
  <div style="text-align:right;margin-bottom: 8px;">
    <el-button icon="el-icon-refresh" circle @click="refresh_docker_compose()"></el-button>
  </div>
  <div class="p-editor">
    <JSONEditor style="" mode="yaml" :text="yaml_text" :onChange="changeHandler" />
  </div>
</div>

</template>
<script>
import JSONEditor from '../components/JSONEditor';
import request from '../request';
export default {
  components: {
    JSONEditor
  },
  data(){
    return {
      yaml_text: '{}'
    };
  },
  methods: {
    changeHandler(val){
      console.log(val)
    },
    async refresh_docker_compose(){
      this.$root.loading(true);
      const yaml = await request.get_docker_compose();
      this.yaml_text = yaml;

      this.$root.loading(false);
    }
  },
  async mounted(){
    this.$root.loading(true);
    const yaml = await request.get_docker_compose();
    this.yaml_text = yaml;

    this.$root.loading(false);
  }
}
</script>