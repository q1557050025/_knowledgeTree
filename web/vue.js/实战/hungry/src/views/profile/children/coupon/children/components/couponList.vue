<template>
	<ul class="list">
		<li v-for="(item, index) in couponList" :key="index" class="item">
			<section class="amount">
				¥<span>{{item.amount}}</span>
			</section>
			<ul class="detailes">
				<h4>{{item.name}}</h4>
				<li v-for="(detaile, index) of item.description_map" :key="index">
					·&ensp;{{detaile}}
				</li>
			</ul>
			<section class="go">
				<span>进店使用</span>
			</section>
		</li>
	</ul>
</template>

<script>

export default {
	props: {
		couponList: {
			type: Array,
			default: [],
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../../../../../style/mixin.scss';
	.item {
		background-color: #fff;
		@include flex;
		border-radius: 1px;
		box-shadow: 0 0 5px 0 $bdc;
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 10px;
		height: 120px;
		.amount {
			@include flex(center,center);
			width: 80px;
			font-size: 16px;
			color: red;
			span {
				font-size: 24px;
				font-weight: 600;
				color: red;
				margin-left: 3px;
			}
		}

		.detailes {
			flex-grow: 1;
			h4 {
				@include title16;
				margin-bottom: 3px;
			}
			li {
				@include text12;
			}
		}

		.go {
			width: 100px;
			@include flex(center,center);
			span {
				background: red;
				color: #fff;
				height: 20px;
				border-radius: 10px;
				font-size: 12px;
				@include flex(center,center);
				padding-left: 6px;
				padding-right: 6px;
			}
		}
	}
</style>