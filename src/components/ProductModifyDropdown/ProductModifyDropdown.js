export default {
    name: 'product-header-button',
    components: {
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
        }
    },
    mounted () {

    },
    computed: {

    },
    methods: {
        showModalUpdate (product, index) {
            this.$bvModal.show('modalProductForm')
        },
        onHandleSubmit (event) {
            let data = this.form
            this.form = ''
            this.onSubmit(data)

            event.preventDefault()
        },
        onUpdate: function (product, index) {
            this.$refs.form = product
        },
        onSubmit (data) {
            this.$store.dispatch('updateProduct', data)
            this.$refs.modalProductForm.hide()
        },
        onDelete: function (product, index) {
            const confirmDelete = confirm("Are you sure to delete this?");

            if (confirmDelete) {
                product.index = index
                this.$store.dispatch('deleteProduct', product)
            }
        },
        close () {
            this.close();
        },
        onReset () {
            this.$refs.form.reset()
        }
    }

}