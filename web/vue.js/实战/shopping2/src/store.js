import Vue from 'vue'
import Vuex from 'vuex'
import product_data from './product.js'

Vue.use(Vuex)

function getFilterArray(array) {
  const res = []
  const json = {}
  for(let i = 0; i < array.length; i++) {
    const _self = array[i];
    if(!json[_self]){
      res.push(_self)
      json[_self] = 1
    }
  }
  return res
}

export default new Vuex.Store({
  state: {
    productList: [],
    cartList: []
  },
  getters: {
    brands: state => {
      const brands = state.productList.map(item => item.brand)
      return getFilterArray(brands)
    },
    colors: state => {
      const colors = state.productList.map(item => item.color)
      return getFilterArray(colors)
    }
  },
  mutations: {
    setProductList(state, data) {
      state.productList = data
    },
    addCart() {
      
    }
  },
  actions: {
    getProductList(context) {
      setTimeout(() => {
        context.commit('setProductList', product_data)
      },1000)
    },
  }
})
