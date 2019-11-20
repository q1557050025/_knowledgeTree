<template>
	<div class="shop-list">
		<aside class="shop-list-aside" ref="aside">
			<li :class="{'active':selectedMenuIndex === index}" v-for="(menu, index) in menuList" @click="onClickOfNav(index)"
				:key="index">
				<img :src="getImgPath(menu.icon_url)" alt="" class="icon" v-if="menu.icon_url !== ''">
				{{menu.name}}
			</li>
		</aside>
		<main class="shop-list-main" ref="main" @scroll="onScrollOfMain()">

			<span class="bug" v-if="show" style="position:absolute;top: -9999px;left:-9999px">
				这个标签用于修复一个bug 囧;
			</span>

			<ul class="menu" v-for="(menu, index) in menuList" :key="index">
				<h1 :ref="`menu${index}`" class="menu-name">{{menu.name}}</h1>
				<li v-for="(food, index) in menu.foods" :key="index">
					<img :src="imgBaseUrl + food.image_path" alt="" class="img">
					<div class="detailes">
						<h1 class="food-name">{{food.name}}</h1>
						<p class="food-description">{{food.description}}</p>
						<h4 class="food-tips">{{food.tips}}</h4>
						<h4 class="food-footer">
							<span class="food-price">
								<span>¥</span>
								<span>{{food.specfoods[0].price}}</span>
								<span v-if="food.specifications.length">起</span>
							</span>
							<span @click="onClickReduce(food._id)" v-if="foodList[shopId][food._id] 
								&& foodList[shopId][food._id].isShow">
								<icon-base width="20" height="20" class="food-icon">
									<icon-reduce></icon-reduce>
								</icon-base>
							</span>
							<span class="food-num" v-if="foodList[shopId][food._id] 
								&& foodList[shopId][food._id].isShow">
								{{foodList[shopId][food._id].num}}
							</span>
							<span @click="onClickAdd(food._id,food.name)">
								<icon-base width="20" height="20" class="food-icon">
									<icon-add></icon-add>
								</icon-base>
							</span>
						</h4>
					</div>
				</li>
			</ul>
		</main>
		<div class="shop-list-footer-wrap" v-if="isCartShow" @click="isCartShow = false">

		</div>
		<footer class="shop-list-footer">
			<h4 class="footer-title">
				满100,减99,还差
				<span class="footer-balance">
					0
				</span>
				元
			</h4>
			<section class="list" v-if="isCartShow">
				<header class="list-header">
					<span class="title">已选商品</span>
					<span class="clear" @click="showConfirm">
						<icon-base width="12px" height="12px">
							<icon-clear></icon-clear>
						</icon-base>
						清空
					</span>
				</header>
				<ul class="list-main">
					<li v-for="(food, key) in foodList[shopId]" :key="key">
						<span class="name">
							{{food.name}}
						</span>

						<span @click="onClickReduce(key)" v-if="food.isShow">
							<icon-base width="20" height="20" class="icon">
								<icon-reduce></icon-reduce>
							</icon-base>
						</span>
						<span class="num" v-if="food.isShow">
							{{food.num}}
						</span>
						<span @click="onClickAdd(key,food.name)">
							<icon-base width="20" height="20" class="icon">
								<icon-add></icon-add>
							</icon-base>
						</span>
					</li>
				</ul>
			</section>
			<section class="amount">
				<span class="icon-wrap" @click="showCart">
					<span class="icon-etc">
						<icon-base iconColor="#fff" width="25px" height="25px" class="icon">
							<icon-cart></icon-cart>

						</icon-base>
						<span class="count" v-if="foodCount > 0">
							{{foodCount}}
						</span>
					</span>
				</span>
				<span class="submit">
					去结算
				</span>
			</section>
		</footer>
		<transition name="fade">
			<component-confirm text="确认清除?" v-if="confirm" @handleConfirm="handleConfirm"></component-confirm>
		</transition>
	</div>
</template>

