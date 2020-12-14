<template>
<div class="c-page">

 
  

  <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding: 24px 0 40px; margin: 0 auto; max-width: 800px;">
    <h1 style="font-size: 56px; color: #444;font-weight: bold; text-align:center; font-family:sans-serif; line-height:65px;">Elevating Decentralized Trusted Computing to a T</h1>
    <p style="font-size: 32px; color: #111; text-align:center; line-height: 36px; margin-top: 15px;">
      <a href="http://t-rust.org/#/doc_list/What_is_TEA%3F%2FREADME.md">
        TEA (Trusted Execution and Attestation)
      </a> 
      is an ambitious project trying to fill the gap between cloud apps and dApps. Introducing a new way to develop, deploy and run apps in pure decentralized manners.
    </p>

     <div style="margin: 30px auto 50px; text-align:center; background: #eee;">
      <iframe width="800" height="400" src="https://www.youtube.com/embed/-NgR3ySWwXg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <hr>
    <p class="m-11">
      <el-button  size="large" round style="width: 200px; font-weight: bold; font-size: 21px;" type="success" @click="$router.push('/doc_list')" >Documents</el-button>
      <el-button  size="large" round style="width: 200px; margin-left: 80px; font-weight: bold; font-size: 21px;" type="success" @click="$router.push('/demo')">Demo</el-button>
    </p>
    
  </div>

  <!-- <el-row class="c-block">
    <el-col :span="6" style="padding-right: 12px;">
      <a href="">
        <img src="https://assets-global.website-files.com/5e7b1a27d160ce49af1c24e1/5f15674dcb91b4492df295e5_Build.svg">
        <h4>Build an app</h4>
        <p>Start building your own dapp</p>
      </a>
    </el-col>
    <el-col :span="6" style="padding: 0 8px 0 4px;">
      <a href="">
        <img src="https://assets-global.website-files.com/5e7b1a27d160ce49af1c24e1/5f15674dcb91b4492df295e5_Build.svg">
        <h4>Build an app</h4>
        <p>Start building your own dapp</p>
      </a>
    </el-col>
    <el-col :span="6" style="padding: 0 4px 0 8px;">
      <a href="">
        <img src="https://assets-global.website-files.com/5e7b1a27d160ce49af1c24e1/5f15674dcb91b4492df295e5_Build.svg">
        <h4>Build an app</h4>
        <p>Start building your own dapp</p>
      </a>
    </el-col>
    <el-col :span="6" style="padding-left: 12px;">
      <a href="">
        <img src="https://assets-global.website-files.com/5e7b1a27d160ce49af1c24e1/5f15674dcb91b4492df295e5_Build.svg">
        <h4>Build an app</h4>
        <p>Start building your own dapp</p>
      </a>
    </el-col>
  </el-row> -->

  <el-row class="c-text-image">
    <el-col :span="15" :xs="24">
      <h2>Turning IPFS(File System) to IPFS(Function-as-a-Service)</h2>
      <p>By adding a TEA trusted computing module to an existing IPFS node, it can turn into a function-as-a-server node besides storing the code and data.</p>
      <p>IPFS stores and caches the code and the TEA module loads and execute the code</p>
      <p>TEA protocol provides proof-of-trust (Tea Pot) for verification.</p>

      <div>
        <a href="/#/doc_list/%2FWhat_is_TEA%3F%2FTEA_vs_IPFS.md"><el-button type="primary" size="small">more...</el-button></a>
        <!-- <a href="" style="margin-left: 24px;">I am link</a> -->
      </div>
      
    </el-col>
    <el-col :span="9" :xs="24" style="text-align:right;">
      <el-image fit="cover" src="https://github.com/tearust/tea-docs/blob/main/res/tea-on-top-of-ipfs.png?raw=true" ></el-image>
    </el-col>
  </el-row>

  <el-row class="c-text-image">
    <el-col :span="9" :xs="24" style="text-align:left;">
      <el-image fit="cover" src="https://github.com/tearust/tea-docs/blob/main/res/layer1-and-layer2.png?raw=true" ></el-image>
    </el-col>
    <el-col :span="15" :xs="24">
      <h2>Taking over complex computational workloads from blockchain as a trusted layer-2 oracle.</h2>
      <p>Smart contract running in blockchain (layer-1) calls an external function that runs inside TEA network(layer-2). The function result returns to smart contract with Proof-of-trust for verification.</p>
      <div style="text-align:left;">
        <a href="/#/doc_list/%2FWhat_is_TEA%3F%2FTEA_vs_blockchain.md"><el-button type="primary" size="small">more...</el-button></a>
        <!-- <a href="" style="margin-left: 24px;">I am lik</a> -->
      </div>
    </el-col>
    
  </el-row>
  <el-row class="c-text-image">
    <el-col :span="15" :xs="24">
      <h2>Hardware and crypto protected protocol ensures that you own your own data</h2>
      <p>Encrypting sensitve data before uploading to IPFS, distributing the decryption key to TEA modules that protected by hardware chips. Only trusted modules who passes remote attestation can access your data.</p>

      <div>
        <a href="/#/doc_list/%2FWhat_is_TEA%3F%2FTEA_vs_Trusted_computing.md"><el-button type="primary" size="small">more...</el-button></a>
        <!-- <a href="" style="margin-left: 24px;">I am link</a> -->
      </div>
      
    </el-col>
    <el-col :span="9" :xs="24" style="text-align:right;">
      <el-image fit="cover" src="/img/logo.png" ></el-image>
    </el-col>
  </el-row>

  <el-row class="c-text-image">
    <el-col :span="9" :xs="24" style="text-align:left;">
      <el-image fit="cover" src="https://github.com/tearust/tea-docs/blob/main/res/white_no_censorship_button.png?raw=true" ></el-image>
    </el-col>
    <el-col :span="15" :xs="24">
      <h2>Building dApps that born to be censorship-resistant</h2>
      <p>Build dApps that encrypted data stores in IPFS and code runs in TEA modules. This kind of dApps cannot be stopped or controlled by anyone, even the builder. </p>
      <div style="text-align:left;">
        <a href="/#/doc_list/%2FWhat_is_TEA%3F%2FBroken_internet_needs_a_fix.md"><el-button type="primary" size="small">more...</el-button></a>
        <!-- <a href="" style="margin-left: 24px;">I am link</a> -->
      </div>
    </el-col>
    
  </el-row>

  <!-- <div class="c-case">
    <h4>Use cases</h4>
    <h1>Build what's next</h1>
    <b>With T-rust, you can build new kinds of apps that couldn’t exist before.</b>
    <el-row style="margin-top: 32px;">
      <el-col :span="11" class="x-col">
        <div class="x-1 flex-center">
          <i class="el-icon-user"></i>
        </div>
        <div class="x-2">
          <h4>Apps with private data</h4>
          <p>Create alternatives to everyday apps where users’ privacy is guaranteed with encryption.</p>
        </div>
        
      </el-col>
      <el-col :span="11" :offset="2" class="x-col">
        <div class="x-1 flex-center">
          <i class="el-icon-s-promotion"></i>
        </div>
        <div class="x-2">
          <h4>Apps with private data</h4>
          <p>Create alternatives to everyday apps where users’ privacy is guaranteed with encryption.</p>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 32px;">
      <el-col :span="11" class="x-col">
        <div class="x-1 flex-center">
          <i class="el-icon-orange"></i>
        </div>
        <div class="x-2">
          <h4>Apps with private data</h4>
          <p>Create alternatives to everyday apps where users’ privacy is guaranteed with encryption.</p>
        </div>
        
      </el-col>
      <el-col :span="11" :offset="2" class="x-col">
        <div class="x-1 flex-center">
          <i class="el-icon-grape"></i>
        </div>
        <div class="x-2">
          <h4>Apps with private data</h4>
          <p>Create alternatives to everyday apps where users’ privacy is guaranteed with encryption.</p>
        </div>
      </el-col>
    </el-row>
  </div> -->

  <p style="margin-top: 120px;">
    <img src="/img/Trust-construction.png" width="100%"/>
  </p>
