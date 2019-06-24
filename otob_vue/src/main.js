import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Bootstrap)
Vue.use(BootstrapVue)
Vue.component('icon',Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
