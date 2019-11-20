import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import shop from './modules/shop'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
		city,
		shop
  },
})
