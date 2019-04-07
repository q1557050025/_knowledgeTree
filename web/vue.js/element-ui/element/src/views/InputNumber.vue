<template>
	<div>
		<h2>计数器</h2>
		<el-input-number 
			v-model="num1" 
			@change="handleChange" 
			:min="1" 
			:max="5"
			label="描述文字"></el-input-number>
		<h2>步数</h2>
		<el-input-number 
			:step="2"
			:precision="2"
			v-model="num1" 
			@change="handleChange" 
			:min="1" 
			:max="5"
			label="描述文字"></el-input-number>
		<h2>按钮位置</h2>
		<el-input-number 
			controls-position="right"
			:step="2"
			:precision="2"
			v-model="num1" 
			@change="handleChange" 
			:min="1" 
			:max="5"
			label="描述文字"></el-input-number>

	</div>
</template>

<script>
export default {
	data() {
		return {
			num1: 1
		}
	},
	methods: {
		handleChange(val) {
			console.log(val)
		}
	}
}
</script>