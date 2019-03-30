<template>
	<div>
		<h1>User</h1>
		<div>我是user组件</div>
		<div>id是 {{dynamicSegment}}</div>
	</div>
</template>

<script>
export default {
	computed: {
		dynamicSegment () {
			return this.$route.params.id
		}
	}
}
</script>
