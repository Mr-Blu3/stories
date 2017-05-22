import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue';
import VueResource from 'vue-resource-2';
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(BootstrapVue);



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
