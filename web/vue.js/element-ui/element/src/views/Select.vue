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
		<hr>
		<h2>多选</h2>
		<el-select v-model="value2" placeholder="请选择" clearable multiple>
			<el-option
				v-for="(item, index) in options" 
				:key="index"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
		<span>你选择的是:{{value2}}</span>
		<hr>
		<h2>多选折叠</h2>
		<el-select v-model="value2" placeholder="请选择" clearable multiple collapse-tags>
			<el-option
				v-for="(item, index) in options" 
				:key="index"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
		<span>你选择的是:{{value2}}</span>
		<hr>
		<h2>自定义模板</h2>
		<el-select v-model="value2" placeholder="请选择" clearable multiple>
			<el-option
				v-for="(item, index) in options" 
				:key="index"
				:label="item.label"
				:value="item.value">
				<span>{{item.label}}</span>
				<span>++++</span>
			</el-option>
		</el-select>
		<span>你选择的是:{{value2}}</span>
		<hr>
		<h2>可搜索</h2>
		<el-select v-model="value" placeholder="请选择" clearable filterable>
			<el-option
				v-for="(item, index) in options" 
				:key="index"
				:label="item.label"
				:value="item.value">
				<span>{{item.label}}</span>
				<span>++++</span>
			</el-option>
		</el-select>
		<span>你选择的是:{{value}}</span>
		<hr>
		<h2>远程搜索</h2>
		<a href="https://element.faas.ele.me/#/zh-CN/component/select">点击访问文档查看</a>
		<hr>
		<h2>创建条目</h2>
		<el-select
			v-model="value2"
			multiple
			filterable
			allow-create
			placeholder="请选择或者输入">
			<el-option
				v-for="(item, index) in options" 
				:key="index"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
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
				value: '',
				value2: []
		}
	}
}
</script>