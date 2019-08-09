import CustomModal from '@/components/CustomModal/CustomModal.vue'

export default {
  name: 'TableProduct',
  props: {
    listProduct: ''
  },
  components: {
    CustomModal
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
        listPrice: '',
        offerPrice: '',
        stock: '',
        index: ''
      },
      quantity: 1,
      bookData: '',
      index: '',
      showModalUpd: false
    }
  },
  mounted () { 
  },
  computed: {
 
  },
  watch: {

  },
  methods: {
    onShowModal (product, index) {
      this.showModalUpd = true
      this.form = product
      this.form.index = index
    },
    onHandleSubmit () {
      let product = this.form
      this.onUpdate(product)
    },
    onUpdate (product) {
      this.showModalUpd = false
      this.$store.dispatch('updateProduct', product)
    },
    onConfirmDelete: function (product, index) {
      const confirmDelete = confirm("Are you sure to delete this?");

      if (confirmDelete) {
          product.index = index
          this.$store.dispatch('deleteProduct', product)
      }
    },
    onReset () {
      this.$refs.form.reset()
    },
    resetForm () {
      this.form = ''
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