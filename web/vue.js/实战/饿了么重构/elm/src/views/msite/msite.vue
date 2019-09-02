<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 13:15:18
 * @LastEditTime: 2019-08-20 20:20:19
 * @LastEditors: Please set LastEditors
 -->
<template>
	<div>
		<ul class="hot-cities">
			<h1 class="hot-cities-title">热门城市</h1>
			<li v-for="(hotCity, index) in hotCities" :key="index" class="hot-cities-name">{{hotCity.name}}</li>
		</ul>
		<ul class="city-group" v-for="(cities, index) in cityGroup" :key="index">
			<h4 class="city-group-first-letter">{{cities.key}}</h4>
			<li class="city-group-city" v-for="(city, index) in cities" :key="index">
				{{city.name}}
			</li>
		</ul>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			hotCities: [],
			cityGroup: [],
		}
	},
	mounted() {
		this.$api.hotCities().then(res => {
			this.hotCities = res
		})
		this.$api.cityGroup().then(res => {
			console.log("res", res)
			this.cityGroup = this.sortCityGroup(res)
		})
	},
	methods: {
		sortCityGroup(cityGroup) {
			let res = []
			for(let i = 65; i <= 90; i++) {
				let firstLetter = String.fromCharCode(i)
				if(cityGroup[firstLetter]) {
					let cities = cityGroup[firstLetter]
					cities.key = firstLetter
					res.push(cities)
				}
			}
			console.log(res)
			return res
		}
	}
}
</script>	

<style lang="scss" scoped>
	@import '../../style/mixin.scss';

	.hot-cities {
		&-title {
			@include title20;
			width: 100vw;
		}
		display:  flex;
		justify-content: space-around;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100vw;
		&-name {
			width: 25vw;
		}
	}

	.city-group {
		
		display:  flex;
		justify-content: space-around;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100vw;
		&-first-letter {
			width: 100vw;
		}
		&-city {
			width: 25vw;
			height: 10vw;
			border-bottom: 1px solid gray;
			border-right: 1px solid gray;

			display: flex;
			flex-direction: row;
			justify-content: space-around;
			line-height: 10vw;
		}
	}

</style>