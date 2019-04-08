<template>
	<div>
		<h2>评分</h2>
		<span>默认</span>
		<el-rate v-model="value1"></el-rate>
		<span>区分颜色</span>
		<el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
		<span>提示文字</span>
		<el-rate 
			v-model="value3" 
			:colors="['#99A9BF', '#F7BA2A', '#FF9900']"
			show-text
			:texts="['1', '2', '3', '4', '5']"></el-rate>
		<span>只读</span>
		<el-rate 
			v-model="value5" 
			:colors="['#99A9BF', '#F7BA2A', '#FF9900']"
			show-text
			:texts="['1', '2', '3', '4', '5']"
			disabled></el-rate>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value1: null,
			value2: null,
			value3: null,
			value4: null,
			value5: 3,
		}
	}
}
</script>