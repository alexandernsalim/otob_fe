<template>
  <div class="not-found">
    <img src="@/static/images/dotted-loader.gif" >
    <div id="txtLoading">Sedang memproses</div>
  </div>
</template>

<style>
  .not-found {
    top: 45%;
    width: 100%;
    text-align: center;
  }
  .not-found img {
    width: 150px;
    height: 25px;
  }
  #txtLoading{
    font-size: small;
  }
</style>
