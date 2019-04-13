<template>
	<header id="header">
		<slot name="logo"></slot>
		<router-link 
			class="header-login"
			:to="false ? '/profile': '/login'" 
			v-if="singinUp">
			<span class="header-login-span">登录|注册</span>	
		</router-link>
	</header>
</template>

<script>
export default {
	props: [
		'singinUp', 
	],
	mounted() {

	}
}
</script>

<style lang="scss" scoped>
	@import "../../style/mixin.scss";
	#header {
		background-color: $blue;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		@include wh(100%, 1.95rem)
	}

	.header-login {
		@include sc(0.65rem, #fff);
		@include ct;
		right: .55rem;
		&-span {
			color: #fff;
		}
	}
</style>