<template>
	<div id="shop">
		<div 
			class="scroll-wrap"
			@scroll="onScrollWrap">
			<div class="shop-info">
				<div class="test">

				</div>
			</div>
			<main 
				class="shop-main"
				ref="main" 
				@touchstart="onTouchStartOfMain"
				@touchmove="onTouchMoveOfMain"
				@touchend="onTouchEndOfMain"
				@scroll="onScrollMain">
				<div v-for="(item, index) in 100" :key="index">
					{{item}}
				</div>
			</main>
		</div>
		<div class="data">
			<div>wrapScrollTop:{{wrapScrollTop}}</div>
			<div>mainScrollTop:{{mainScrollTop}}</div>
			<div>startTouches:{{startTouches}}</div>
			<div>targetTouches:{{targetTouches}}</div>
			<div>moveTouches:{{moveTouches}}</div>
			<div>moves:{{moves}}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			wrapScrollTop: 0,
			mainScrollTop: 0,
			isMainScroll: true,
			isWrapScroll: true,
			height: "100px",
			startTouches: [],
			moveTouches: [],
			targetTouches: [],
			touchTrack: {},
			moves: 0,
			offsetTop: 0,
		}
	},
	methods: {
		onScrollWrap(e) {
			this.wrapScrollTop = e.target.scrollTop
		},
		onScrollMain(e) {
			this.mainScrollTop = e.target.scrollTop
		},
		onTouchStartOfMain(e) {
			this.touchTrack[e.targetTouches[0].identifier] = {
				startTop: e.targetTouches[0].clientY
			}

			this.offsetTop = this.$refs.main.offsetTop 
			console.log(e.targetTouches[0].identifier)
			// console.log(e)
			// let list = Array.from(new Set(e.touches)).map(item => {
			// 	return item.identifier
			// })

			// let list2 = Array.from(new Set(e.targetTouches)).map(item => {
			// 	return item.identifier
			// })

			// let identifier = e.targetTouches[0].identifier
			// list.forEach(item => {
			// 	if(item === identifier) {
			// 		item.startScrollTop = 1
			// 	}
			// })

			// console.log("list",list)
			// this.startTouches = list
			// this.targetTouches = list2
		},
		onTouchEndOfMain(e) {
			console.log(e)
			if(e.touches.length === 0) {
				this.touchTrack = {}
			}
		},
		onTouchMoveOfMain(e) {
			let move = e.targetTouches[0].clientY - this.touchTrack[e.targetTouches[0].identifier].startTop

			this.touchTrack[e.targetTouches[0].identifier].move = move

			let moves = 0
			for(let i in this.touchTrack){
				console.log(this.touchTrack[i].move)
				moves += this.touchTrack[i].move
			}
			if(moves <= 0) moves = 0
			let styleTop = this.offsetTop + moves
			this.$refs.main.style.top = `${styleTop}px`


			console.log(moves)
			console.log(this.touchTrack)
			console.log('offsetTop',this.$refs.main.offsetTop)
			console.log(this.$refs)

			// let list = Array.from(new Set(e.touches)).map(item => {
			// 	return item.identifierk
			// })
			// this.startTouches

			// console.log(list)
			// this.moveTouches = list
		}
	},
	mounted() {
		
	},
	watch: {
		wrapScrollTop() {
			if(this.wrapScrollTop >= 357) {
				this.$refs.main.style.overflowY = "scroll"
			}else {
				this.$refs.main.style.overflowY = "hidden"
			}

			if(this.wrapScrollTop <= 0) {
				
			}
		},
		mainScrollTop() {
			if(this.mainScrollTop <= 0) {
				this.$refs.main.style.overflowY = "hidden"
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../style/mixin.scss';
	@mixin bdt($color:green){
		border: 10px solid $color;
	}
	.test {
		background-color: orange;
		height:80px;
		width: 80px;
	}
	#shop {
		overflow: hidden;
		width: 375px;
		box-sizing: border-box;
	}

	div {
		overflow-x: hidden;
	}
	.data {
		position: fixed;
		top: 200px;
		right: 100px;
		
		overflow-x: hidden;
	}
	.scroll-wrap {
		-webkit-overflow-scrolling: touch;		
		position: relative;
		height: 650px;
		@include bdt(red);
		overflow-y: scroll;
		overflow-x: hidden;
		@include flex-stretch;
		flex-direction: column;
	}

	.shop {
		&-info {
			height: 300px;
			@include bdt(gray)
		}
		&-main {
			-webkit-overflow-scrolling: touch;
			height: 667px;
			overflow-y: hidden;
			position: absolute;
			top: 300px;
			@include bdt;
			width: 80%;
			overflow-x: hidden
		}
	}
</style>

<style lang="scss">
	body {
		overflow: hidden;
	}
</style>