import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = true;
Vue.use(BootstrapVue);

const APP = new Vue({
  router,
  render: h => h(App)
});
export default APP;
APP.$mount('#app');
