import TableCart from '@/components/TableCart'
import TableProductCustomer from '@/components/TableProductCustomer'
import ProgressBar from '@/components/ProgressBar'

export default {
  name: 'ProductCustomer', 
  props: {
    auth: {
      type: Object,
      required: true,
      default: ''
    }
  },
  components: {
    TableCart, 
    TableProductCustomer,
    ProgressBar
  },
  mounted () { 
    if(this.auth.isLogin == false){
      this.$router.push('/')
    }

    this.$store.dispatch('getProducts')
    this.$store.dispatch('getCart')
  },
  computed: {
    listProduct () {
      return this.$store.getters.PRODUCTS
    },
    listItemCart () {
      return this.$store.getters.CARTS
    },
  },
  methods: {
  
  }
}