import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/CityList'
    },
    {
      path: '/CityList',
      name: 'CityList',
      component: () => import('./views/CityList.vue')
    },
    {
      path: '/City/:cityid',
      name: 'City',
      component: () => import('./views/City.vue')
    },
  ]
})
