<template>
<div style="background: #fff;">
  <div class="box ww">
  
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
          src="https://www.youtube.com/embed/DSmnP_kgcig"
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

  </div>
</div>

</template>