<template>
<div class="x-part">

<div class="c-dark">
  <div class="box ww">

    <el-row class="c-text-image">
      <el-col :span="8" :xs="24" style="text-align: left">
        <el-image fit="cover" src="/img/3.jpg"></el-image>
      </el-col>
      <el-col :span="15" :offset="1" :xs="24">
        <h2>Rich apps or decentralized apps? Why not both?</h2>
        <p>
          TEA Project is a decentralized cloud computing platform that hosts
          rich, yet decentralized applications, also known as "Rich dApps."
          Unlike typical apps, Rich dApps are decentralized; they are completely
          serverless and run purely on miner's nodes like a blockchain. However,
          Rich dApps run more like centralized cloud-based apps, with similar
          high scalability and user experiences. TEA Project combines good parts
          from both blockchain and cloud computing.
        </p>
        <div style="text-align: left">
          <a
            href="/#/doc_list/%2FWhat_is_TEA%3F%2FBroken_internet_needs_a_fix.md"
            ><el-button type="primary" size="small">more...</el-button></a
          >
          <!-- <a href="" style="margin-left: 24px;">I am link</a> -->
        </div>
      </el-col>
    </el-row>

  </div>
</div>

<div class="c-light">
  <div class="box ww">

    <el-row class="c-text-image">
      <el-col :span="15" :xs="24">
        <h2>
          Unlike other layer-2 solutions, TEA is not attempting to improve
          blockchain consensus
        </h2>
        <p>
          TEA Project has two layers, but unlike most layer-2 solutions that are
          trying to improve consensus algorithm, it is not attempting to improve
          blockchain; rather, TEA is taking and capitalizing on the benefits of
          it. In the TEA project, dApps code runs on layer-2, a Web Assembly
          runtime inside hardware protected enclaves. These hardware enclaves
          generate PoT (Proof of Trust) data handled by the blockchain consensus
          on layer-1. Therefore, in TEA, blockchain doesn't use consensus to
          verify the result of dApps code, but the execution environment where
          the code runs.
        </p>

        <div>
          <a href="/#/doc_list/%2FWhat_is_TEA%3F%2FHow_TEA_fix_internet.md"
            ><el-button type="primary" size="small">more...</el-button></a
          >
          <!-- <a href="" style="margin-left: 24px;">I am link</a> -->
        </div>
      </el-col>
      <el-col :span="9" :xs="24" style="text-align: right">
        <el-image fit="cover" src="/img/13.png"></el-image>
      </el-col>
    </el-row>

  </div>
</div> 

<div class="c-dark">
  <div class="box ww">

    <el-row class="c-text-image">
      <el-col :span="9" :xs="24" style="text-align: left">
        <el-image style="width:400px;" fit="cover" src="/img/10.jpg"></el-image>
      </el-col>
      <el-col :span="15" :xs="24">
        <h2>Trusted execution</h2>
        <p>
          Our basic assumption is that if the execution environment, code, and input data are trusted, then the execution result can also be trusted. Running consensus to verify the PoT (Proof of Trust) is much easier than the execution result. At least there is no need to rerun the same code on many nodes over and over again.
        </p>
        <div style="text-align: left">
          <a href="/#/doc_list/What_is_TEA%3F%2FTEA_vs_Trusted_Computing.md"
            ><el-button type="primary" size="small">more...</el-button></a
          >
          <!-- <a href="" style="margin-left: 24px;">I am lik</a> -->
        </div>
      </el-col>
    </el-row>

  </div>
</div> 

<div class="c-light">
  <div class="box ww">

    <el-row class="c-text-image">
      <el-col :span="15" :xs="24">
        <h2>Turning IPFS(File System) to IPFS(Function-as-a-Service)</h2>
        <p>
          By adding a TEA hardware security module, the IPFS node can also serve
          as a computing node besides serving static content. IPFS turns to
          Inter Planetary Function-as-a-Service.
        </p>
        <div>
          <a
            href="/#/doc_list/%2FBlog_and_Vlog%2FTurn_ipfs_file_system_to_ipfs_function_service.md"
            ><el-button type="primary" size="small">more...</el-button></a
          >
          <!-- <a href="" style="margin-left: 24px;">I am link</a> -->
        </div>
      </el-col>
      <el-col :span="9" :xs="24" style="text-align: right">
        <el-image fit="cover" src="/img/6.jpg"></el-image>
      </el-col>
    </el-row>

  </div>
</div> 

<div class="c-dark" style="background: #0b1126;">
  <div class="box ww">

    <el-row class="c-text-image">
      <el-col :span="8" :xs="24" style="text-align: left">
        <el-image fit="cover" src="/img/9.jpg"></el-image>
      </el-col>
      <el-col :span="15" :offset="1" :xs="24">
        <h2>Dual token system: A stable utility token and an NFT</h2>
        <p>
          TEA project has two tokens; TEA and Camellia. TEA token is a stable
          utility token as gas, while the Camellia token is an NFT that presents
          the credit and capability of a TEA mining node. The TEA token economy
          is an autonomous evolution ecosystem.
        </p>
        <div style="text-align: left">
          <a href="/#/doc_list/%2FBlog_and_Vlog%2FTEA_Project_business_model.md"
            ><el-button type="primary" size="small">more...</el-button></a
          >
          <!-- <a href="" style="margin-left: 24px;">I am lik</a> -->
        </div>
      </el-col>
    </el-row>

  </div>
</div> 

</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.x-part{
  .c-text-image {
    padding: 40px 0;
    h2 {
      font-size: 32px;
      color: #222222;
      font-weight: bold;
      position: relative;
      margin-bottom: 24px;
    }
    p {
      font-size: 17px;
      color: #333;
    }
    .el-button--primary {
      background: #35a696;
      border-color: #35a696;
    }

  }
}
.c-dark{
  // background: #1A2859;
  background: #0b1126;
  .c-text-image{
    h2{
      color: #00c0ff;
    }
    p{
      color: #fff;
    }
  }
}
.c-light{
  background: #fff;
}
</style>