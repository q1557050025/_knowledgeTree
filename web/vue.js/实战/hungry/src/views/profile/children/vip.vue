<template>
	<div class="vip">
		<header class="vip-header">
			<section class="goback left" @click="$router.go(-1)">
				<icon-base :width="'20px'" :height="'20px'"><icon-back></icon-back></icon-base>
			</section>
			<section class="title">购买会员</section>
		</header>
		<main class="vip-main">
			<div class="vip-main-wrap">
				<section class="vip-main-user">
					<section class="photo">
						<img :src="userInfo.avator" alt="">
					</section>
					<section class="detailes">
						<h2><span class="username">{{userInfo.userName}}</span><span class="phone-number">暂未绑定手机号</span></h2>
						<p><span>您还不是超级会员</span></p>
					</section>
				</section>
				<ul class="vip-main-price">
					<li 
						v-for="(item, index) in vipList" :key="index"
						:class="{checked:item.id === checkedItem.id}"
						@click="checkedItem = item">
						<section class="titleEtc">
							<h1 class="title">{{item.title}}</h1>
							<p class="price">¥<span>{{item.price}}</span></p>
							<p class="originalPrice">¥{{item.originalPrice}}</p>
						</section>
						<section class="text" v-if="item.text">{{item.text}}</section>
					</li>
				</ul>
				<section class="vip-main-city" onClick="alert('功能未实现')">
					<section class="title">
						<h4>选择会员城市</h4>
						<p>每月红包限制此城市使用</p>
					</section>
					<section class="name">朝阳</section>
					<section class="arrows" >
						<icon-base width="12px" height="12px">
							<icon-arrowsright></icon-arrowsright>
						</icon-base>
					</section>
				</section>
				<section class="vip-main-coupon">
					<section class="title">兑换会员</section>
					<section class="text">使用兑换码兑换会员</section>
					<section class="arrows" >
						<icon-base width="12px" height="12px">
							<icon-arrowsright></icon-arrowsright>
						</icon-base>
					</section>
				</section>
				<section class="vip-main-location">
					<section class="title">购买记录</section>
					<section class="text">开发票</section>
					<section class="arrows" >
						<icon-base width="12px" height="12px">
							<icon-arrowsright></icon-arrowsright>
						</icon-base>
					</section>
				</section>
			</div>
			<footer class="vip-main-footer">
				<span>自动续费服务</span>
				&emsp;|&emsp;
				<span>会员特权说明</span>
			</footer>
		</main>
		<footer class="vip-footer">
			<section class="vip-footer-detailes">
				<span class="title">总价</span>
				<span class="price">¥{{checkedItem.price}}</span>
				<span class="originalPrice">¥{{checkedItem.originalPrice}}</span>
			</section>
			<section class="vip-footer-submit">
				立即开通
			</section>
		</footer>
	</div>
</template>

<script>
import IconBack from '../../../components/icons/IconBack'
import IconBase from '../../../components/IconBase'
import IconArrowsright from '../../../components/icons/IconArrowsRight'

export default {
	data() {
		return {
			userInfo: {
				userName: '布可',
				avator: require('../../../assets/avator.jpg')
			},
			checkedItem: {
				id: 1,
				title: "连续包月",
				price: "6",
				originalPrice: "15" ,
				text: "限时特惠首购6元"
			},
			vipList: [
				{
					id: 1,
					title: "连续包月",
					price: "6",
					originalPrice: "15" ,
					text: "限时特惠首购6元"
				},
				{
					id: 2,
					title: "连续包季",
					price: "28",
					originalPrice: "45" ,
					text: "15元季卡已抢光"
				},
				{
					id: 3,
					title: "连续包年",
					price: "108",
					originalPrice: "180" 
				},
			]
		}
	},
	components: {
		IconBack,
		IconBase,
		IconArrowsright,
	}
}
</script>

<style lang="scss" scoped>
	@import '../../../style/mixin.scss';
	.vip {
		@include header-main-footer(40px,#000);
		&-header {
			.left {
				position: absolute;
				left: 0;
				padding-left: 10px;
			}
			.goback {
				color: #fff;
			}
			.title {
				flex-grow: 1;
				color: #fff;
				text-align: center;
				font-size: 20px;
			}
		}

		&-main {
			&-wrap {
				flex-grow: 1;
				height:610px;
			}
			&-user {
				height: 80px;
				background-color: #000;
				@include flex(flex-start, center);
				.photo {
					margin-left: 10px;
					img {
						@include wh(60px, 60px);
						border-radius: 50%;
					}
					
				}

				.detailes {
					margin-left: 10px;
					.username {
						color: #fff;
						font-size: 20px;
					}
					.phone-number {
						color: #fff;
						font-size: 12px;
						margin-left: 5px;
					}

					p span {
						font-size: 12px;
						color: gray;
					}
				}
			}

			&-price {
				@include flex(space-around, stretch);
				margin-top: 10px;
				border-bottom: .5px solid $bdc;
				height: 170px;
				li {
					width: 110px;
					height:155px;
					border: $bdc .5px solid;
					border-radius: 5px;
					@include flex(space-around,stretch);
					flex-direction: column;
				}
				.titleEtc {
					flex-grow: 1;
					@include flex(center, center);
					flex-direction: column;
				}
				.title {
					font-size: 16px;
					font-weight: 600;
				}
				.price {
					color: red;
					span {
						font-size: 30px;
						font-family: 'Times New Roman', Times, serif;
						color: red;
					}
				}
				.originalPrice {
					text-decoration: line-through;
					color: gray;
				}
				.text {
					height: 30px;
					line-height: 30px;
					font-size: 12px;
					color: #ff664e;
					text-align: center;
					background-color: #fff4e8;
					border-left: $bdc solid .5px;
					border-right: $bdc solid .5px;
					border-bottom-left-radius: 5px;
					border-bottom-right-radius: 5px;
				}

				.checked {
					border: .5px solid #dfc78a;
					background-color: #fffcee;
					.title {
						color: #b99c5b;
					}
					.price {
						color: #8b5d22;
						span {
							color: #8b5d22;
						}
					}
					.originalPrice {
						color: #b99c5b
					}
					.text {
						background-color: #f5e2bd;
						color: #a67e48;
						border-color: #dfc78a
					}
				}
			}

			@mixin cityEtc {
				@include flex;
				border-bottom: .5px solid $bdc;
				height: 45px;
				.title {
					flex-grow: 1;
					@include title16;
					margin-left: 10px;
				}
				.text {
					@include text12;
					margin-right: 10px;
				}
				.arrows {
					@include flex;
					margin-right: 10px;
				}
			}
			&-city {
				@include cityEtc;
				.title {
					h4 {
						@include title16;
					}
					p {
						@include text12;
					}
				}
				.name {
					@include title16;
					margin-right: 10px;
				}
			}

			&-coupon {
				@include cityEtc;
			}

			&-location {
				@include cityEtc;
			}

			&-footer {
				@include flex(center,flex-start);
				@include text12;
				height: 100px;
				background-color: $bdc;
				line-height: 40px;
				span {
					@include text12;
				}
			}
		}

		&-footer {
			height: 45px;
			&-detailes {
				flex-grow: 1;
				background-color: #fff;
				@include flex(flex-start,center);
				.title {
					@include title16;
					margin-left: 10px;
				}
				.price {
					@include title16;
					color: red;
					margin-left: 5px;
				}
				.originalPrice {
					@include text12;
					text-decoration: line-through;
					margin-left: 5px;
				}
			}
			&-submit {
				width: 120px;
				background-color: #f3d79f;
				@include flex(center, center);
			}
		}
	}
</style>
