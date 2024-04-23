import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import filter from './filter'
import 'vant/lib/index.css'
import './resetui.scss'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
