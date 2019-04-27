<template>
	<center>
		<ul 
			v-for="(item, index) in data" :key="index"
			class="demo">
			<li 
				v-for="(city, index) in item" :key="index">
				{{city.name}}
			</li>
		</ul>
	</center>
</template>
<script>
import {data} from '../server/getData.js'

export default {
	data() {
		return {
			data: null,
		}
	},
	mounted() {
		data().then(res => {
			this.data = res
			console.log(this.data)
		}) 
	}
}
</script>

<style lang="scss" scoped>
	.demo {
		border: solid 3px gray;
		width: 500px;
		li {
			list-style: none;
			border: solid .5px gray;
		}
	}
</style>