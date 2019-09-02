/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 09:02:41
 * @LastEditTime: 2019-08-15 13:31:50
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {api} from './api/api.js'

Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
