<template>
  
<div class="c-page">

<div class="c-md">
  <h2>You do not have to be a veteran to try TEA dApps. We provide 3 levels of demo you can try.</h2>
  <h3>Easy starting: Run an existing online dapp</h3>

  <p>
    If this is your first time to try TEA project, running an existing dapp would be the easier way to experience what dapp should look from a dapp user's point of view.

    You do not need to deploy your own dapp in this step. A demo dapp has been deployed by TEA developers. You can just run it.

    This dapp is a simple Tensorflow image recognization dapp. A pre-deployed picture of a lion is feed into the Tensorflow wasm function.
    After a few seconds, one of existing TEA nodes (miners) will be randomly selected and execute the code. You can see the result on your browser.


  </p>
  <h4> Prerequisites to run pre-deployed demo dApp</h4>
  <p>You do not need to be a developer to try this demo, but you will need the following items to try as a user.</p>
  <ul>
    <li>A Mac or Linux computer. Windows should work too, but we just did not have chance to test</li>
    <li>A Chrome or Firefox web browser which support Polkadot plugin/extension</li>
  </ul>
  <h4>Run the demo dApp from IPFS</h4>
  <p>
    As a <b>pure</b> decentralized app (dApp), it doesn't have a server as regular cloud based webapp. All the static code directly downloaded from IPFS to your browser. the dynamic content runs on trusted TEA network, so called "layer2" of a Substrate blockchain.</p>
    <p>This may be confuse to you, but you do not need to understand to try it. You just need to click <a href=""> run demo dApp</a>follow the <a href="doc_content/Online-demo.md#/doc_content/%2F01-Online-demo.md"> Instruction </a> to complete the online demo.
  </p>
  <p>
    Did you see the lion? If not, please submit a <a href="/bug-report">bug report </a> to us. We will fix the problem shortly. 
  </p>
  <p>
    Although click and run the dApp seems easy, but what happening behind the scean is very complicated. Please click the button below to figure it out.
  </p>

  <a href="/doc_list/%2F02-Demo-instructions%2F01-Easy-start.md">Check out what happened under the hood? </a>

  <h4>The lion is boring, can I use other pictures</h4>
  <div class=""> The first easy start dapp runs on two existing deployments:</div>
  <p>A wasm function code: A Tensorflow Image Recognition algorithm compiled into wasm. It take an image as input, output what the AI think it is.</p>
  <p>A picture of a lion</p>
  <div class="">Both of the code and the image(data) are deployed by TEA developers. If you do not want to run the Tensorflow algorithm against the lion's picture, you will need to deploy another picture to the TEA network. Then run another version of this dApp.</div>
  <div class="">This new version will take the deployment_id of your new image as parameter, but still use existing wasm code deployment so that you do not have to build the wasm function</div>
  <h4>Advanced experience: Deploy your own dapp</h4>
  <div class="">Please follow the instruction to deploy your own picture and run the same wasm function on the picture</div>
  <p>
    Running others dApp is easy but not as fun as create your own dApp serving others. This is the second level demo that you can try to deploy your own dApp.

  </p>
  <h4> Prerequisites to build and deploy your own dApp to TEA network</h4>
  <p>
    You will need to be a developer with the following skill sets:
    <ul>One of the programming languages that builds into WebAssembly. We use Rust, so if you know Rust language, you are all set.</ul>
    <ul>A Mac or Linux computer. Windows should work too, but we just did not have chance to test. On your own risk</ul>
    <ul>Docker, Docker-compose installed</ul>
    <ul>A Chrome or Firefox web browser which support Polkadot plugin/extension</ul>
  </p>
  <p>
    <img src="/img/Under_Construction_Tape.png" width="100%"/>
  </p>
  <h3>Veteran advanture: Becoming a miner by run your own TEA node simulator</h3>
  <p>
    I guess you have passed the first two easier steps. Now you are a veteran! 

  </p>
  <p>
    It is time to try something more challenging. You can become a TEA miner by building a TEA node on your local computer.
  </p>

  <h4> Prerequisites to build and run your own TEA mining node</h4>
  <p>
    You will need to be a developer with the following skill sets:
    <ul>One of the programming languages that builds into WebAssembly. We use Rust, so if you know Rust language, you are all set.</ul>
    <ul>A Mac or Linux computer. Windows should work too, but we just did not have chance to test. On your own risk</ul>
    <ul>Docker, Docker-compose installed</ul>
    <ul>A Chrome or Firefox web browser which support Polkadot plugin/extension</ul>
  </p>
  <p>
    Please download the following yaml file and store to your local folder. Name is as `docker-compose.yml`.
    Do not just run it yet. You have to modify a few values.
  </p>  
  <div style="text-align:left;">
    <el-button icon="el-icon-refresh" type="primary" size="small" plain round @click="refresh_docker_compose()">Refresh</el-button>
    <el-button icon="el-icon-download" type="primary" size="small" plain round @click="download()">Download</el-button>
  </div>
  <div class="p-editor" style="margin-top:8px;">
    <JSONEditor style="" mode="yaml" :text="yaml_text" :onChange="changeHandler" />
  </div>
  <div class="">Before you run docker-compose up, please make sure you modify the following lines.</div>
  <h4> TEA_ID_PUB and TEA_ID_PRI</h4>
  <div class="">  This is your TEA node, not ours. So you will need to generate you own TEA ID (an ED25519 keypair). </div>
<div class="">How to generate Tea Id?</div>
<h4> PAYMENT_ACCOUNT  </h4>
<div class="">Your TEA node makes profit so you need an account to receive the money. Please create an account here. Once you have the account ID, save it to `PAYMENT_ACCOUNT=`</div>
<h4> PUBLIC_URLS</h4>
<div class="">If your TEA node deploy with a public IP address. You can set this value to your IP with port number 8000. For example 1.2.3.4:8000. </div>
<div class="">If your TEA node deploy to your local network without a public IP. You can use your internal IP address here, such as 192.168.1.9:8000. However, your node can only accept tasks from your internal network.</div>
<div class="">This Public URL will expose to public so that others may find you and send delegation task to you. However, if you just want to be an Repinner or Delegator, you do not need Public URL. It just works fine with LibP2P network.</div>
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
    },
    async download(){
      const text = this.yaml_text;

      const blobContent = new Blob([text], {type : 'application/yaml'});

      const blobUrl = window.URL.createObjectURL(blobContent)

      downloadFileByBlob(blobUrl, 'docker-compose.yaml')

      function downloadFileByBlob(blobUrl, filename) {
        const eleLink = document.createElement('a')
        eleLink.download = filename
        eleLink.style.display = 'none'
        eleLink.href = blobUrl
        // 触发点击
        document.body.appendChild(eleLink)
        eleLink.click()
        // 然后移除
        document.body.removeChild(eleLink)
      }
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
<style lang="scss">

</style>