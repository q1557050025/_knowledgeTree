const state = {
	geohash: '31.22299,121.36025',
	address: {},
	canShopListScroll: false,
}


const mutations = {
	saveGeohash(state, geohash) {
		state.geohash = geohash
	},
	saveAddress(state, address) {
		state.address = address
	},
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
