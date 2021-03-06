Vue.config.productionTip = false
import '@babel/polyfill/dist/polyfill.min.js'
import './assets/css/index.less'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import TheUnit from './unit/unit.js'
import LoadUnit from '@/unit/load-unit.vue'
import { parseData } from '@/global.js'
Vue.prototype.parseData = parseData
Vue.config.productionTip = false
Vue.use(ELEMENT)
Vue.component('TheUnit', TheUnit)
Vue.component('LoadUnit', LoadUnit)
// this.$options.components["TheUnit"] = TheUnit
new Vue({
  router,
  store,
  data: {
    Bus: new Vue()
  },
  render: (createElement) => createElement(App)
}).$mount('#app')
