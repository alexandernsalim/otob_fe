<template>
  <div name="login">

    <CustomForm>
      <div slot="slot-title">
        Welcome to Blibli Bazaar
      </div>

      <div slot="slot-form">
        <b-form @submit.prevent="onLogin">
          <b-form-input v-model="form.username" placeholder="Enter your username" required></b-form-input>
          <b-form-input v-model="form.password" placeholder="Enter your password" required type="password"></b-form-input>       
          <b-button type="submit" variant="primary" style="width: 100%;">Login</b-button>
        </b-form> 
      </div>

      <div slot="slot-notif">
        If you don't have an account, <a href="/register" >Register Here</a> <br> 
      </div>
    </CustomForm>
    
  </div>
</template>

<script>
import CustomForm from '@/components/CustomForm'

export default {
  name: 'Login',
  props: {
    auth: {
      isLogin: '',
      isAdmin: '',
      isCashier: '',
      isCustomer: ''
    }
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      dataLogin: [],
      flagLogin: ''
    }
  },
  components: {
    CustomForm
  }, 
  mounted () {
    this.onRoute()
  },
  computed: {

  },
  methods: {
    onLogin (evt) {
      let formData = new FormData();
      formData.append('username', this.form.username);
      formData.append('password', this.form.password);
      this.$store.dispatch('doLogin', formData)
    },
    onRoute () {
      if(this.auth.isLogin == true){
        if(this.auth.isAdmin == true){
          this.$router.push('/products/manage')
        }else if(this.auth.isCashier == true){
          this.$router.push('/orders')
        }else if(this.auth.isCustomer == true){
          this.$router.push('/products')
        }
      }
    }
  },
  watch: {
    auth () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>