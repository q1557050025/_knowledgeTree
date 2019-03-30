<template>
	<div>
		<h1>home</h1>
		<p>{{msg}}</p>

		<!-- 嵌套路由 -->
		<router-link to="/home/phone">手机</router-link> <br/>
		<router-link to="/home/computer">电脑</router-link> <br/>

		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data () {
		return {
			msg: '我是home组件'
		}
	}
}
</script>