<script>
	import {
		getImgPath
	} from '../../../components/common/mixin.js'


	import {
		setInterval,
		clearInterval
	} from 'timers';
	import componentConfirm from "@/components/common/component-confirm.vue"
	import iconBase from '@/components/IconBase.vue'
	import iconAdd from '@/components/icons/IconAdd'
	import iconClear from '@/components/icons/IconClear'
	import iconReduce from '@/components/icons/IconReduce'
	import iconCart from '@/components/icons/IconCart'
	import {
		imgBaseUrl
	} from '@/config/env.js'
	import {
		getStore,
		setStore,
		removeStore
	} from '@/config/mUtils.js'

	export default {
		components: {
			iconBase,
			iconAdd,
			iconReduce,
			iconCart,
			iconClear,
			componentConfirm,
		},
		data() {
			return {
				shopId: 3269,
				menuList: [],
				selectedMenuIndex: 0,
				scrollTopList: null,
				scrollInterval: null,
				imgBaseUrl,
				foodList: {},
				show: true,
				isCartShow: false,
				foodCount: 0,
				shopList: {},
				confirm: false,
			}
		},
		methods: {
			async initData() {
				//获取商铺食品列表
				this.menuList = await this.$api.foodMenu(this.shopId);
			},
			onClickOfNav(index) {
				let ulScrollTop = this.scrollTopList[index]
				//main滚动到对应的位置
				this.scrollTo(this.$refs.main, 0, ulScrollTop)
			},
			//模拟easeOut滚动
			scrollTo(element, x, y) {
				let _y = element.scrollTop
				let distance = y - _y
				let i = 1
				clearInterval(this.scrollInterval)
				this.scrollInterval = setInterval(() => {
					i++
					if (i > 60) clearInterval(this.scrollInterval)
					let position = this.easeOut(i / 60)
					let y = position * distance + _y
					element.scrollTo(0, y)
				}, 16)
			},
			onScrollOfMain() {
				this.lightLatestedMenu()
			},
			initScrollTopList() {
				if (this.scrollTopList) return
				let scrollTopList = []
				for (let i = 0; i < this.menuList.length; i++) {
					let menu = `menu${i}`
					let ulScrollTop = this.$refs[menu][0].offsetTop - this.$refs.main.offsetTop;
					scrollTopList.push(ulScrollTop)
				}
				this.scrollTopList = scrollTopList
			},
			//高亮最近的tag
			lightLatestedMenu() {
				let mainScrollTop = this.$refs.main.scrollTop
				for (var i = 0; i < this.scrollTopList.length; i++) {
					if (this.scrollTopList[i] > mainScrollTop) {
						let index = i - 1
						if (index < 0) index = 0
						this.selectedMenuIndex = index
						break
					}
				}
			},
			// 参考tween.js缓动算法
			easeOut(k) {
				return --k * k * k + 1;
			},
			// 节流函数
			throttle(fn, delay = 100) {
				let last = 0;
				return function () {
					let curr = +new Date();
					if (curr - last > delay) {
						fn.apply(this, arguments);
						last = curr;
					}
				}
			},
			turnScrollOff(element) {
				element.style.overflowY = "hidden"
			},
			turnScrollOn(element) {
				element.style.overflowY = "scroll"
			},
			initFoodList() {
				let foodList = getStore("foodList")
				let shopId = this.shopId
				if (!foodList) {
					foodList = {}
					foodList[shopId] = {}
				}
				let shopList = foodList[shopId]
				this.foodList = foodList
				this.shopList = shopList
			},
			onClickAdd(id, name) {
				let shopId = this.shopId
				let foodList = this.foodList[shopId]
				if (!foodList[id]) {
					foodList[id] = {
						num: 0,
						name
					}
					this.foodCount = Object.keys(foodList).length
				}
				foodList[id]['num'] += 1
				if (foodList[id]['num'] > 99) foodList[id]['num'] = 99
				foodList[id]['isShow'] = foodList[id]['num'] > 0
				this.foodList[shopId] = foodList
				this.shopList = foodList[shopId]

				this.show = !this.show //用于修复一个无厘头bug囧
			},
			onClickReduce(id) {

				let shopId = this.shopId
				let foodList = this.foodList[shopId]
				if (!foodList[id]) foodList[id] = {
					num: 0
				}
				foodList[id]['num'] -= 1
				if (foodList[id]['num'] === 0) {
					delete(foodList[id])
					this.foodCount = Object.keys(foodList).length
					if(!this.foodCount) this.isCartShow = false
				} else {
					foodList[id]['isShow'] = foodList[id]['num'] > 0
				}
				this.foodList[shopId] = foodList
				this.shopList = foodList[shopId]

				console.log(this.foodList)

				this.show = !this.show //用于修复一个无厘头bug囧
			},
			showCart() {
				let list = this.foodList[this.shopId]
				if(Object.keys(list).length === 0) return 
				this.isCartShow = !this.isCartShow
			},
			showConfirm() {
				this.confirm = true
			},
			handleConfirm(boolen) {
				if(boolen) {
					this.foodList[this.shopId] = {}
					this.isCartShow = false
				}
				this.confirm = false
			}
		},
		mounted() {
			this.initData()
			this.initFoodList()
		},
		updated() {
			this.initScrollTopList()
		},
		computed: {
			canShopListScroll() {
				return this.$store.state.canShopListScroll
			},
		},
		watch: {
			canShopListScroll() {
				if (this.canShopListScroll) {
					this.turnScrollOn(this.$refs.main)
					this.turnScrollOn(this.$refs.aside)
				} else {
					this.turnScrollOff(this.$refs.main)
					this.turnScrollOff(this.$refs.aside)
				}
			},
		},
		mixins: [getImgPath, ]
	}
