import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/reset.css'
import 'swiper/css/swiper.min.css'
import 'animate.css'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
