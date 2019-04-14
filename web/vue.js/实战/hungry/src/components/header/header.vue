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
		@include wh(375px, 45px);
		@include fj;
	}

	.header-login {
		@include sclh(15px, #fff, 45px);
		margin-right: rem2px(0.55);
		&-span {
			color: #fff;
			@include wh(65px, 20px);
		}
	}
</style>