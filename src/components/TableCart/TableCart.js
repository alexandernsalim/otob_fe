export default {
  name: 'TableCart', 
  props: {
    listItemCart: ''
  },
  computed: {
    countOfItem () {
      return this.listItemCart.length
    },
    sumOfPrice () {
      let sum = 0
      this.listItemCart.map(function(product) {
        sum += product.productPrice
      })
      return sum
    }
  },
  methods: {
    decrement: function(product, index) {
      if( product.qty == 1) {
        this.onDelete(product, index)
      }
      else{
        product.qty--
        product.index = index
        product.type = false
  
        this.$store.dispatch('updateItemCart', product)
      }
    },
    increment: function(product, index) {
      product.qty++
      product.index = index
      product.type = true

      this.$store.dispatch('updateItemCart', product)
    },
    onDelete: function (product, index) {
      product.index = index
      this.$store.dispatch('deleteItemCart', product)
    },
    onOrder: function () {
      const confirmOrder= confirm("Are you sure want to Order all item on cart?");

      if (confirmOrder) {
        this.$store.dispatch('orderItemCart')
        this.$router.push('/orders/thx')
      }
    },
    bookDisable (sum) {
      return sum === 0;
    },
    getFormattedCurrency (value) {
      let result = ''
      value = value === null ? 0 : value
      let reverseValue = value.toString().split('').reverse().join('')
      for (let i = 0; i < reverseValue.length; i++) {
        if (i % 3 === 0) {
          result += reverseValue.substr(i, 3) + '.'
        }
      }
      return 'Rp ' + result.split('', result.length - 1).reverse().join('')
    }
  },
  
}