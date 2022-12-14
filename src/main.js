import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './assets/tailwind.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
