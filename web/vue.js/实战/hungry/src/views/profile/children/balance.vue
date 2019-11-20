<template>
	<div class="balance">
		<header class="balance-header">
			<section class="back" @click="$router.go(-1)">
				<icon-base width="20px" height="20px" icon-color="#000">
					<icon-back></icon-back>
				</icon-base>
			</section>
			<section class="title">
				钱包	
			</section>	
		</header>
		<main class="balance-main">
			<section class="balance-main-pointEtc">
				<section class="balance-main-point">
					<span class="title">
						金币
						<icon-base width="8px" height="8px" icon-color="#fff" class="arrows">
							<icon-arrowsright></icon-arrowsright>
						</icon-base>
					</span>
					<span class="count">
						<span>
							{{userInfo.point}}
						</span>个
					</span>
				</section>
				<section class="balance-main-balance">
					<span class="title">
						余额
						<icon-base width="8px" height="8px" icon-color="#fff" class="arrows">
							<icon-arrowsright></icon-arrowsright>
						</icon-base>
					</span>
					<span class="count">
						<span>
							{{userInfo.balance}}
						</span>元
					</span>
				</section>
			</section>
		</main>
	</div>
</template>

<script>
import iconBase from '../../../components/IconBase'
import iconBack from '../../../components/icons/IconBack'
import iconArrowsright from '../../../components/icons/IconArrowsRight'
export default {
	components: {
		iconBase,
		iconBack,
		iconArrowsright,
	},
	data() {
		return {
			userInfo: {
				point: 0,
				balance: 0,
			}
		}
	},
	mounted() {
		
	}
}
</script>

<style lang="scss" scoped>
	@import '../../../style/mixin.scss';
	.balance {
		&-header {
			@mixin header {
				@include flex(center,stretch);
				position: relative;
				height: 45px;
				.back {
					position: absolute;
					left: 10px;
					height: 45px;
					@include flex-center;
				}
				.title {
					flex-grow: 1;
					@include title20;
					@include flex-center;
					line-height: 45px;
				}
			}

			@include header;
		}

		&-main {
			&-pointEtc {
				margin: 10px;
				height: 80px;
				border-radius: 3px;
				background-color: $blue;
				@include flex-center;
			}

			@mixin main-balance-point {
				@include flex-center;
				flex-direction: column;
				flex-grow: 1;
				.title {
					@include flex-center;
					font-size: 16px;
					color: #fff;
					.arrows {
						margin-left: 5px;
					}
				}
				.count {
					color: #fff;
					font-size: 12px;
					span {
						color: #fff;
						font-size: 24px;
					}
				}
			}

			&-point {
				position: relative;
				@include main-balance-point;
			}

			&-point:after {
				@include halfPx-right;
			}

			&-balance {
				@include main-balance-point;
			}
		}
	}
</style>