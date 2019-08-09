import Vue from 'vue'
import Vuex from 'vuex'
import {router} from "./router/index.js"
Vue.use(Vuex)

import login from '@/store/loginStore'
import user from '@/store/userStore'
import product from '@/store/productStore'
import cart from '@/store/cartStore'
import order from '@/store/orderStore'

export default new Vuex.Store({
  modules: {
    login,
    user,
    product,
    cart,
    order,
    router
  }
})
