<template>
	<div>
		<h2>日期选择</h2>
		<span>默认</span>
		<el-date-picker
			v-model="value"
			type="date"
			placeholder="请选择日期"></el-date-picker>
		<span>带快捷方式</span>
		<el-date-picker
			v-model="value"
			type="date"
			placeholder="请选择日期"
			:picker-options="pickerOptions"></el-date-picker>
		<h2>选择年,月,周,或多个日期</h2>
		<span>周</span>
		<el-date-picker
			v-model="value2"
			type="week"
			format="yyyy 年 WW 周"
			placeholder="请选择周"></el-date-picker>
		<span>月</span>
		<el-date-picker
			v-model="value3"
			type="month"
			format="MM月"
			placeholder="请选择月份"></el-date-picker>
		<span>年</span>
		<el-date-picker
			v-model="value4"
			type="year"
			format="yyyy 年"
			placeholder="请选择年份"></el-date-picker>
		<h2>选择日期范围</h2>
		<span>默认</span>
		<el-date-picker
			v-model="value5"
			type="daterange"
			range-separator="-"
			start-placeholde="开始"
			end-placeholder="结束"></el-date-picker>
		<span>带快捷</span>
		<el-date-picker
			v-model="value5"
			type="daterange"
			range-separator="-"
			start-placeholde="开始"
			end-placeholder="结束"
			:picker-options="pickerOptions2"></el-date-picker>
		<h2>日期时间选择器</h2>
		<span>默认</span>
		<el-date-picker
			v-model="value5"
			type="datetime"
			placeholder="选择时间"></el-date-picker>
		<span>带快捷方式</span>
		<el-date-picker
			v-model="value5"
			type="datetime"
			align="center"
			:picker-options="pickerOptions"
			placeholder="选择时间"></el-date-picker>
		<h2>选择日期范围</h2>
		<span>默认</span>
		<el-date-picker
			v-model="value5"
			type="datetimerange"
			range-separator="-"
			start-placeholde="开始"
			end-placeholder="结束"></el-date-picker>
		<span>默认开始和结束时间</span>
		<el-date-picker
			:default-time="['12:00:00', '13:00:30']"
			v-model="value5"
			type="datetimerange"
			range-separator="-"
			start-placeholde="开始"
			end-placeholder="结束"></el-date-picker>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			value2: '',
			value3: '',
			value4: '',
			value5: '',
			pickerOptions: {
				shortcuts: [
					{
						text: '今日',
						onClick(picker) {
							picker.$emit('pick', new Date())
						}
					},
					{
						text: '昨天',
						onClick(picker) {
							const date = new Date()
							date.setTime(date.getTime() - 24 * 3600 * 1000)
							picker.$emit('pick', date)
						}
					},
					{
						text: '一周前',
						onClick(picker) {
							const date = new Date()
							date.setTime(date.getTime() - 24 * 3600 * 1000 * 7)
							picker.$emit('pick', date)
						}
					},
				]
			},
			pickerOptions2: {
				shortcuts: [
					{
						text: '未来一周',
						onClick(picker) {
							const start = new Date()
							const end = new Date()
							end.setTime(end.getTime() + 24 * 3600 * 1000 * 7)
							picker.$emit('pick', [start, end])
						}
					}
				]
			}
		}
	}
}
</script>