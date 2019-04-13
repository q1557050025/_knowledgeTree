<template>
	<div>
		<h2>颜色选择器</h2>
		<span>默认</span>
		<el-color-picker 
		v-model="value1"></el-color-picker>
		<span>透明度支持</span>
		<el-color-picker v-model="value2" show-alpha></el-color-picker>
		<span>预定义颜色</span>
		<el-color-picker 
			v-model="value3" 
			show-alpha
			:predefine="predefineColors"></el-color-picker>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value1: '#409EFF',
			value2: 'rgba(0, 0, 0, 0.1)',
			value3: 'rgba(110, 110, 110, 0.1)',
			predefineColors: [
				'#ff4500',
				'#ff8c00',
				'#ffd700'
			]
		}
	}
}
</script>
