<template>
  <div>
    <div class="thx container col-sm-6">
      <div style="text-align: center">
      <h1 style="color: rgb(38, 164, 218); font-weight: bold">Thank you</h1>
      <hr style="border: 2px solid rgb(38, 164, 218)"/>
      </div>

      <p style="text-align: center">
        Hai {{ dataOrder.userEmail }},<br>
        Terimakasih telah berbelanja di Blibli Bazaar.
        Jangan lupa menyelesaikan pembayaran pesanannya ya...
        <br>
      </p>
      <div style="border: 2px dashed rgb(38, 164, 218); padding: 0.5em; text-align: center; background-color: white">
        Id pesanan saat ini:
        <h2><a href="/login">{{ dataOrder.orderId }}</a></h2>
      </div>
      <div>
        <br>
        <u><b>Langkah - langkah pembayaran: </b></u><br>
        <ol style="text-align:left">
          <li>Download nota transaksi anda</li>
          <li>Kunjungi lokasi bazaar</li>
          <li>Tunjukkan nota pada cashier</li>
          <li>Bayarkan sesuai jumlah tertera pada nota</li>
        </ol>
<!--        <div style="font-size: 11px">-->
<!--          Karena keterbatasan stock, beberapa produk berikut tidak dapat masuk dalam bagian pemesanan anda-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<style>
  #ordr_detail{
    color: #0096D9;
    font-size: 13px;
  }
  .thx {
    /*background-color: rgb(38, 164, 218);*/
    /*text-align:center;*/
    /*border:1px solid white;*/
    border-radius: 1em;
    margin-top:3em;
  }
</style>

<script>
export default {
  name: 'Product',
  props: {
    auth: {}
  },
  data() {
    return{
      username : 'My Name'
    }
  },
  computed: {
    currentOrder () {
      return this.$store.getters.getCurrentOrder
    },
    dataOrder () {
      if(this.currentOrder)
        return this.currentOrder.order
      return ''
    },
    outOfStock () {
      if(this.currentOrder)
        return this.currentOrder.outOfStockProducts
      return ''
    }
  }
}
</script>


