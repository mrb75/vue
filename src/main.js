import Vue from 'vue'
import App from './App.vue'
import store from './assets/js/store'

Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
