<template>
<div class="c-page c-md">

  <el-row class="p-t1">
    <el-col :span="16">
      <h2>T-rust elevates Decentralized Trusted Computing to a T</h2>
      <p>
        TEA (Trusted Execution and Attestation) is an ambitials project aim to build new ways to build, deploy and run apps in pure decentralized manners.
      </p>
      <p>
        There won't be traditional server runs your code. Instead, all code and data are encrypted stored and executed in the p2p network. Only trusted hardware TEA modules can load and decrypt code or data then execute in hardware protected environment to guarantee security and correctness </p>
     <p>None of Developer, service provider and end user need to trust any other parties. Blockchain smart contracts inspect the Proof-of-trust (PoT) data collected from hardware TPM chips. Only those pass remote attestation may get a chance to execute code and access to data. </p>
     <p>Although the execution environment is protected by hardware, we still only allow customer executables running in highly isolated WebAssembly runtime to get highest security level</p>
     <p>You do not know and do not care which node actually runs your code. you only need to trust silicon and math. </p>
    </el-col>
    <el-col :span="8" style="text-align:right;">
      <el-image fit="cover" src="/img/brewing-tea.jpg" ></el-image>
    </el-col>
  </el-row>
  <el-row class="p-t1">
    <hr/>
    <h3>Turn IPFS(File System) to IPFS(Function-as-a-Service)</h3>
    <div class="">By adding a TEA trusted computing module, existing IPFS node can turn to a function-as-a-server node besides storing the code and data.</div>
  <div class="">
    By adding a TEA trusted computing module, existing IPFS node can turn to a function-as-a-server node besides storing the code and data.
   </div>
<div class="">IPFS store and cache the code, TEA module load the code and execute</div>
<div class="">TEA protocol provides proof-of-trust (Tea Pot) for verification</div>
   <a href="">Read the detail</a>
    <hr/>

    <h3>Take over complex computational workloads from blockchain as a trusted layer-2 oracle</h3>
<div class="">Smart contract running in blockchain (layer-1) call an external function that runs inside TEA network(layer-2). The function result feed back to smart contract with Proof-of-trust for verification</div>
   <a href="">Read the detail</a>
  
  <hr />

    <h3>Hardware and crypto protected protocol ensures you own your own data</h3>
<div class="">Encrypt privacy data before upload to IPFS, distribute the decryption key to TEA modules that protected by hardware chips. Only trusted module can access your data after remote attestation</div>
   <a href="">Read the detail</a>
    <hr/>

    <h3>Build dApps that censorship-resistent</h3>
<div class="">Build dApps that encrypted data store in IPFS and code runs in TEA modules. Those kind of dApps cannot be stopped or controlled by any one, even the builder. </div>
   <a href="">Read the detail</a>
  </el-row>
  <p>
    <img src="/img/Under_Construction_Tape.png" width="100%"/>
  </p>
</div>
</template>
<style lang="scss" scoped>
.c-page{
  .p-t1{
    h2{
      font-size: 30px;
      color: #222222;
      display: inline-block;
      font-weight: 700;
      position: relative;
    }
    p{
      // font-size: 16px;
      // color: #333;
      margin: 10px 0;
    }

    hr{
      margin: 12px 0 20px;
    }
  }
}
</style>