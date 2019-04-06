import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/list'
    },
    {
      path: '/list',
      name: 'list',
      meta: {
        title: '商品列表'
      },
      component: () => import('./views/list.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      meta: {
        title: '商品列表'
      },
      component: () => import('./views/product.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {
        title: '商品列表'
      },
      component: () => import('./views/cart.vue')
    },

  ]
})
