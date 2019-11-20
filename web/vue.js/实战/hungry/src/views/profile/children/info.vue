<template>
	<div class="info">
		<header-top class="info-header" :headerOptions='headerOptions'></header-top>
		<main class="info-main">
			<div class="info-main-wrap">
				<ul class="info-main-basic">
					<h6>基础信息</h6>
					<li class="info-main-photo">
						<section class="title">头像</section>
						<section class="photo">
							<img :src="userInfo.avator" alt="">
						</section>
						<section class="arrows">
							<icon-base  :width="'12px'" :height="'12px'" :iconColor="'#ddd'">
								<icon-arrowsright></icon-arrowsright>
							</icon-base>
						</section>
					</li>
					<li class="info-main-username">
						<section class="title">用户名</section>
						<section ><span class="text" v-if="userInfo.userName">{{userInfo.userName}}</span></section>
					</li>
					<li class="info-main-address">
						<section class="title">收获地址</section>
						<section class="arrows">
							<icon-base  :width="'12px'" :height="'12px'" :iconColor="'#ddd'">
								<icon-arrowsright></icon-arrowsright>
							</icon-base>
						</section>
					</li>
					<li class="info-main-password">
						<section class="title">登陆密码</section>
						<section class="text">修改密码</section>
						<section class="arrows">
							<icon-base  :width="'12px'" :height="'12px'" :iconColor="'#ddd'">
								<icon-arrowsright></icon-arrowsright>
							</icon-base>
						</section>
					</li>
				</ul>
				<ul class="info-main-bind">
					<h6>账号绑定</h6>
					<li>
						<section class="icon">
							<icon-base  :width="'24px'" :height="'24px'">
								<icon-phone></icon-phone>
							</icon-base>
						</section>
						<section class="title">手机</section>
						<section class="text"></section>
						<section class="arrows">
							<icon-base  :width="'12px'" :height="'12px'" :iconColor="'#ddd'">
								<icon-arrowsright></icon-arrowsright>
							</icon-base>
						</section>
					</li>
					<li>
						<section class="icon">
							<icon-base  :width="'24px'" :height="'24px'">
								<icon-taobao></icon-taobao>
							</icon-base>
						</section>
						<section class="title">淘宝</section>
						<section class="text"></section>
						<section class="arrows">
							<icon-base  :width="'12px'" :height="'12px'" :iconColor="'#ddd'">
								<icon-arrowsright></icon-arrowsright>
							</icon-base>
						</section>
					</li>
					<li>
						<section class="icon">
							<icon-base  :width="'24px'" :height="'24px'">
								<icon-alipay></icon-alipay>
							</icon-base>
						</section>
						<section class="title">支付宝</section>
						<section class="text"></section>
						<section class="arrows">
							<icon-base  :width="'12px'" :height="'12px'" :iconColor="'#ddd'">
								<icon-arrowsright></icon-arrowsright>
							</icon-base>
						</section>
					</li>
					<li>
						<section class="icon">
							<icon-base  :width="'24px'" :height="'24px'">
								<icon-wechat></icon-wechat>
							</icon-base>
						</section>
						<section class="title">微信</section>
						<section class="text"></section>
						<section class="arrows">
							<icon-base  :width="'12px'" :height="'12px'" :iconColor="'#ddd'">
								<icon-arrowsright></icon-arrowsright>
							</icon-base>
						</section>
					</li>
					<li>
						<section class="icon">
							<icon-base  :width="'24px'" :height="'24px'">
								<icon-qq></icon-qq>
							</icon-base>
						</section>
						<section class="title">QQ</section>
						<section class="text"></section>
						<section class="arrows">
							<icon-base  :width="'12px'" :height="'12px'" :iconColor="'#ddd'">
								<icon-arrowsright></icon-arrowsright>
							</icon-base>
						</section>
					</li>
					<li>
						<section class="icon">
							<icon-base  :width="'24px'" :height="'24px'">
								<icon-weibo></icon-weibo>
							</icon-base>
						</section>
						<section class="title">微博</section>
						<section class="text"></section>
						<section class="arrows">
							<icon-base  :width="'12px'" :height="'12px'" :iconColor="'#ddd'">
								<icon-arrowsright></icon-arrowsright>
							</icon-base>
						</section>
					</li>
				</ul>
			</div>
		</main>
	</div>
</template>

<script>
import headerTop from '../../../components/header/header'
import IconBase from '../../../components/IconBase'
import IconArrowsright from '../../../components/icons/IconArrowsRight'
import IconTaobao from '../../../components/icons/IconTaobao.vue'
import IconPhone from '../../../components/icons/IconPhone.vue'
import IconAlipay from '../../../components/icons/IconAlipay.vue'
import IconWechat from '../../../components/icons/IconWechat.vue'
import IconWeibo from '../../../components/icons/IconWeibo.vue'
import IconQq from '../../../components/icons/IconQq.vue'

export default {
	data() {
		return {
			headerOptions: {
				logo: {
					goBack: true
				},
				title: '个人资料'
			},
			userInfo: {
				userName: '布可',
				avator: require('../../../assets/avator.jpg')
			}
		}
	},
	components: {
		headerTop,
		IconBase,
		IconArrowsright,
		IconTaobao,
		IconPhone,
		IconAlipay,
		IconWeibo,
		IconQq,
		IconWechat,
	}
}
</script>

<style lang="scss" scoped>
	@import '../../../style/mixin.scss';
	.info {
		@include header-main-footer(45px);
		&-main {
			&-wrap {
				@include flex(flex-start, stretch);
				flex-direction: column;
			}

			h6 {
				margin-top: 20px;
				margin-left: 10px;
				color: gray;
				font-size: 16px;
			}
			li {
				height: 60px;
				margin-left: 10px;
				border-bottom: .5px solid $bdc;
				@include flex;
				.title {
					flex-grow: 1;
				}
				.arrows {
					margin-right: 10px;
				}
				.text {
					margin-right: 10px;
					font-size: 12px;
					color: gray;
				}
			}

			&-basic {
				li {
					.photo {
						margin-right: 10px;
						img {
							@include wh(40px, 40px);
							border-radius: 20px;
							border: .5px solid $bdc;
						}
					}
				}
			}

			&-bind {
				li {
					.title {
						margin-left: 10px;	
					}
				}
			}
		}
	}
</style>