</div>
</template>
<style lang="scss" scoped>
.c-page{
  .c-text-image{
    margin-top: 90px;
    h2{
      font-size: 32px;
      color: #222222;
      font-weight: bold;
      position: relative;
      margin-bottom: 24px;
    }
    p{
      font-size: 17px;
      color: #333;
    }
    .el-button--primary{
      background: #35a696;
      border-color: #35a696;
    }
    // a{
    //   color: #35a696;
    // }
  }
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

  .c-case{
    margin-top: 120px;
    h4{
      color: #333;
      font-size: 20px;
    }
    h1{
      color: #000;
      font-size: 36px;
      font-weight: bold;
      margin: 15px 0 5px;
    }
    b{
      font-size: 18px;
      color: #444;
    }

    .x-col{
      position: relative;
      min-height: 100px;
      padding-left: 120px;

      .x-1{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background: rgb(242, 242, 252);
        position: absolute;
        left: 0;
        top: 0;

        i{
          color: #35a696;
          font-size: 42px;
        }
      }

      .x-2{
        padding: 12px 0;
        h4{
          color: #000;
          font-size: 18px;
          font-weight: bold;
        }
        p{
          color: #333;
          font-size: 14px;
          margin: 10px 0 0 0;
        }
      }
    }
  }

  .c-block{
    margin-top: 32px;
    .el-col{
      a{
        border-radius: 12px;
        border: 1px solid #f0f0f5;
        padding: 50px 20px 24px 20px;
        display: block;
        text-align: center;
        cursor: pointer;

        &:hover{
          transform: scale(.96);
        }
        
        h4{
          font-size: 24px;
          font-weight: bold;
          margin-top: 20px;
          color: #333;
        }
        p{
          font-size: 18px;
          margin: 15px 0 0 0;
          color: #444;
        }
      }
      
    }
  }
}

@media screen and (max-width : 600px) {
  .c-page{
    h1{
      font-size: 36px !important;
      line-height: 32px !important;
    }

    p{
      font-size: 24px !important;
    }

    .m-11{
      .el-button{
        width: 100% !important;
        margin: 10px 0 !important;
      }
    }

    .el-row{
      img{
        width: 100% !important;
      }
    }
  }
}
</style>