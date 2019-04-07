<template>
	<div>
		<h2>Input</h2>
		<el-input clearable v-model="input" placeholder="请输入内容" width="200px"></el-input>
		<h2>可清空</h2>
		<el-input v-model="input" placeholder="输入密码" show-password></el-input>
		<h2>带icon的</h2>
		<el-input v-model="input" suffix-icon="el-icon-search"></el-input>
		<hr>
		<el-input v-model="input" prefix-icon="el-icon-search"></el-input>
		<h2>文本区域</h2>
		<el-input type="textarea" v-model="textarea" :rows="3"></el-input>
		<hr>
		<el-input type="textarea" v-model="textarea2" :autosize="{minRows: 2, maxRows:4}"></el-input>
		<h2>前置后置元素</h2>
		<el-input v-model="input" >
			<template slot="prepend">http://</template>
			<template slot="append">.com</template>
		</el-input>
		<hr>
		<el-input v-model="input">
			<el-select class="select" v-model="select" slot="prepend"> 
				<el-option label="选项1" value="1"></el-option>
				<el-option label="选项2" value="2"></el-option>
				<el-option label="选项3" value="3"></el-option>
			</el-select>
		</el-input>
		<h1>带输入建议补全</h1>
		<el-row class="demo-autocomplete">
			<el-col :span="12">
				<div class="sub-title">焦点即列出输入建议</div>
				<el-autocomplete
					class="inline-input"
					v-model="state1"
					:fetch-suggestions="querySearch"
					placeholder="请输入内容"
					@select="handleSelect"></el-autocomplete>
			</el-col>
			<el-col :span="12"></el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			input: '',
			textarea: '',
			textarea2:'',
			select: '',
			state1: '',
			state2: '',
		}
	},
	methods: {
		querSearch(queryString, callback) {
			var restaurants = this.restaurants
			var res = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
			callback(res)
		},
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
	}
}
</script>

<style scoped lang="less">
	div {
		width: 400px;
	}
	.select {
		width: 110px;
	}

</style>