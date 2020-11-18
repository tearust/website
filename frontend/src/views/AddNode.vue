<template>
<div class="c-page">
  
  <el-row>
    <el-col>
      Please input your Tea ID here and submit, After success and continue your local demo.
    </el-col>
  </el-row>
  <el-row>
    
    <el-col :span="18">
      <el-input v-model="tea_id"></el-input>
    </el-col>
    <el-col :span="6" style="text-align:right;">
      <el-button @click="submit()" style="width:150px;" type="primary">Submit</el-button>
    </el-col>
  </el-row>

</div> 
</template>
<script>
import Layer1 from '../Layer1';
export default {
  data(){
    return {
      network_cid: null,
      tea_id: null,
    };
  },
  async mounted(){
    this.$root.loading(true);
    this.layer1 = new Layer1();
    await this.layer1.init();

    // Dave
    const sample_tea_id = 'c9380fde1ba795fc656ab08ab4ef4482cf554790fd3abcd4642418ae8fb5fd52';
    this.network_cid = await this.layer1.getCurrentManifestCid(sample_tea_id);
    this.$root.loading(false);
  },
  methods: {
    async submit(){
      if(!this.tea_id || this.tea_id.length > 64){
        this.$message.error('Invalid tea_id');
        return false;
      }

      const x_cid = await this.layer1.getCurrentManifestCid(this.tea_id);
     
      if(x_cid && x_cid === this.network_cid){
        this.$message.error("Node is update to date.");
        return false;
      }

      this.$root.loading(true);
      await this.layer1.updateManifest(this.tea_id, this.network_cid, ()=>{

        this.$message.success('Success, continue your local demo.');
        this.$root.loading(false);
      });
    }
  }
}
</script>