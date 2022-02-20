// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import {addCookie, getCookie, delCookie} from '../src/assets/js/cookie'
// import VueAxios from 'vue-axios'

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
Vue.prototype.$cookieStore = {
  addCookie,
  getCookie,
  delCookie
}

// Vue.use(axios,VueAxios);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// 接收数据
// axios.post('/api/PC/LoginServlet', {
//   params: {
//   },//是发送请求的查询参数对象
//   headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
//   // dataType: "json"
// })
//   .then((res) => {
//     console.log("hhh");
//     console.log(res);

//   })
//   .catch(function (error) {
//     console.log(error)
//   })



// 提交数据
// axios({
//   url: '/api/PC/LoginServlet',
//   method: 'post',
//   data: {
//     username: "xiao",
//     password: "123123"
//   },
//   transformRequest: [function (data) {
//     data = Qs.stringify(data);
//     return data;
//   }],
//   headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
// })
