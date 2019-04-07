<template>
	<div>
		<h1 style="font-size: 2em;">#多选框</h1>
		<h2>##基础样式</h2>
		<el-checkbox v-model="checked"></el-checkbox>
		<hr>
		<h2>##禁用</h2>
		<el-checkbox disabled v-model="checked1"></el-checkbox>
		<el-checkbox v-model="checked2"></el-checkbox>
		<hr>
		<h2>##复选框组</h2>
		<el-checkbox-group v-model="checkList">
			<el-checkbox label="选项1"></el-checkbox>
			<el-checkbox label="选项2"></el-checkbox>
			<el-checkbox label="选项3"></el-checkbox>
			<el-checkbox label="选项4"></el-checkbox>
		</el-checkbox-group>
		<hr>
		<h2>##全选效果 indeterminate</h2>
		<template>
			<el-checkbox 
				:indeterminate="isIndeterminate" 
				v-model="checkAll" 
				@change="handleCheckAllChange">
				全选
			</el-checkbox>
			<el-checkbox-group 
				v-model="checkedCities" 
				@change="handleCheckedCitiesChange">
				<el-checkbox 
					v-for="(item, index) in cities" 
					:key="index" 
					:label="item">
					{{item}}
				</el-checkbox>
			</el-checkbox-group>
		</template>
		<hr>
		<h2>##可选项目数量的限制 min 和 max 属性</h2>
		<el-checkbox-group v-model="checkList2"  :max="4" :min="2">
			<el-checkbox v-for="(item, index) in items" :key="index" :label="item">{{item}}</el-checkbox>
		</el-checkbox-group>
		<hr>
		<h2>##多选按钮</h2>
		<el-checkbox-group v-model="checkList2"  :max="4" :min="2">
			<el-checkbox-button v-for="(item, index) in items" :key="index" :label="item">{{item}}</el-checkbox-button>
		</el-checkbox-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checked: true,
			checked1: true,
			checked2: true,
			checkList: ["选项1","选项2"],
			checkAll: false,
			checkedCities: ['上海', '北京',],
			cities: ['上海', '北京', '广东', '深圳'],
			isIndeterminate: true,
			checkList2: ['选项1', '选项2',  ],
			items: ['选项1', '选项2', '选项3', '选项4', '选项5', ]
		}
	},
	methods: {
		handleCheckAllChange(val) {
			this.checkedCities = val ? this.cities : []
			this.isIndeterminate = false
		},
		handleCheckedCitiesChange() {
			this.checkAll = this.cities.length === this.checkedCities.length
			this.isIndeterminate = this.checkedCities.length > 0 && this.checkedCities.length < this.cities.length
		}
	}
}
</script>
