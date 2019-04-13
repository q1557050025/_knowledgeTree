<template>
	<div>
		<h2>表格</h2>
		<h4>默认表格</h4>
		<el-table
			:data="tableData"
			width="800px">
			<el-table-column
				prop="date"
				label="日期"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="180">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址"
				width="180">
			</el-table-column>
		</el-table>
		<h4>带边框</h4>
		<el-table
			stripe
			border
			:data="tableData"
			width="800px">
			<el-table-column
				prop="date"
				label="日期"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="180">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址"
				width="180">
			</el-table-column>
		</el-table>
		<h4>带状态表格</h4>
		<el-table
			:row-class-name="tableRowClassName"
			:data="tableData"
			width="800px">
			<el-table-column
				prop="date"
				label="日期"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="180">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址"
				width="180">
			</el-table-column>
		</el-table>
		<h4>固定表头</h4>
		<el-table
			height="200"
			:row-class-name="tableRowClassName"
			:data="tableData"
			width="800px">
			<el-table-column
				prop="date"
				label="日期"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="180">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址"
				width="180">
			</el-table-column>
		</el-table>
		<h4>固定列</h4>
		<el-table
			style="width: 500px;"
			:row-class-name="tableRowClassName"
			:data="tableData"
			width="800px">
			<el-table-column
				fixed
				prop="date"
				label="日期"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="180">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址"
				width="180">
			</el-table-column>
			<el-table-column
				prop="date"
				label="日期"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="180">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址"
				width="180">
			</el-table-column>
			<el-table-column
				prop="date"
				label="日期"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="180">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址"
				width="180">
			</el-table-column>
		</el-table>
		<h4>添加方法 | 最大高度</h4>
		<el-table
			max-height="200"
			:row-class-name="tableRowClassName"
			:data="tableData"
			width="800px">
			<el-table-column
				prop="date"
				label="日期"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="180">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址"
				width="180">
			</el-table-column>
			<el-table-column
				fixed="right"
				label="操作"
				width="100">
				<template slot-scope="scope">
					<el-button
						@click.native.prevent="deleteRow(scope.$index, tableData)">移除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<h4>背景色更换</h4>
		<el-table
			max-height="200"
			:row-class-name="tableRowClassName2"
			:data="tableData2"
			width="800px">
			<el-table-column
				prop="date"
				label="日期"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="180">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址"
				width="180">
			</el-table-column>
			<el-table-column
				fixed="right"
				label="操作"
				width="100">
				<template slot-scope="scope">
					<el-button
						@click.native.prevent="changeBgColorClassName(scope.$index, tableData2)">改色</el-button>
				</template>
			</el-table-column>
		</el-table>
		<h4>多级表头</h4>
		<el-table
			:data="tableData3"></el-table>
	</div>
</template>

<style lang="less" scoped>
	.el-table {
		.warning-row {
			background: red
		}
		.success-row {
			background: orange
		}
	}
</style>
<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				tableData2: [{
					date: '2016-05-02',
					name: '王小虎',
					bgColorClassName: '',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					bgColorClassName: '',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					bgColorClassName: '',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					bgColorClassName: '',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
			}
		},
		methods: {
			tableRowClassName({row, rowIndex}) {
				if(rowIndex === 0) {
					return 'success-row'
				}else if(rowIndex === 3){
					return 'warning-row'
				}
				return ''
			},
			tableRowClassName2({row, rowIndex}){
				return this.tableData2[rowIndex].bgColorClassName
			},
			deleteRow(index, rows) {
				rows.splice(index, 1);
			},
			changeBgColorClassName(index, rows) {
				console.log(rows)
				rows[index].bgColorClassName = 'success-row'
			}
		}
	}
</script>
