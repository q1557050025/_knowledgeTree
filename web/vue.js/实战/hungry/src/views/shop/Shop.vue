<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-19 08:43:48
 * @LastEditTime: 2019-08-15 09:26:46
 * @LastEditors: Please set LastEditors
 -->
<template>
	<div class="shop"  ref="shop" @scroll="onScrollOfShop">
		<header class="shop-header">
			<span	@click="goBack">
				<icon-base iconColor="#fff" width="20" height="20" class="back" >
					<icon-back ></icon-back>
				</icon-base>
			</span>
			<img :src="imgBaseUrl + shopDetailData.image_path" class="img" v-if="shopDetailData.image_path">
		</header>
		<section class="shop-info">
			<h1 class="name">{{shopDetailData.name}} 
				<icon-base width="24" height="24">
					<icon-triangle></icon-triangle>
				</icon-base>
			</h1>
			<h4 class="detaile">
				<span class="rating">评价{{shopDetailData.rating}}</span>
				<span class="count">月售{{shopDetailData.recent_order_num}}</span>
				<span class="time">配送约{{shopDetailData.recent_lead_time}}分钟</span>
			</h4>
			<p class="notice">
				公告:{{shopDetailData.promotion_info}}
			公告:欢迎光临，用餐高峰请提前下单，谢谢
			公告:欢迎光临，用餐高峰请提前下单，谢谢
			公告:欢迎光临，用餐高峰请提前下单，谢谢
			</p>
		</section>
		<nav class="shop-nav">
			<span 	
				:class="{'active': this.isRouteInclude('shoplist')}"	
				@click="linkTo('shoplist')">点餐</span>
			<span 
				:class="{'active': this.isRouteInclude('rating')}"	
				@click="linkTo('rating')">评价</span>
			<span 
				:class="{'active': this.isRouteInclude('shopkeeper')}"
				@click="linkTo('shopkeeper')">商家</span>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
import iconBase from '../../components/IconBase'
import iconBack from '../../components/icons/IconBack'
import iconTriangle from '../../components/icons/IconTriangle'
import {mapMutations} from 'vuex'

export default {
	components: {
		iconBase,
		iconBack,
		iconTriangle,
	},
	data() {
		return {
			imgBaseUrl: '//elm.cangdu.org/img/',
			//店铺相关info
			shopId: 3269,
			latitude: 29.133253,
			longitude: 119.641724,
			//获取商铺信息
			shopDetailData: [],
			//评论列表
			ratingList: [],
			//商铺评论详情
			ratingScoresData: [],
			//评论Tag列表
			ratingTagsList: [],
		}
	},
	methods: {
		async initData() {
			//获取商铺信息
			this.shopDetailData = await this.$api.shopDetails(this.shopId, this.latitude, this.longitude)
			//评论列表
			this.ratingList = await this.$api.getRatingList(this.shopId, this.ratingOffset)
			//商铺评论详情
			this.ratingScoresData = await this.$api.ratingScores(this.shopId)
			//评论Tag列表
			this.ratingTagsList = await this.$api.ratingTags(this.shopId)
		},
		...mapMutations(["TURN_SHOPLIST_SCROLL_ON","TURN_SHOPLIST_SCROLL_OFF"]),
		linkTo(target) {
			this.$router.replace(`/Shop/${target}`)
		},
		isRouteInclude(param) {
			return  this.$route.path.indexOf(param) !== -1
		},
		onScrollOfShop(e) {
			let scrollTop = e.target.scrollTop
			if(scrollTop > 200) {
				this.TURN_SHOPLIST_SCROLL_ON()
			}else {
				this.TURN_SHOPLIST_SCROLL_OFF()
			}
		},
		goBack(){
			this.$router.go(-1)
		}
	},
	mounted() {
		this.initData()
	}
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';

.shop {
	overflow-y: scroll;
	height:667px;
	-webkit-overflow-scrolling: touch;
	&-header {
		height: 115px;
		background: url('../../assets/bgimg.jpg') no-repeat;
		background-size: auto 100px;
		@include flex-center;
		align-items: flex-start;
		position: relative;
		.back {
			position: absolute;
			top: 0;
			left: 0;
			padding-left: 15px;
			padding-top: 5px;
		}
		
		.img {
			@include wh(75px, 75px);
			position: relative;
			top: 40px;
			z-index: 100;
		}
	}

	&-info {
		width: 80%;
		margin: 0 auto;
		.name {
			margin-top: 10px;
			@include title20;
			@include flex-center;
		}
		.detaile {
			margin-top: 5px;
			@include flex-center;
			span {
				padding-left: 5px;
				padding-right: 5px;
				font-size: 12px;
			}
		}
		.notice {
			margin-top: 10px;
			@include text12;
			@include text-hidden;
		}
	}

	&-nav {
		@include flex-stretch;
		margin-top: 10px;
		span {
			flex-grow: 1;
			@include flex-center;
			line-height: 30px;
		}
		.active {
			border-bottom: $blue solid 3px;
			font-weight: 600;
		}
	}
}

</style>