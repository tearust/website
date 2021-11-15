<template>
<div style="background: url('/img/bg.jpg');margin-top:-1px; padding-bottom:40px;">
  <div class="box ww">
  
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 40px 0;
        margin: 0 auto;
      "
    >
      <div>
        <iframe
          width="520"
          height="300"
          src="https://www.youtube.com/embed/DSmnP_kgcig"
          title="TEA Project in 90 seconds Youtube"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <h1
        style="
          font-size: 60px;
          color: #35a696;
          margin-left: 30px;
          font-weight: bold;
          text-align: left;
        "
      >
        Elevating Decentralized Trusted Computing to a T
      </h1>

    </div>

    <div class="m-11" style="text-align:right;">
      <el-button
        size="large"
        round
        style="width: 240px; font-weight: bold; font-size: 22px;background:#35a696;height:56px;border:none;"
        type="success"
        @click="$router.push('/doc_list')"
        >DOCUMENTS</el-button
      >
      <el-button
        size="large"
        round
        style="
          width: 240px;
          margin-left: 100px;
          font-weight: bold;
          font-size: 22px;
          background:#35a696;
          height:56px;border:none;
        "
        type="success"
        @click="$router.push('/doc_list/Try_the_demo%2FREADME.md')"
        >DEMO</el-button
      >
    </div>

  </div>
</div>

</template>