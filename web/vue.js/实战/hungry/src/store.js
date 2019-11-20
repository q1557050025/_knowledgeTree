import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    geohash: '31.22299,121.36025',
    address: {},
    canShopListScroll: false,
  },
  mutations: {
    saveGeohash(state, geohash) {
      state.geohash = geohash
    },
    saveAddress(state, address) {
      state.address = address
    },
    TURN_SHOPLIST_SCROLL_ON(state) {
      state.canShopListScroll = true
    },
    TURN_SHOPLIST_SCROLL_OFF(state) {
      state.canShopListScroll = false
    },
  },
  actions: {
    
  }
})
