/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 09:02:41
 * @LastEditTime: 2019-08-15 13:33:58
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/msite'
    },
    {
      path: '/msite',
      name: 'msite',
      component: () => import(/* webpackChunkName: "about" */ './views/msite/msite.vue')
    },
  ]
})
