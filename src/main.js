import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index';
import store from '@/store/index'
Vue.config.productionTip = false

Vue.use(ElementUI);



// router.beforeEach((to, from, next) => {
//   to.fullPath = 
//   console.log(to);
//   console.log(from);
//   console.log(next);
// });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
