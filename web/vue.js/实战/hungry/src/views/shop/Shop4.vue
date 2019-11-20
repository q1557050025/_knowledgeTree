<template>
	<div id="shop" class="shop" @scroll="onScrollOfWrap" ref="wrap">
		<div class="shop-header">
			<ul>
				<li v-for="(item, index) in 30" :key="index">
					{{item}}
				</li>
			</ul>
		</div>
		<div class="cancel"></div>
		<div class="shop-main"
			ref="main"
			:style="mainStyle"
			@touchstart="onTouchStartOfMain"
			@touchmove="onTouchMoveOfMain"
			@touchend="onTouchEndOfMain"
			@scroll="onScrollOfMain">
			<ul>
				<li v-for="(item, index) in 60" :key="index">
					{{item}}
				</li>
			</ul>
		<div class="data">
			<div>wrapScrollTop:{{wrapScrollTop}}</div>
			<div>mainScrollTop:{{mainScrollTop}}</div>
			<div>canMainMove:{{canMainMove}}</div>
			<div>isInitMove:{{isInitMove}}</div>
		</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//店铺相关info
			shopId: 1,
			latitude: 29.133253,
			longitude: 119.641724,
			//获取商铺信息
			shopDetailData: null,
			//获取商铺食品列表
			menuList: null,
			//评论列表
			ratingList: null,
			//商铺评论详情
			ratingScoresData: null,
			//评论Tag列表
			ratingTagsList: null,
			// headerHeight: "80vw",

			//高度单位(vw)
			mainHeight: 177.867,
			mainTop: 80,
			wrapScrollTop: 0,
			mainScrollTop: 0,
			mainOffsetTop: 0,
			touchTrack: {},
			canMainMove: true,
			isInitMove: false,
		}
	},
	methods: {
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

		onScrollOfWrap(e) {
			this.wrapScrollTop = e.target.scrollTop
		},
		onTouchStartOfMain(e) {
			console.log("move")
			this.touchTrack[e.targetTouches[0].identifier] = {
				startTop: e.targetTouches[0].clientY
			}
			this.mainOffsetTop = this.$refs.main.offsetTop

			console.log("mainOffsetTop",this.mainOffsetTop)
		},

		onTouchMoveOfMain(e) {
			//可移动开关变化时, 重置移动初始位置
			if(this.isInitMove) {
				this.touchTrack[e.targetTouches[0].identifier].startTop = e.targetTouches[0].clientY
				this.isInitMove = false
			}

			if(!this.canMainMove) return
			let move = e.targetTouches[0].clientY - this.touchTrack[e.targetTouches[0].identifier].startTop

			this.touchTrack[e.targetTouches[0].identifier].move = move

			let moves = 0
			for(let i in this.touchTrack){
				moves += this.touchTrack[i].move
			}
			if(moves <= 0) moves = 0

			let mainTop = this.mainOffsetTop + moves
			
			//px换算成vw, 因为此项目用vw做自适应
			mainTop /= 3.75
			this.mainTop = mainTop
		},

		onTouchEndOfMain(e) {
			if(e.touches.length === 0) {
				this.touchTrack = {}
			}
			this.$refs.wrap.style.overflowY = "scroll"
		},
		onScrollOfMain(e) {
			this.mainScrollTop = e.target.scrollTop
		}
	},
	mounted() {
		this.initData()
	},
	computed: {
		// headerStyle() {
		// 	let style = ` height:${this.headerHeight};`
		// 	return style
		// },
		mainStyle() {
			let style = ""
			style += ` height:${this.mainHeight}vw;`
			style += ` top:${this.mainTop}vw;`
			return style
		}
	},
	watch: {
		wrapScrollTop() {
			//如果wrapScrollTop大于
			if(this.wrapScrollTop >= this.mainTop) {
				this.$refs.main.style.overflowY = "scroll"
			}else {
				this.$refs.main.style.overflowY = "hidden"
			}

			this.canMainMove = this.wrapScrollTop <= 0
		},
		mainScrollTop() {
			if(this.mainScrollTop <= 0) {
				this.$refs.main.style.overflowY = "hidden"
			}
		},
		canMainMove() {
			if(this.canMainMove) {
				this.$refs.wrap.style.overflowY = "hidden"
			}else {
				this.$refs.wrap.style.overflowY = "scroll"
			}
			if(!this.canMainMove) return
			//可以动开关打开时, 初始化移动位置开关打开
			this.isInitMove = true
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../style/mixin.scss';
	@mixin scroll() {
		// @include flex-stretch;
		// flex-direction: column;
		overflow-y: scroll;
		height: 667px;
		position: relative;
		-webkit-overflow-scrolling: touch;
		&-header {
			height: 667px;
			box-sizing: border-box;
		}
		&-main {
			position: absolute;
			box-sizing: border-box;
			width: 100%;
			overflow-y: hidden;
			-webkit-overflow-scrolling: touch;

		}
	}
	.shop {
		@include scroll;
		background-color: orange;
		width: 80%;
		&-header {
			background: #f123;
			height: 100vw;
		}
		&-main {
			background-color: greenyellow;
		}
	}

		.data {
		position: fixed;
		top: 200px;
		right: 100px;
		z-index: 888;
		overflow-x: hidden;
	}

	.cancel {
		height: 200px;
		background-color: yellow;
		overflow: scroll;
	}
</style>