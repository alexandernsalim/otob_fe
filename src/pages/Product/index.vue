<template> 
  <div name="product">

    <div class="container header-body">
      <div class="block">
        <div class="row" style="margin-bottom: 0.5em">
          <div class="col-sm-3" >
            <h3>Product</h3>
          </div>
          <div class="col-sm-7">
            <SearchProduct/>
          </div>
          <div class="col-sm-2">
              <ProductHeaderDropdown @showModalForm="showModal = true"/>
          </div>
        </div>

        <TableProduct :listProduct="listProduct"/>
     </div>
    </div>

  </div>
</template>

<style >
   
</style>

<script src="./product.js"></script>