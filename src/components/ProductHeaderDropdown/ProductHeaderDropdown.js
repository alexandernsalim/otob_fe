import CustomModal from '@/components/CustomModal/CustomModal.vue'

export default {
  name: 'product-header-dropdown',
  components: {
    CustomModal
  },
  data () {
    return {
      form: {
        name: '',
        description: '',
        listPrice: '',
        offerPrice: '',
        stock: ''
      },
      file: '',
      showModalAdd: false,
      showModalBatch: false
    }
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    onShowModal () {
      this.showModalAdd = true
    },
    onShowModalBatch () {
      this.showModalBatch = true
    },
    onHandleSubmit () {
      let product = this.form
      this.onSubmit(product)
    },
    onSubmit (product) {
      this.showModalAdd = false
      this.$store.dispatch('addProduct', product)
    },
    onHandleUpload (event){
      let formData = new FormData();
      formData.append('file', this.file);
      this.onUpload(formData)
    },
    onChangeFileUpload (){
        this.file = this.$refs.file.files[0];
    },
    onUpload (formData) {
      this.showModalBatch = false
      this.$store.dispatch('uploadProduct', formData)
    },
    onReset () {
      this.$refs.form.reset()
    }
  }

}