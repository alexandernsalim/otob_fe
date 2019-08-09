import SearchProduct from '@/components/SearchProduct'
import ProductHeaderDropdown from '@/components/ProductHeaderDropdown'
import TableProduct from '@/components/TableProduct'

export default {
  name: 'Product',  
  props: {
    'auth': ''
  },
  components: {
    SearchProduct,
    ProductHeaderDropdown,
    TableProduct
  },  
  data() {
    return {
      showModalUpd: false
    }
  },
  mounted () {
    if(this.auth.isLogin === false){
      this.$router.push('/')
    }
    if(this.auth.isAdmin === false){
      this.$router.push('/not-found')
    } 

    this.$store.dispatch('getProducts')   
  },
  computed: {
    listProduct: function () {
      return this.$store.getters.PRODUCTS
    },
  },
  watch: {

  },
  methods: {
    onDelete: function (product, index) {
      const confirmDelete = confirm("Are you sure to delete this?");

      if (confirmDelete) {
        product.index = index
        this.$store.dispatch('deleteProduct', product) 
      }
    },
    onUpdate: function (product, index) {
      // this.$refs['modal-add'].show()
      // this.submitButton = false
      this.isProductVisible = true
      this.$refs.form = product 
    },
    showModals () {
      this.showModal = true
    }
  },
  
}