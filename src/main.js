import Vue from 'vue'
import App from './App.vue'
import JsmpegPlayer from './index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'
Vue.use(JsmpegPlayer)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
