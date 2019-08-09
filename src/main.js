import Vue from 'vue'
import App from './components/App/App.vue'
import {router} from "./router/index.js"
import store from './store'
import './registerServiceWorker'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import FontAwesome from 'font-awesome/css/font-awesome.css'
import Axios from 'axios'
import VueCookies from 'vue-cookies'
import config from '../config'
import VueHtmlToPaper from 'vue-html-to-paper'
import { PDFJS } from 'pdfjs-dist'
// import jsPDF from 'jspdf'
// import VueHtml2Canvas from 'vue-html2canvas'

Vue.use(Bootstrap)
Vue.use(BootstrapVue)
Vue.use(FontAwesome)
Vue.use(VueCookies)
// Vue.use(VueHtml2Canvas)

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ]
}

Vue.use(VueHtmlToPaper, options)
window.config = config

Axios.interceptors.request.use(
  function (config) {
    config.withCredentials = true
    config.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return config
  }
)

Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export { vm }

// const vm = new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })
//
// export { vm }
