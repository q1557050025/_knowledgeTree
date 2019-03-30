<template>
	<div id="app">
		<router-link to="/home">Home</router-link><br/>
		<router-link to="/about">About</router-link><br/>

		<!-- 动态路由 -->
		<router-link to="/user/1">1</router-link> <br/>
		<router-link to="/user/2">2</router-link><br/>
		<router-link to="/user/3">3</router-link><br/>

		<router-view></router-view>

		<button 
			@click="routeToHome"
		>点我跳转路由到home</button>
	</div>
</template>

<script>
export default {
	methods: {
		routeToHome() {
			console.log(this.$router)
		}
	}
}
</script>

<style>
	a{
		list-style-type: none;
		text-decoration: none;
		background-color: orange;
	}

	div {
		border: solid 2px black;
	}
</style>