</script>

<style lang="scss" scoped>
	@import '../../../style/mixin.scss';

	.shop-list {
		@include flex-stretch;
		height: 634px;
		overflow-y: hidden;

		&-aside {
			width: 90px;
			overflow-y: hidden;
			-webkit-overflow-scrolling: touch;
			padding-bottom: 150px;

			li {
				@include text12;
				height: 50px;
				@include flex-center;
				background-color: rgba($color: #e6e6e6, $alpha: .2);

				.icon {
					@include wh(12px, 12px);
					margin-right: 5px;
				}

			}

			.active {
				color: #000;
				font-weight: 500;
				background: #fff;
			}
		}

		&-main {
			flex-grow: 1;
			-webkit-overflow-scrolling: touch;
			overflow-y: hidden;
			overflow-x: hidden;
			padding-bottom: 150px;

			.menu {
				margin-top: 5px;
				margin-bottom: 10px;
				margin-left: 10px;

				&-name {
					@include title16;
					color: gray;
				}


				li {
					margin-top: 10px;
					margin-right: 10px;
					height: 85px;
					@include flex-stretch;

					.img {
						@include wh(85px, 85px);
					}

					.detailes {
						flex-grow: 1;
						margin-left: 8px;
						@include flex-stretch;
						flex-direction: column;
						overflow: hidden;

						.food {

							&-name {
								@include title16;
								@include text-ellipsis;
							}

							&-description,
							&-tips {
								@include text12;
							}

							&-tips {
								flex-grow: 1;
							}

							&-footer {
								line-height: 24px;
								@include flex-center;

								.food-price {
									flex-grow: 1;
								}

								.food-num {
									@include flex-center;
									width: 30px;
								}
							}
						}
					}
				}
			}
		}

		&-footer-wrap {
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background-color: rgba($color: #505052, $alpha: .2)
		}

		&-footer {
			position: fixed;
			bottom: 0;
			background: #505052;
			width: 100%;
			
			.footer-title {
				background: #fffad8;
				@include flex-center;
				@include text12;
				color: #000;

				.footer-balance {
					color: red;
					padding: 0 10px;
				}
			}

			.list {
				&-header {
					background-color: #eceff1;
					height: 40px;
					@include flex;
					padding: 0 10px;

					.title {
						color: #8a8b8b;
					}

					.clear {
						@include text12;
					}
				}

				&-main {
					background-color: #fff;
					padding: 0 10px;
					padding-bottom: 20px;
					padding-top: 10px;
					@include flex-stretch;
					flex-direction: column;
					
					li {
						
						@include flex-center;
						height:40px;
						.name {
							flex-grow: 1;
						}
						.num {
							width: 30px;
							text-align: center;
						}
					}
				}
			}

			.amount {
				height: 50px;
				@include flex-stretch;

				.icon-wrap {
					flex-grow: 1;

					.icon-etc {
						position: relative;
					}

					.icon {
						background-color: $blue;
						padding: 8px;
						border-radius: 50%;
						border: 4px solid #505052;
						position: relative;
						top: -10px;
						left: 10px;
					}

					.count {
						background-color: red;
						color: #fff;
						position: absolute;
						top: -40px;
						left: 45px;
						@include wh(16px, 16px);
						line-height: 16px;
						text-align: center;
						font-size: 16px;
						border-radius: 50%;
					}
				}

				.submit {
					background-color: #38ca73;
					@include flex-center;
					color: #fff;
					width: 105px;
				}
			}

		}
	}
</style>