<!-- eslint-disable -->
<template>
	<div>
		<h2>时间选择器</h2>
		<span>固定时间</span>
		<el-time-select
			v-model="value1"
			:picker-options="{
			 start: '08:30',
			 step: '00:30',
			 end: '18:30'
		 	}"
	  	placeholder="选择时间"
		>
		</el-time-select>
		<hr>
		<span>任意时间</span>
		<el-time-picker
			v-model="value2"
		 	:picker-options="{
				selectableRange: '18:30:30 - 20:30:30'
		 	}"
	  	placeholder="选择时间"
		>
		</el-time-picker>
		<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
		<span>箭头选择</span>
		<el-time-picker
			arrow-control
			v-model="value2"
		 	:picker-options="{
				selectableRange: '18:30:30 - 20:30:30'
		 	}"
	  	placeholder="选择时间"
		>
		</el-time-picker>
		<hr>
		<span>时间范围</span>
		<el-time-select
			v-model="startTime"
			:picker-options="{
			 start: '08:30',
			 step: '00:30',
			 end: '18:30'
		 	}"
	  	placeholder="选择时间"
		>
		</el-time-select>
		<el-time-select
			v-model="endTime"
			:picker-options="{
			 start: '08:30',
			 step: '00:30',
			 end: '18:30',
			 minTime: startTime
		 	}"
	  	placeholder="选择时间"
		>
		</el-time-select>
		<hr>
		<el-time-picker
			is-range
			v-model="value3"
			range-separator="-"
			start-placeholder= "Start"
			end-placeholder= "End"
	  	placeholder="选择时间"
		>
		</el-time-picker>
		<el-time-picker
			is-range
			arrow-control
			v-model="value4"
			range-separator="-"
			start-placeholder= "Start"
			end-placeholder= "End"
	  	placeholder="选择时间"
		>
		</el-time-picker>

	</div>
</template>

<script>
export default {
	data() {
		return {
			value1: '',
			value2: '',
			startTime: '',
			endTime: '',
			value3: '',
			value4: [new Date(2019, 2, 12, 3, 30), new Date(2019, 2, 12, 13, 30)],
		}
	}
}
</script>