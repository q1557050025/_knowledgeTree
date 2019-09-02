<template>
	<div>
		<table>
			<tr v-for="(item, index) in count" :key="index">
				<td 
					v-for="(item, index) in count" :key="index" class="grid"
					:style="style">

				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			count: 40,
			canvasSize: 1000,
		}
	},
	computed: {
		gridSize() {
			return this.canvasSize/this.count
		},
		style(){
			return `width:${this.gridSize}px height:${this.gridSize}px`
		}
	},
	mounted() {
		console.log(this.style)
		console.log(this.gridSize)
	}
}
</script>

<style>
	.grid {
		border: 1px solid gray;
		background-color: #fff;
	}
</style>