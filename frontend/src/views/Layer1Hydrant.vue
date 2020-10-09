<template>
<div class="c-page">

  <h4>Please input your layer1 address and system will transfer 1000 unit for test.</h4>
  <el-row>
    <el-col :span="15">
      <el-input v-model="address"></el-input>
      <span>{{balance}}</span>
    </el-col>
    <el-col :span="9" style="text-align:right;">
      <el-button @click="check_balance()" type="default">Get Balance</el-button>
      <el-button @click="layer1_transfer()" type="primary">Confirm</el-button>
    </el-col>
  </el-row>
</div>
</template>
<script>
import Layer1 from '../Layer1';
export default {
  data(){
    return {
      address: '',
      balance: ''
    };
  },
  async mounted(){
    this.$root.loading(true);
    this.layer1 = new Layer1();
    await this.layer1.init();

    this.$root.loading(false);
  },
  methods: {
    async check_balance(){
      if(!this.address){
        alert('invalid address');
        return false;
      }
      this.$root.loading(true);
      const rs = await this.layer1.getAccountBalance(this.address);
      this.balance = rs;
      
      this.$root.loading(false);
    },
    async layer1_transfer(){
      if(!this.address){
        alert('invalid address');
        return false;
      }
      this.$root.loading(true);
      await this.layer1.hydrant(this.address);
      
      await this.check_balance();
      this.$root.loading(false);
    }
  }
}
</script>