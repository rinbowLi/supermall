import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

//解决移动端300ms点击延迟问题
FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(Toast)
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
})

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
