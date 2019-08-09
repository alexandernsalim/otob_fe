import CustomModal from '@/components/CustomModal/CustomModal.vue'

export default {
    name: 'User',
    props: {
      'auth': ''
    },
    data() {
      return { 
        form: {
          email: '',
          role: ''
        },
        options: [
          { value: null, text: 'Please select role' },
          { value: '1', text: 'Customer' },
          { value: '2', text: 'Cashier' },
          { value: '3', text: 'Admin' },
        ],
        showModalForm : false,
      }
    },
    components: {
      CustomModal
    },
    mounted () {
      if(this.auth.isLogin === false){
        this.$router.push('/')
      }
      if(this.auth.isAdmin === false){
        this.$router.push('/not-found')
      }
      this.$store.dispatch('getUser')   
    },
    computed: {
      listUser: function () { 
        return this.$store.getters.USERS
      },  
    },
    watch: {

    },
    methods: {
      showModalUser: function() {
        this.showModalForm = true
      },
      onSubmit: function(){
        if(this.form.role == 1){
            this.$store.dispatch('registerCustomer', this.form)
        }else if(this.form.role == 2){
            this.$store.dispatch('registerCashier', this.form)           
        }else if(this.form.role == 3){
            this.$store.dispatch('registerAdmin', this.form)           
        }
        this.showModalForm = false
      },
      onDelete: function (user, index) {
        const confirmDelete = confirm("Are you sure to delete this?");
  
        if (confirmDelete) {
          user.index = index
          this.$store.dispatch('deleteUser', user) 
        }
      },
      onReset () {
        this.$refs.form.reset()
      }
    },
    
  }