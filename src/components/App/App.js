import CustomModal from '@/components/CustomModal/CustomModal.vue'

export default {
  data () {
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        newPassword2: ''
      },
      showChangePassword: false
    }
  },
  components: {
    CustomModal
  },
  mounted () {
    this.checkAuth()
  },
  computed : {
    isAuth () {
      console.log(this.$store.getters.isAuthorized)
      return this.$store.getters.isAuthorized
    },
    isLogin () {
      if (this.isAuth && this.isAuth.isLogin){
        return true
      }
      return false
    },
    isAdmin () {
      if (this.isAuth && this.isAuth.userRole == config.role_admin){
        return true
      }
      return false
    },
    isCashier () {
      if (this.isAuth && this.isAuth.userRole == config.role_cashier){
        return true
      }
      return false
    },
    isCustomer () {
      if (this.isAuth && this.isAuth.userRole == config.role_customer){
        return true
      }
      return false
    },
    userId () {
      if (this.isAuth)
        return this.isAuth.userId
      console.log(this.isAuth)
      return ''
    },
    userAuth () {
      console.log('userAuth')
      let auth = {
        isLogin: this.isLogin,
        isAdmin: this.isAdmin,
        isCashier: this.isCashier,
        isCustomer: this.isCustomer,
        userId: this.userId
      }
      return auth
    }
  },
  methods : {
    checkAuth () {
      console.log('checkAuth')
      this.$store.dispatch('checkAuthorized')
    },
    onLogout () {
      this.$store.dispatch('doLogout')
      this.$router.push('/')
    },
    onRoute () {
      if(this.userAuth.isLogin == true){
        if(this.userAuth.isAdmin == true){
          this.$router.push('/products/manage')
        }else if(this.userAuth.isCashier == true){
          this.$router.push('/orders')
        }else if(this.auth.isCustomer == true){
          this.$router.push('/products')
        }
      }
    },
    showModalChangePassword () {
      this.showChangePassword = true
    },
    onChangePassword () {
      if(this.form.newPassword !== this.form.newPassword){
        alert('Password not match')
      }else {
        let formData = new FormData();
        formData.append('oldPassword', this.form.oldPassword);
        formData.append('newPassword', this.form.newPassword);
  
        this.$store.dispatch('doChangePassword', formData)
      }
    }
  },
  watch: {
  
  }
  
}