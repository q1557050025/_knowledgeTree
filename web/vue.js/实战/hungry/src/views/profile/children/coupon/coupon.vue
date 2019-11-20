<template>
	<div class="coupon">
		<header-top class="coupon-header" :headerOptions="headerOptions"></header-top>
		<main class="coupon-main">
			<nav class="coupon-main-nav">
				<section 
					@click="$router.replace('/profile/coupon/normal')"
					:class="{'active':this.$route.path.indexOf('normal') != -1}">
					<span>红包</span>
				</section>
				<section 
					@click="$router.replace('/profile/coupon/unique')"
					:class="{'active':this.$route.path.indexOf('unique') != -1}">
					<span>店铺红包</span>
				</section>
			</nav>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
	import headerTop from '../../../../components/header/header.vue'
	import {
		getHongbaoNum
	} from '../../../../serviece/getData.js'

	export default {
		components: {
			headerTop,
		},
		data() {
			return {
				headerOptions: {
					logo: {
						goBack: true,
					},
					title: "红包",
				},
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../../../style/mixin.scss';

	.coupon {
		@include header-main-footer(45px);
		&-main {
			&-nav {
				background: $blue;
				height: 40px;
				@include flex;

				section {
					flex-grow: 1;
					@include flex(center, center);

					span {
						font-size: 16px;
						color: #9ad7ff;
					}
				}

				.active {
					span {
						color: #fff;
						border-bottom: 2px solid #fff;
						line-height: 24px;
					}
				}
			}
		}
	}
</style>