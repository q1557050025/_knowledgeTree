/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 23:20:21
 * @LastEditTime: 2019-08-21 00:08:28
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/drag',
      name: 'drag',
      component: () => import(/* webpackChunkName: "drag" */ './views/drag.vue')
    }
  ]
})
