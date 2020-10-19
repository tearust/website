<template>
  
<div class="c-page">
  <h4>Easy starting: Run an existing online dapp</h4>

  <p>
    If this is your first time to try TEA project, running an existing dapp would be the easier way to experience what dapp should look from a dapp user's point of view.

    You do not need to deploy your own dapp in this step. A demo dapp has been deployed by TEA developers. You can just run it.

    This dapp is a simple Tensorflow image recognization dapp. A pre-deployed picture of a lion is feed into the Tensorflow wasm function.
    After a few seconds, one of existing TEA nodes (miners) will be randomly selected and execute the code. You can see the result on your browser.


  </p>
  <h5> Prerequisites to run pre-deployed demo dApp</h5>
  <p>
    You do not need to be a developer to try this demo, but you will need the following items to try as a user.
    <ul>A Mac or Linux computer. Windows should work too, but we just did not have chance to test</ul>
    <ul>A Chrome or Firefox web browser which support Polkadot plugin/extension</ul>
  </p>
  <p>
    Please follow the <button> Instruction </button> to complete the online demo.
  </p>
  <p>
    Did you see the lion? If not, please submit a <a href="/bug-report">bug report </a> to us. We will fix the problem shortly. 
  </p>
  <p>
    Although click and run the dApp seems easy, but what happening behind the scean is very complicated. Please click the button below to figure it out.
  </p>

  <button>Check out what happened under the hood? </button>


  <h4>Advanced experience: Deploy your own dapp</h4>
  <p>
    Running others dApp is easy but not as fun as create your own dApp serving others. This is the second level demo that you can try to deploy your own dApp.

  </p>
  <h5> Prerequisites to build and deploy your own dApp to TEA network</h5>
  <p>
    You will need to be a developer with the following skill sets:
    <ul>One of the programming languages that builds into WebAssembly. We use Rust, so if you know Rust language, you are all set.</ul>
    <ul>A Mac or Linux computer. Windows should work too, but we just did not have chance to test. On your own risk</ul>
    <ul>Docker, Docker-compose installed</ul>
    <ul>A Chrome or Firefox web browser which support Polkadot plugin/extension</ul>
    <ul></ul>
  </p>
  <h4>Veteran advanture: Becoming a miner by run your own TEA node simulator</h4>
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