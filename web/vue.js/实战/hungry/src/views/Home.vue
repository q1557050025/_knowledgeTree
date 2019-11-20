<template>
	<div>
		<Header class="home-header" :headerOptions="headerOptions"></Header>
		<main class="home-main">
			<van-swipe class="home-nav" :loop="false">
				<van-swipe-item v-for="(foods, index) in this.foodTypes" :key="index">
					<van-row class="home-nav-swipe" type="flex">
						<van-col span="6" v-for="(item, index) in foods" :key="index">
							<div class="home-nav-swipe-item" @click="linkToShopFilter">
								<img :src="imgBaseUrl + item.image_url" class="home-nav-swipe-img">
								<p class="home-nav-swipe-title">{{item.title}}</p>
							</div>
						</van-col>
					</van-row>
				</van-swipe-item>
			</van-swipe>

			<h4 class="home-shop-text">
				<span>
					<svg t="1556198780238" class="icon" style="" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="2071" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
						height="16">
						<path
							d="M1004.8 358.4l-96-127.936c-3.744-5.024-8.192-9.376-12.8-13.536l0-152.928c0-35.328-28.672-64-64-64l-640 0c-35.36 0-64 28.672-64 64l0 152.96c-4.608 4.128-9.056 8.448-12.8 13.44l-95.968 127.968c-12.416 16.512-19.232 36.96-19.232 57.632l0 32c0 52.928 43.072 96 96 96l0 0 0 416c0 35.328 28.672 64 64 64l704 0c35.328 0 64-28.672 64-64l0-416c52.928 0 96-43.072 96-96l0-32c0-20.672-6.816-41.12-19.2-57.6zM832 64l0 128-640 0 0-128 640 0zM326.176 480l-134.048 0 128-224 70.048 0-64 224zM423.488 256l72.512 0 0 224-136.512 0 64-224zM528 256l72.512 0 64 224-136.512 0 0-224zM633.76 256l70.048 0 128 224-134.048 0-64-224zM64 448l0-32c0-6.944 2.24-13.664 6.4-19.2l96-128c6.048-8.064 15.52-12.8 25.6-12.8l91.264 0-128 224-59.264 0c-17.664 0-32-14.304-32-32zM640 960l-240 0 0-320 240 0 0 320zM864 960l-192 0 0-320c0-17.696-14.368-32-32-32l-240 0c-17.664 0-32 14.304-32 32l0 320-208 0 0-416 704 0 0 416zM960 448c0 17.696-14.304 32-32 32l-59.328 0-128-224 91.328 0c10.048 0 19.552 4.736 25.568 12.8l96 128c4.192 5.536 6.432 12.256 6.432 19.2l0 32z"
							p-id="2072" fill="#cdcdcd"></path>
					</svg>
				</span>
				&ensp;附近商家
			</h4>
			<shop-list :geohash="geohash" v-if="getDataDone" class="home-shop"></shop-list>
		</main>
		<foot-nav class="home-footer"></foot-nav>
	</div>
</template>

<script>
	import Header from '../components/header/header'
	import footNav from '../components/foot/footNav.vue'
	import shopList from '../components/common/shop-list.vue'
	import {
		mapMutations
	} from 'vuex'
	import {
		getFoodTypesByGeohash,
		cityGuess,
		getAddressByGeohash
	} from '../serviece/getData.js'
	import {
		Swipe,
		SwipeItem,
		Lazyload
	} from 'vant'
	import Vue from 'vue'

	Vue.use(Swipe).use(SwipeItem)
	Vue.use(Lazyload)

	import {
		Row,
		Col
	} from 'vant'
	Vue.use(Row).use(Col)


	export default {
		components: {
			Header,
			shopList,
			footNav
		},
		data() {
			return {
				geohash: '', //经纬度
				headerOptions: {
					logo: {
						goBack: true
					},
					title: '请选择地址...',
					signUp: true
				}, //header组件数据
				foodTypes: [], //导航食物分类
				imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
				getDataDone: false,
			}
		},
		// async beforeMount() {
		// 	if (!this.$route.params.geohash) {
		// 		const cityAddress = await cityGuess()
		// 		this.geohash = cityAddress.latitude + ',' + cityAddress.longitude
		// 	} else{
		// 		this.geohash = this.$route.params.geohash
		// 	}
		// 	//保存geohash到vuex
		// 	this.saveGeohash(this.geohash)
		// 	let address = await getAddressByGeohash(this.geohash)
		// 	this.headerOptions.title = address.address
		// 	this.saveAddress(address)
		// 	this.getDataDone = true
		// },
		mounted() {
			getFoodTypesByGeohash(this.geohash).then(res => {
				let resArr = [...res]
				let foodArr = []
				foodArr[0] = resArr.splice(0, 8)
				foodArr[1] = resArr.splice(0, 8)
				this.foodTypes = foodArr
			})
		},
		methods: {
			...mapMutations(['saveGeohash', 'saveAddress']),
			linkToShopFilter() {
				this.$router.push('/ShopFilter/')
			},

			setGeohash(data) {
				this.geohash = data.latitude + ',' + data.longitude
			},
			setData() {
				this.geohash = this.$route.params.geohash
			},
			async saveGeohashToVuex() {
							//保存geohash到vuex
				this.saveGeohash(this.geohash)
				let address = await getAddressByGeohash(this.geohash)
				this.headerOptions.title = address.address
				this.saveAddress(address)
				this.getDataDone = true
			}
		},
		// 改写路由加载前加载数据
		beforeRouteEnter(to, from, next) {
			// if(!to.params.geohash) {
			// 	cityGuess().then(res => {
			// 		next(vm => {
			// 			vm.geohash = res.latitude + ',' + res.longitude
			// 		})
			// 	})
			// }else {
			// 	next(vm => vm.setData())
			// }
			if(!to.params.geohash) {
				cityGuess().then(res => {
					next(vm => {
						vm.setGeohash(res)
						vm.saveGeohashToVuex()
					})
				})
			}else {
				next(vm => {
					vm.setData()
					vm.saveGeohashToVuex()
				})
			}
		},
	}
</script>

<style lang="scss">
	.home {
		&-nav {
			.van-swipe--indicator {
				background-color: black;

				&--active {
					background-color: #1989fa;
				}
			}
		}
	}
</style>

<style lang="scss" scoped>
	@import '../style/mixin.scss';

	.home {
		@include header-main-footer(45px);
		&-shop {
			margin-top: 20px;
			&-text {
				border-top: 2px solid $bdc;
				@include sclh(12px, #999, 20px);
				padding-top: 5px;
				padding-left: 5px;
			}
		}
		&-nav {
			border-bottom: solid 2px $bdc;
			margin-bottom: 20px;
			margin-top: 10px;

			&-swipe {
				flex-wrap: wrap;

				&-item {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					height: 86.28px;
				}

				&-img {
					@include wh(42.2px, 42.2px)
				}

				&-title {
					@include sclh(12.9px, #666, 40px)
				}
			}
		}
		
	}
</style>