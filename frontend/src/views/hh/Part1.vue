<template>
<div style="background: url('/img/bg.jpg');margin-top:-1px; padding-bottom:40px;">
  <div class="box ww x-p1">
  
    <div class="c-tt1">

      <div class="t-ifm">
        <div style="position:relative;padding-top:56.25%;">
          <iframe
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            src="https://www.youtube.com/embed/DSmnP_kgcig"
            title="TEA Project in 90 seconds Youtube"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <h1 class="c-h1">
        Elevating Decentralized Trusted Computing to a T
      </h1>

    </div>

    <div class="m-11">
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
<style lang="scss">
.x-p1{
  .t-ifm{
    width: 1380px;
  }
  .c-tt1{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
    margin: 0 auto;
    .c-h1{
      font-size: 60px;
      color: #35a696;
      margin-left: 30px;
      font-weight: bold;
      text-align: left;
    }
  }
  .m-11{
    text-align:right;
  }
}
@media screen and (max-width : 600px) {
  .x-p1{
    .t-ifm{
      width: 100vw;
    }

    .c-tt1{
      flex-direction: column;
      .c-h1{
        font-size: 40px;
        margin-left: 0;
        margin-top: 15px;
        padding: 0 12px;
        color: #fff;
      }
    }
    .m-11{
      text-align: center;

      .el-button{
        margin: 0 0 20px 0 !important;
        width: 90% !important;
      }
    }
  }
}
</style>