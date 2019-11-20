<template>
	<div>
		<div class="wrap">
			<header class="shop-header">
				header
				<button>back</button>
			</header>
			<div class="shop" ref="shop"
				@touchstart="onTouchStart"
				@touchmove="onTouchmove"
				@touchend="onTouchEnd"
				@scroll="onScroll">
				<main class="shop-main">
					<div v-for="(item, index) in 100" :key="index">
						{{item}}
					</div>
				</main>
				<div style="position:fixed;top:0">
					<div>	{{scrollAbout.initScrollValue}}</div>
					<div>{{scrollAbout.shopScrollTop}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				shopId: 1,
				shopDetailData: null,
				latitude: 29.133253,
				longitude: 119.641724,
				menuList: [],
				ratingList: [],
				ratingOffset: 20,
				ratingScoresData: null,
				ratingTagsList: null,

				//
				touchList:{},
				distance: 0,
				scrollAbout: {
					initScrollValue: 0,
					shopScrollTop: 0,
					isTop: true,
				},
			}
		},
		methods: {
			onScroll(e) {
				let scrollTop = this.$refs.shop.scrollTop
				this.scrollAbout.shopScrollTop = scrollTop
				let isTop = scrollTop === 0
				this.scrollAbout.isTop = isTop
			},
			onTouchmove() {

			},
			onTouchStart() {
				
			},
			onTouchEnd(e) {

			},
			onClick() {

			},
			initScroll() {
				console.log(this.$refs)
				// this.$refs.shop.scrollTo(0,this.scrollAbout.initScrollValue) 
			},
			async initData() {
				//获取商铺信息
				this.shopDetailData = await this.$api.shopDetails(this.shopId, this.latitude, this.longitude);
				//获取商铺食品列表
				this.menuList = await this.$api.foodMenu(this.shopId);
				//评论列表
				this.ratingList = await this.$api.getRatingList(this.shopId, this.ratingOffset);
				//商铺评论详情
				this.ratingScoresData = await this.$api.ratingScores(this.shopId);
				//评论Tag列表
				this.ratingTagsList = await this.$api.ratingTags(this.shopId);
				console.log(this.shopDetailData)
			},
		},
		async mounted() {
			this.initData()
			this.initScroll()
		
		},
		computed: {

		},
	}
</script>


<style lang="scss" scoped>
	@import '../style/mixin.scss';
	.wrap {
		overflow-y: hidden;
		height: 667px;
		border: solid 1px $blue;
	}
	.shop {
		height: 667px;
		overflow-y: scroll;
		scroll-behavior: smooth;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		background-color: red;
		&-header {
			height: 300px;
			background-color: orange;
			@include flex-center;
		}

		&-main {
			background-color: yellow;
		}
	}
	
	::-webkit-scrollbar {
		display: none;
	}
</style>