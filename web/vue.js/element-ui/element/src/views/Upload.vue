<template>
	<div>
		<h2>置后学习...</h2>
		<el-upload
			multiple
			action="https://jsonplaceholder.typicode.com/posts/"
			:on-preview="handlePreview"
			:on-remove="handleRemove"
			:before-remove="beforeRemove"
			:limit="3"
			:on-exceed="handleExceed"
			:file-list="fileList">
			<el-button size="small" type="primary">上传</el-button>	
			<div slot="tip">只能....</div>
		</el-upload>
	</div>
</template>
<script>
export default {
	data() {
		return {
			fileList: [],
		}
	},
	methods: {
		handlePreview(file) {
			console.log(file)
		},
		handleRemove(file, fileList) {
			console.log(file, fileList)
		},
		handleExceed(files, fileList) {
			this.$message.warning(`当前选择了${files.length}个文件,已经上传了${fileList.length}`)
		},
		beforeRemove(file) {
			return this.$confirm(`确定移除${file.name}?`);
		}
	}
}
</script>
