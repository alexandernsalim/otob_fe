import SearchProduct from '@/components/SearchProduct'

export default {
  name: 'TableProductCustomer',
  props: {
    'listProduct': '',
    'isLogin': false
  },
  components: {
    SearchProduct
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
        listPrice: '',
        offerPrice: '',
        stock: ''
      },
      filterByName: [],
      sortByName: false,
      quantity: 1,
      bookData: {},
    }
  },
  mounted () {
  },
  computed: {
 
  },
  watch: {

  },
  methods: {
    isStockAvailable(stock){
      if(stock <= 0){
        return false;
      }
      return true;
    },
    addToCart: function (product, index) {
      product.index = index  
      this.$store.dispatch('addToCart', product)
    },
    decDisable: function (product) {
      if (product.stock === 0 || product.qty === 1) {
        return true
      } else {
        return false
      }
    },
    incDisable: function (product) {
      if (product.stock === 0 || product.stock === product.qty) {
        return true
      } else {
        return false
      }
    },
    increment: function(product) {
      product.qty++
      product.type = true
    },
    decrement: function (product) {
      product.qty--
      product.type = false
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