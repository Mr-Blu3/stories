import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
