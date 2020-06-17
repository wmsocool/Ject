Vue.config.productionTip = false
import '@babel/polyfill/dist/polyfill.min.js'
import './assets/css/index.less'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import TheUnit from './unit/unit'
import { parseData } from '@/global.js'
Vue.prototype.parseData = parseData
Vue.config.productionTip = false
Vue.use(ELEMENT)
Vue.component('TheUnit', TheUnit)
// this.$options.components["TheUnit"] = TheUnit
new Vue({
  router,
  store,
  data: {
    Bus: new Vue()
  },
  render: (h) => h(App)
}).$mount('#app')
