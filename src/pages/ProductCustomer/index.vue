<template>
  <div name="ProductCustomer">
    <div class="container">
      <!-- Table Product -->
      <div class="block">
        <TableProductCustomer class="tbl" :listProduct="listProduct" :isLogin="auth.isLogin"/>
      </div>

      <!-- Table Cart -->
      <div class="block" style="margin-top:2em;" v-if="auth.isLogin==true">
        <TableCart class="tbl" :listItemCart="listItemCart"/>
      </div>

      <ProgressBar/>
    </div>
  </div>
      
</template>

<style >
   
   /* ============================== CSS FOR BUTTON MODIFY =========================== */
  .quantity-toggle {
    display: flex;
  }

  .quantity-toggle input {
    border: 0;
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
    width: 3em;
    text-align: center;
    padding: 0.1em;
  }
  .quantity-toggle button {
    /*border: 2px solid #ddd;*/
    padding: .5em .5em .5em .5em;
    font-size: 1em;
    cursor: pointer;
  }

  .quantity-toggle button.btn-right{
    border-radius: 0 0.5em 0.5em 0;
  }

   .quantity-toggle button.btn-left{
     border-radius: 0.5em 0 0 0.5em;
   }

  .btn-blue{
    padding:0 0.5em 0 0.5em;
    margin-left:0.5em;
    width: 7em;
    border-radius: 0.5em;
  }
   /* ======================== END OF CSS FOR BUTTON MODIFY =========================== */

</style>

<script src="./productCustomer.js"></script>