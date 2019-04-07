<template>
	<div>
		<h2>选择器</h2>
		<el-select v-model="value" placeholder="请选择">
			<el-option
				v-for="(item, index) in options" 
				:key="index"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
		<span>你选择的是:{{value}}</span>
		<hr>
		<h2>包含清空按钮</h2>
		<el-select v-model="value" placeholder="请选择" clearable>
			<el-option
				v-for="(item, index) in options" 
				:key="index"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
		<span>你选择的是:{{value}}</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
		}
	}
}
</script>