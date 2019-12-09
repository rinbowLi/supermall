import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from 'components/common/toast'
import FastClick from 'fastclick'

//解决移动端300ms点击延迟问题
FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(Toast)

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
