import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import MyHttpServer from'./plugins/http.js'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(MyHttpServer);
new Vue({
	store,
	router,
  render: h => h(App),
}).$mount('#app')
