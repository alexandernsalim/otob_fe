<template>
  <div name="TableProductCustomer">
      <div class="row" style="margin-bottom: 0.5em">
        <div class="col-sm-4" >
          <h3>List of Product</h3>
        </div>
        <div class="col-sm-8" style="text-align:right">
          <SearchProduct/>
        </div>
      </div>

      <div class="tableContainer">
        <table width="100%" class="table table-hover table-striped table-scroll small-first-col">

        <thead>
          <tr class="col-sm-12">
            <td class="col-sm-2">Name</td>
            <td class="col-sm-2">Description</td>
            <td class="col-sm-2">List Price</td>
            <td class="col-sm-2">Offer Price</td>
            <td class="col-sm-1">Stock</td>
            <td class="col-sm-4">Action</td>
          </tr>
          </thead>

          <tbody>
          <tr class="col-sm-12" v-for="(product, index) in listProduct" :key="index">
            <td class="col-sm-2">{{ product.name }}</td>
            <td class="col-sm-2">{{ product.description }}</td>
            <td class="col-sm-2"> {{ getFormattedCurrency (product.listPrice) }}</td>
            <td class="col-sm-2"> {{ getFormattedCurrency (product.offerPrice) }}</td>
            <td class="col-sm-1">{{ product.stock }}</td>
            <td class="col-sm-3">
              <div class="quantity-toggle" v-if="isStockAvailable(product.stock)">
                <button @click="decrement(product, index)" :disabled="decDisable(product)" class="btn btn-gray btn-left">&mdash;</button>
                <input type="text" :value="product.qty" readonly class="input-gray">
                <button @click="increment(product, index)" :disabled="incDisable(product)" class="btn btn-gray btn-right">&#xff0b;</button>
                <button @click="addToCart(product, index)" class="btn btn-blue">Add</button>
              </div>
              <div v-else style="text-align: center; color: red; font-style: italic">Stock Habis</div>
            </td>
          </tr>
          </tbody>

        </table>
    </div>
  </div>
</template>

<script src="./TableProductCustomer.js"></script>

<style></style>
