<template>
<div class="c-page">
  <h4>No money? No problem</h4>
  <div class="">To bootstrap your trial experiences, we have a faucet tool to feed you free token to start trial.</div>
  <div class="">In the blockchain world, there is no free lunch. Every transaction need payment. This faucet tool give you free token so that you can start tryintg without actually mining token or through exchange.</div>
  <div class="">Before you can use this faucet, you need to generate an account ID. If you do not have an account yet, please follow the instruction below.</div>
  <div>If you have not done yet, please install Polkadot browser extension. Click <a href="https://github.com/polkadot-js/extension">here</a>to install Polkadot extension. You will need to use either Chrome or Firefox browser</div>
 <div class="">After the extension being installed, click the "+" button as shown below</div>
 <img src="/img/extension1.png" width="400px"/>
<div class="">Follow the instruction on the extension to create a new account. When done, copy and paste the account ID to the account input box in the next section.</div>
<div class="">Note: the account ID is SS58 format, such as `5ESEXd4RT43TBqWiPLQfaJj41iK5tWMFoLUBJgm39hJ7uSgz`. Do not paste your private key anywhere.</div>
 
  <h4>Please input your Blockchain address for 1000 free tokens</h4>
  <p> Address in Substrate SS58 Address format, such as 5ESEXd4RT43TBqWiPLQfaJj41iK5tWMFoLUBJgm39hJ7uSgz </p>
  <p>Testing system will send your account 1000 units free of charge. These tokens are for test only, they have no real value and cannot be used in production chain.</p>
  <el-row>
    <el-col :span="15">
      <el-input v-model="address"></el-input>
      <span>{{balance}}</span>
    </el-col>
    <el-col :span="9" style="text-align:right;">
      <el-button @click="check_balance()" type="default">Check Balance</el-button>
      <el-button @click="layer1_transfer()" type="primary">Give me 1000 TEA tokens</el-button>
    </el-col>
  </el-row>
  <div class="">Click Check Balance button to verify the fake money has been received</div>
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
      await this.layer1.faucet(this.address);
      
      await this.check_balance();
      this.$root.loading(false);
    }
  }
}
</script>