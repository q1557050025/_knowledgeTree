<template>
	<div>
		<h2>Transfer 穿梭框</h2>
		<el-transfer v-model="value1" :data="data"></el-transfer>
		<h2>可搜索</h2>
		<el-transfer 
			v-model="value2" 
			:data="data"
			filter-placeholder="搜索" 
			:filter-method="filterMethod"
			filterable></el-transfer>
		<h2>自定义</h2>
		<el-transfer 
			v-model="value2" 
			:data="data"
			:left-default-checked='[1, 2, 5]'
			:right-default-checked='[4]'
			filter-placeholder="搜索" 
			:titles="['Source', 'Target']"
			:filter-method="filterMethod"
			filterable></el-transfer>
	</div>
</template>

<script>
export default {
	data() {
		const generateData = ()=> {
			const data = [];
			for (let i = 1; i<= 10; i++) {
				data.push({
						key: i,
						label: `备选项${i}`,
						disabled: i%3 === 0,
						str: `${i}`
				})
			}
			return data
		}
		return {
			data: generateData(),
			value1: [1, 5],
			value2: [4,],
			filterMethod(query, item) {
				return item.str.indexOf(query) > -1
			} 
		}
	}
}
</script>