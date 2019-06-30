import Vue from 'vue'
import Vuex from 'vuex'
import { mapGetters, mapActions } from 'vuex';

import login from '@/store/loginStore'
import user from '@/store/userStore'
import product from '@/store/productStore'
import cart from '@/store/cartStore'
import order from '@/store/orderStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    user,
    product,
    cart,
    order
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
