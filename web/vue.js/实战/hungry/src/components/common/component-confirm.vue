<template>
	<div class="confirm-wrap">
		<div class="confirm">
			<h4 class="confirm-title">{{text}}</h4>
			<div class="confirm-btn">
				<div class="confirm-text" @click="handleConfirm(true)">确认</div>
				<div class="confirm-text" @click="handleConfirm(false)">取消</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			text: {
				type: String,
				default: "请确认",
			}
		},
		methods: {
			handleConfirm(boolen) {
				this.$emit("handleConfirm", boolen)
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../style/mixin.scss';
	@include fade;

	.confirm {
		z-index: 999;
		&-wrap {
			position: fixed;
			left: 0;
			top: 0;
			background-color: rgba(0, 0, 0, .3);
			width: 375px;
			height: 667px;
			z-index: 999;
			@include fj(space-around);
			align-items: center;
		}

		border-radius: 8px;
		background-color: #fff;
		@include wh(275px, 100px);
		@include fj(flex-start);
		align-items: center;
		flex-direction: column;

		&-title {
			@include sclh(20px, #000, 60px);
			font-weight: 600;
			height: 60px;
		}

		&-btn {
			flex-grow: 1;
			@include fj;
			width: 275px;
			border-top: .5px solid $bdc;
		}

		&-text {
			&:nth-of-type(1) {
				border-right: .5px solid $bdc;
			}

			flex-grow: 1;
			@include sclh(20px, $blue);
			@include fj(space-around);
			align-items: center;
			font-weight: 500;
		}
	}
</style>