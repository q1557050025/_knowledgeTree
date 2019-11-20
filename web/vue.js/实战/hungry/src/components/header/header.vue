<template>
	<van-row 
		id="header" 
		class="header" 
		tag="header" 
		type="flex" 
		justify="space-between">
		<van-col span="6">
			<span class="header_logo_title" v-if="headerOptions.logo.title">饿了么</span>
			<span class="header_logo_goBack"  
				v-if="headerOptions.logo.goBack"
				@click="$router.go(-1)">
				<svg width="20px" height="20px">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#goBack"></use>	
				</svg>
			</span>
			<span class="header_log_search" v-if="headerOptions.logo.search">

			</span>
		</van-col>
		<van-col span="12" v-if="headerOptions.title" class="header_title_wrap">
			<span class="header_title" v-if="headerOptions.title" v-textScroll>
				{{headerOptions.title}}
			</span>				
		</van-col>
		<van-col span="6" class="header_login_wrap">
			<router-link 
				class="header_login"
				:to="false ? '/profile': '/login'" 
				v-if="headerOptions.signUp">
				<span class="header_login_span">登录|注册</span>	
			</router-link>
			<router-link 
				to="/cityList"
				v-if="headerOptions.changeCity">
				<span class="header_changeCity">切换城市</span>
			</router-link>	
			<slot name="changeLoginWay"></slot>	
		</van-col>
	</van-row>
</template>

<script>
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import { setInterval, clearInterval, setTimeout } from 'timers';

Vue.use(Vant);
export default {
	components: {

	},
	directives: {
		//字体超出容器,自动滚动显示
		textScroll: {
			componentUpdated(el) {
				var count = 0
				var width = el.scrollWidth-el.offsetWidth
				if(!width) return 
				function scroll(width){
					var interval = setInterval(() => {
						count += 1
						el.scroll({
							left: count,
							behavior: 'smooth'
						})
						if( count > width) {
							clearInterval(interval)
							setTimeout(() => {
								el.scroll({
									left: 0,
									behavior: "smooth"
								})
								count = 0
								setTimeout(() => {scroll(width)}, 1000)
							}, 1000)
						}
					},30)
				}
				scroll(width)
			}
		}
	},
	props: {
		headerOptions: {type:Object},
	},
	mounted() {

	}
}
</script>

<style lang="scss" scoped>
	@import "../../style/mixin.scss";
	#header {
		background-color: $blue;
		@include wh(375px, 45px);
		@include fj;
	}
	.header {
		&_logo{
			@mixin common() {
				margin-left: rem2px(.4);
				font-weight: 400;
				@include sclh(16px, #fff, 45px);
			}
			&_title {
				@include wh(54px, 16.5px);			
				@include common();
			}
			&_goBack {
				@include common();
				@include wh(20px, 20px);
				line-height: 45px;
			}
		}

		&_title {
			&_wrap {
				@include fj(center);
			}
			@include sclh(18.75px,#fff, 45px);
			font-weight: 700;
			white-space: nowrap;
			overflow: auto;
		}

		&_login {
			&_wrap{
				@include fj(flex-end)
			}
			@include sclh(15px, #fff, 45px);
			margin-right: rem2px(0.55);
			&_span {
				color: #fff;
				@include wh(65px, 20px);
			}	
		}
		&_changeCity {
			@include sclh(14px, #fff, 45px);
			margin-right: 10px;
		}
	}
</style>