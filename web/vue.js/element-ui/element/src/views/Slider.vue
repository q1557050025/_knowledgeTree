<template>
	<div>
		<span>默认</span>
		<el-slider v-model="value"></el-slider>
		<hr>
		<span>自定义初始值</span>
		<el-slider v-model="value1"></el-slider>
		<hr>
		<span>隐藏 Tooltip</span>
		<el-slider v-model="value2" :show-tooltip="false"></el-slider>
		<hr>
		<span>格式化Tooltip</span>
		<el-slider v-model="value" :format-tooltip="formatTooltip"></el-slider>
		<hr>
		<h2>离散值 | 间断</h2>
		<span>不显示间断点</span>
		<el-slider
			v-model="value"
			:step="10"></el-slider>
		<span>显示间断点</span>
		<el-slider
			v-model="value"
			:step="10"
			show-stops></el-slider>
		<span>准确值</span>
		<el-slider
			v-model="value"
			:step="10"
			show-input></el-slider>
		<span>范围</span>
		<el-slider
			v-model="value"
			show-input
			range
			:max="20"></el-slider>
		<span>竖向</span>
		<el-slider
			v-model="value3"
			vertical
			height="50px"></el-slider>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: 0,
			value1: 10,
			value2: 0,
			value3: 10,
		}
	},
	methods: {
		formatTooltip(val) {
			return val/ 100
		}
	}
}
</script>