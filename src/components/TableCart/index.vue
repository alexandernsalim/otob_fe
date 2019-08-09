<template> 
  <div name="TableCart">

    <div class="tableContainer">
      <table width="100%" class="table table-scroll small-first-col" style="border-radius: 1em; ">
        <tbody class="scrollContentCart">
          <tr ref="listItemCart" class="col-sm-12" v-if="listItemCart.length != 0"
              v-for="(product, index) in listItemCart" :key="index" >
            <td class="col-sm-7">{{ product.productName }}</td>
            <td class="col-sm-2 color-orange cart-price" width="25%">Rp {{ product.productPrice }}</td>
            <td class="col-sm-2" style="text-align: center;">
              <div class="quantity-toggle">
                <button @click="decrement(product, index)" class="btn btn-gray btn-left">&mdash;</button>
                <input type="text" :value="product.qty" readonly class="input-gray">
                <button @click="increment(product, index)" class="btn btn-gray btn-right">&#xff0b;</button>
              </div>
            </td>
            <td class="col-sm-1" style="text-align: right;">
              <button @click="onDelete(product, index)"
                style="padding:0.25em 0.5em; color:white; font-size: 18px"
                class="btn btn-red">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>

          <tr class="col-sm-12" v-else>
            <td width="4%" class="empty-cart" style="text-align: center"><h5>Empty cart :(</h5></td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="row" style="margin-bottom: 0.5em">
      <div class="col-sm-10" style="text-align:right">
        <div style="font-size: 13px">Total Belanja <b> ({{ getFormattedCurrency(countOfItem) }}) </b></div>
        <span class="color-orange checkout-price"> {{ getFormattedCurrency(sumOfPrice) }}</span>
      </div>
      <div class="col-sm-2" style="text-align:right" >
        <button class="btn btn-orange" @click="onOrder" :disabled="bookDisable(countOfItem)">Order Now</button>
      </div>
    </div>

  </div> 
 
</template>

<script src="./TableCart.js"></script>

<style scoped>
  .checkout-price{
    font-size: 22px;
    font-weight: bold;
  }

  .cart-price{
    font-size: 18px;
  }

  span {
    color: #929292;
  }

  .btn-orange {
    height: 50px;
    border-radius: 0.5em;
  }
</style>