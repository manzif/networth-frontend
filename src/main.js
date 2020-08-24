import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Defaults from './layouts/Defaults'
import NosideBar from './layouts/NosideBar'

Vue.component('default-layout', Defaults)
Vue.component('no-sidebar-layout', NosideBar)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
