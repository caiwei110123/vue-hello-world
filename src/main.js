import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index';
import store from '@/store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAxios, axios);


// router.beforeEach((to, from, next) => {
//   to.fullPath = 
//   console.log(to);
//   console.log(from);
//   console.log(next);
// });

new Vue({
  axios,
  VueAxios,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
