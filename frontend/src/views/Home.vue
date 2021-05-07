<template>
  <div class="c-page">
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 24px 0 40px;
        margin: 0 auto;
        max-width: 800px;
      "
    >
      <h1
        style="
          font-size: 56px;
          color: #444;
          font-weight: bold;
          text-align: center;
          font-family: sans-serif;
          line-height: 65px;
        "
      >
        Elevating Decentralized Trusted Computing to a T
      </h1>
      <p
        style="
          font-size: 19px;
          color: #111;
          text-align: center;
          line-height: 28px;
          margin-top: 15px;
        "
      ></p>

      <div
        style="
          margin: 30px auto 50px;
          max-width: 800px;
          width: 100%;
          text-align: center;
        "
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/D9Jatvg_0HI"
          title="TEA Project in 90 seconds Youtube"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p class="m-11">
        <el-button
          size="large"
          round
          style="width: 200px; font-weight: bold; font-size: 21px"
          type="success"
          @click="$router.push('/doc_list')"
          >Documents</el-button
        >
        <el-button
          size="large"
          round
          style="
            width: 200px;
            margin-left: 80px;
            font-weight: bold;
            font-size: 21px;
          "
          type="success"
          @click="$router.push('/doc_list/Try_the_demo%2FREADME.md')"
          >Demo</el-button
        >
      </p>
    </div>

    <hr />
    <el-row class="c-text-image">
      <el-col :span="9" :xs="24" style="text-align: left">
        <el-image fit="cover" src="/img/3.jpg"></el-image>
      </el-col>
      <el-col :span="15" :xs="24">
        <h2>Rich apps or decentralized apps? Wow! both!!</h2>
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

    <el-row class="c-text-image">
      <el-col :span="15" :xs="24">
        <h2>
          Unlike other layer2 solutions, TEA is not attempting to improve
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
    <el-row class="c-text-image">
      <el-col :span="9" :xs="24" style="text-align: left">
        <el-image fit="cover" src="/img/10.jpg"></el-image>
      </el-col>
      <el-col :span="15" :xs="24">
        <h2>Basic assumption:</h2>
        <p>
          if the execution environment, code, and input data are trusted, then
          the execution result can also be trusted. Running consensus to verify
          the PoT (Proof of Trust) is much easier than the execution result. At
          least there is no need to rerun the same code on many nodes over and
          over again.
        </p>
        <div style="text-align: left">
          <a href="/#/doc_list/%2FWhat_is_TEA%3F%2FTEA_vs_Trusted_computing.md"
            ><el-button type="primary" size="small">more...</el-button></a
          >
          <!-- <a href="" style="margin-left: 24px;">I am lik</a> -->
        </div>
      </el-col>
    </el-row>
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

    <el-row class="c-text-image">
      <el-col :span="9" :xs="24" style="text-align: left">
        <el-image fit="cover" src="/img/9.jpg"></el-image>
      </el-col>
      <el-col :span="15" :xs="24">
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
    <hr />
    <div
      style="
        margin: 130px auto 50px;
        max-width: 800px;
        width: 100%;
        text-align: center;
      "
    >
      <iframe
        style="max-width: 800px; width: 100%; height: 380px"
        src="https://www.youtube.com/embed/6GYwrITSfJo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <p style="margin-top: 120px">
      <img src="/img/Trust-construction.png" width="100%" />
    </p>
  </div>
</template>
<style lang="scss" scoped>
.c-page {
  .c-text-image {
    margin-top: 90px;
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
    // a{
    //   color: #35a696;
    // }
  }
  .p-t1 {
    h2 {
      font-size: 30px;
      color: #222222;
      display: inline-block;
      font-weight: 700;
      position: relative;
    }
    p {
      // font-size: 16px;
      // color: #333;
      margin: 10px 0;
    }

    hr {
      margin: 12px 0 20px;
    }
  }

  .c-case {
    margin-top: 120px;
    h4 {
      color: #333;
      font-size: 20px;
    }
    h1 {
      color: #000;
      font-size: 36px;
      font-weight: bold;
      margin: 15px 0 5px;
    }
    b {
      font-size: 18px;
      color: #444;
    }

    .x-col {
      position: relative;
      min-height: 100px;
      padding-left: 120px;

      .x-1 {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background: rgb(242, 242, 252);
        position: absolute;
        left: 0;
        top: 0;

        i {
          color: #35a696;
          font-size: 42px;
        }
      }

      .x-2 {
        padding: 12px 0;
        h4 {
          color: #000;
          font-size: 18px;
          font-weight: bold;
        }
        p {
          color: #333;
          font-size: 14px;
          margin: 10px 0 0 0;
        }
      }
    }
  }

  .c-block {
    margin-top: 32px;
    .el-col {
      a {
        border-radius: 12px;
        border: 1px solid #f0f0f5;
        padding: 50px 20px 24px 20px;
        display: block;
        text-align: center;
        cursor: pointer;

        &:hover {
          transform: scale(0.96);
        }

        h4 {
          font-size: 24px;
          font-weight: bold;
          margin-top: 20px;
          color: #333;
        }
        p {
          font-size: 18px;
          margin: 15px 0 0 0;
          color: #444;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .c-page {
    h1 {
      font-size: 36px !important;
      line-height: 32px !important;
    }

    p {
      font-size: 24px !important;
    }

    .m-11 {
      .el-button {
        width: 100% !important;
        margin: 10px 0 !important;
      }
    }

    .el-row {
      img {
        width: 100% !important;
      }
    }
  }
}
</style>