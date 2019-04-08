<template>
	<div>
		<h2>开关</h2>
		<span>默认开关:</span>
		<el-switch
			v-model="value"
			active-color="#13ce66"
			inactive-color="#ff4941"></el-switch>
		<hr>
		<h2>文字</h2>
		<el-switch
			v-model="value"
			active-text="开启"
			inactive-text="关闭"
			></el-switch>
		<h2>拓展的value类型</h2>
		<el-tooltip :content="'Info:' + value">
			<el-switch
				v-model="value"
				active-color="#13ce66"
				active-value="开启"
				inactive-value="关闭"></el-switch>
		</el-tooltip>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: true,
		}
	}
}
</script>