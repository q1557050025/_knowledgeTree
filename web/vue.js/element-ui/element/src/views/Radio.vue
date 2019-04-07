<template>
	<div>
		<el-radio v-model="radio" label="1">选项1</el-radio>
		<el-radio v-model="radio" label="2">选项2</el-radio>
		<span>label值</span><input type="text" v-model="radio">
		<hr>
		<h1>禁用</h1>
		<el-radio disabled v-model="radio" label="1">选项1</el-radio>
		<el-radio disabled v-model="radio" label="2">选项2</el-radio>
		<hr>
		<h1>单选框组</h1>
		<el-radio-group v-model="radio2">
			<el-radio label="1">选项1</el-radio>
			<el-radio label="2">选项2</el-radio>
			<el-radio label="3">选项3</el-radio>
		</el-radio-group>
		<hr>
		<h1>按钮样式的单选框组</h1>
		<el-radio-group v-model="radio3">
			<el-radio-button label="选项1">1</el-radio-button>
			<el-radio-button label="选项2">2</el-radio-button>
			<el-radio-button label="选项3">3</el-radio-button>
		</el-radio-group>
		<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
		<el-radio-group v-model="radio3" size="mini">
			<el-radio-button label="选项1">1</el-radio-button>
			<el-radio-button label="选项2">2</el-radio-button>
			<el-radio-button label="选项3">3</el-radio-button>
		</el-radio-group>
		<hr>
		<h1>带有边框Border</h1>
		<el-radio-group v-model="radio3">
			<el-radio border label="选项1">1</el-radio>
			<el-radio border label="选项2">2</el-radio>
			<el-radio border label="选项3">3</el-radio>
		</el-radio-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			radio: '1',
			radio2: '2',
			radio3: '选项3'
		}
	}
}
</script>
