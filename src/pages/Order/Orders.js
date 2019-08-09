import SearchOrder from '@/components/SearchOrder'
export default {
    name: 'Orders',
    components: {
        SearchOrder
    },
    data () {
        return {
            listOrders: [],
            filters: '',
        }
    },
    props: {
      auth: ''
    },
    methods: {
        getOrders () {
            this.listOrders =  this.$store.getters.ORDERS
        },
        viewDetail(id){
            this.$router.push('orders/approvement/'+id)
        },
        doSearch (value) {
            this.filters = value
        }

    },
    mounted() {
        this.$store.dispatch('searchOrderByUserId', this.auth.userId)
        this.getOrders()
    },
    computed: {
        orders: function () {
            return this.$store.getters.ORDERS
        }
    }

}