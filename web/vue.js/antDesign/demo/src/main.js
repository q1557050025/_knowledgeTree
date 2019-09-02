/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 19:42:38
 * @LastEditTime: 2019-08-19 19:46:48
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
