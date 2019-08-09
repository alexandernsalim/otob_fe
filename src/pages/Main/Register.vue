<template>
<div name="register">

  <CustomForm>
    <div slot="slot-title" id="title">
      Register Your Self
    </div>

    <div slot="slot-form">
      <b-form @submit.prevent="onRegister">
        <b-form-input v-model="form.email" placeholder="Enter your email" required></b-form-input>
        <b-button type="submit" variant="success" style="width:100%">Register</b-button>
      </b-form> 
    </div>

    <div slot="slot-notif">
      If you already have an account, <a href="/" >Login Here</a>
    </div>
  </CustomForm> 
  
</div>
</template>

<script>
import CustomForm from '@/components/CustomForm'

export default {
  name: 'Register',
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
        email: ''
      }
    }
  },
  components: {
    CustomForm
  },
  mounted () {
    if(this.auth.isLogin == true){
      if(this.auth.isAdmin == true){
        this.$router.push('/Product')
      }else if(this.auth.isCashier == true){
        this.$router.push('/Order')
      }else if(this.auth.isCustomer == true){
        this.$router.push('/product_cust')
      }
    }
  },
  methods: {
    onRegister () {
      this.$store.dispatch('registerCustomer', this.form)
    }
  }
}
</script>

<style scoped>
#title {
  color: #28a745;
}
</style>