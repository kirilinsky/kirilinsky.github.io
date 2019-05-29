import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style/style.styl'

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
