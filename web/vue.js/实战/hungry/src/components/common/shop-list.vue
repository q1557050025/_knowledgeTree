<template>
	<van-list v-model="vanListOptions.loading" :finished="vanListOptions.finished" finished-text="没有更多了"
		:immediate-check="false" class="shop" @load="vanListLoad">
		<router-link to="/shop" class="shop_item" v-for="(item, index) in vanListOptions.list" :key="index">
			<lazy-component>
				<img v-lazy="'//elm.cangdu.org/img/' + item.image_path" class="shop_logo">
			</lazy-component>
			<hgroup class="shop_details">
				<header class="shop_details_header">
					<span v-if="item.is_premium" class="shop_details_premium">品牌</span>
					<span class="shop_details_name">{{item.name}}</span>
					<ul class="shop_details_icon">
						<li v-for="(icon, index) in item.supports" :key="index">{{icon.icon_name}}</li>
					</ul>
				</header>
				<h4 class="shop_details_h">
					<section class="shop_details_rate">
						<van-rate v-model="item.rating" :size="4"></van-rate>
						<span>{{item.rating}}</span> &ensp; <span>月售{{item.recent_order_num}}单</span>
					</section>
					<section class="shop_details_delivery">
						<span v-if="item.delivery_mode"
							class="shop_details_delivery_fengniao">{{item.delivery_mode.text}}</span>
						<span class="shop_details_delivery_zhunshi" v-if="zhunshi(item.supports)">准时达</span>
					</section>
				</h4>
				<h4 class="shop_details_h2">
					<p class="shop_details_h2_fee">
						¥{{item.float_minimum_order_amount}}起送
						<span class="shop_details_h2_segmentation">/</span>
						{{item.piecewise_agent_fee.tips}}
					</p>
					<p class="shop_details_h2_distance">
						<span v-if="Number(item.distance)">{{item.distance > 1000? (item.distance/1000).toFixed(2) + 'km': item.distance + 'm'}}
							<span class="shop_details_h2_segmentation">/</span>
						</span>
						<span v-else>{{item.distance}}</span>
						<span class="shop_details_h2_segmentation">/</span>
						<span class="shop_details_h2_time">{{item.order_lead_time}}</span>
					</p>
				</h4>
			</hgroup>
		</router-link>
	</van-list>
</template>

<script>
	import {
		shopList
	} from '../../serviece/getData.js'
	import {
		mapState
	} from 'vuex';
	import Vue from 'vue'
	import {
		List
	} from 'vant'
	import {
		Lazyload
	} from 'vant';
	import {
		Rate
	} from 'vant';

	Vue.use(Rate);
	Vue.use(Lazyload, {
		lazyComponent: true,
		loading: require('../../assets/logo.png')
	})
	Vue.use(List)

	export default {
		data() {
			return {
				shopList: [],
				shopListOptions: {
					latitude: null,
					longitude: null,
					offset: 0,
					restaurant_category_id: '',
					restaurant_category_ids: '',
					order_by: '',
					delivery_mode: '',
					support_ids: []
				},
				vanListOptions: {
					list: [],
					loading: false,
					finished: false
				}
			}
		},
		props: [],
		mounted() {
			this.init()
		},
		computed: {
			...mapState(['address']),
		},
		methods: {
			async init() {
				this.shopListOptions.latitude = this.address.latitude
				this.shopListOptions.longitude = this.address.longitude
				let res = await shopList(this.shopListOptions)
				this.shopList = [...res]
				this.vanListLoad()
			},
			vanListLoad() {
				for (let i = 0; i < 10; i++) {
					this.vanListOptions.list = this.shopList.slice(0, this.vanListOptions.list.length + 1)
				}
				// 加载状态结束
				this.vanListOptions.loading = false;
				//   // 数据全部加载完成
				if (this.vanListOptions.list.length >= this.shopList.length) {
					this.vanListOptions.finished = true;
				}
			},
			zhunshi(supports) {
				let zhunStatus;
				if ((supports instanceof Array) && supports.length) {
					supports.forEach(item => {
						if (item.icon_name === '准') {
							zhunStatus = true;
						}
					})
				} else {
					zhunStatus = false;
				}
				return zhunStatus
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin.scss';
	.shop {
		&_item {
			@include wh(375px, 105px);
			@include fj(center);
		}

		&_logo {
			@include wh(63.28px, 63.28px);
		}

		&_details {
			@include wh(283.6px, 63.28px);
			padding-left: 12px;

			&_header {
				@include fj;
				margin-top: 4px;
			}

			&_premium {
				background-color: #ffd930;
				@include wh(28.7px, 14px);
				@include sclh(14px, #333, 14px);
				font-weight: 700;
				white-space: nowrap;
			}

			&_name {
				flex-grow: 1;
				font-weight: 700;
				@include sclh(15.2px, #333);
				font-family: PingFangSC-Regular;
				margin-left: 3px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			&_icon {
				@include fj;
				@include wh(38.9px, 13.73px);
				margin-right: 5px;

				li {
					@include sclh(12px, #999);
					padding: 1px;
				}
			}

			&_h {
				@include fj;
				margin-top: 5px;
			}

			&_rate {
				@include fj;
				height: 16px;
				font-size: 12px;
			}

			&_delivery {
				&_fengniao {
					display: inline-block;
					background-color: $blue;
					font-size: 8px;
					color: #fff;
				}
				&_zhunshi {
					display: inline-block;
					border: solid .5px $blue;
					background-color: #fff;
					font-size: 8px;
					color: $blue;
				}
			}
			&_h2 {
				@include sclh(12px, #666,);
				@include fj;
				margin-top: 5px;
			}
		}
	}
</style>