const state = {
	canShopListScroll: false,
}


const mutations = {
	turnShopListScrollOn(state) {
		state.canShopListScroll = true
	},
	turnShopListScrollOff(state) {
		state.canShopListScroll = false
	}
}


export default {
  namespaced: true,
  state,
  mutations
}
