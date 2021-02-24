import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store/store' // 引入store
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/reset.css'
import 'swiper/css/swiper.min.css'
import 'animate.css'
import api from './utils/api.js'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;
Vue.prototype.$api = api;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
