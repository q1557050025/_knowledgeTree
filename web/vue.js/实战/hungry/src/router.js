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
      path: '/City/:cityId',
      name: 'City',
      component: () => import('./views/City.vue')
    },
    {
      path: '/Home',
      redirect: '/Home/29.133253,119.641724'
    },
    {
      path: '/Home/:geohash',
      name: 'Home',
      meta: {keepAlive: true},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/Search',
      name: 'Search',
      component: () => import('./views/Search.vue')
    },
    {
      path: '/Order',
      name: 'Order',
      component: () => import('./views/Order.vue')
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: () => import('./views/profile/Profile.vue')
    },
    {
      path: '/Profile/notifaction',
      name: 'notifaction',
      component: () => import ('./views/profile/children/notifaction.vue')
    },
    {
      path: '/Profile/info',
      name: 'info',
      component: () => import ('./views/profile/children/info.vue')
    },
    {
      path: '/Profile/vip',
      name: 'vip',
      component: () => import ('./views/profile/children/vip.vue')
    },
    {
      path: '/Profile/coupon',
      name: 'coupon',
      component: () => import ('./views/profile/children/coupon/coupon.vue'),
      children: [
        {
          path: '/Profile/coupon/',
          redirect: '/Profile/coupon/normal'
        },
        {
          path: '/Profile/coupon/normal',
          name: 'normal',
          component: () => import ('./views/profile/children/coupon/children/normal.vue'),
        },
        {
          path: '/Profile/coupon/unique',
          name: 'unique',
          component: () => import ('./views/profile/children/coupon/children/unique.vue'),
        },
      ]
    },
    {
      path: '/Profile/balance',
      name: 'balance',
      component: () => import ('./views/profile/children/balance.vue')
    },
    {
      path: '/Profile/pointMall',
      name: 'pointMall',
      component: () => import ('./views/profile/children/pointMall.vue')
    },
    {
      path: '/Profile/collect',
      name: 'collect',
      component: () => import ('./views/profile/children/collect.vue')
    },
    {
      path: '/Profile/service',
      name: 'service',
      component: () => import ('./views/profile/children/service.vue')
    },
    {
      path: '/Profile/download',
      name: 'download',
      component: () => import ('./views/profile/children/download.vue')
    },
    {
      path: '/ShopFilter',
      name: 'ShopFilter',
      component: () => import('./views/ShopFilter.vue'),
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: () => import('./views/shop/Shop.vue'),
      children: [
        {
          path: '/',
          redirect: '/Shop/shoplist'
        },
        {
          path: '/Shop/shoplist',
          name: 'shopList',
          component: () => import('./views/shop/children/shoplist.vue')
        },
        {
          path: '/Shop/rating',
          name: 'rating',
          component: () => import('./views/shop/children/rating.vue')
        },
        {
          path: '/Shop/shopkeeper',
          name: 'shopkeeper',
          component: () => import('./views/shop/children/shopkeeper.vue')
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('./views/Login.vue'),
    },
  ]

})
