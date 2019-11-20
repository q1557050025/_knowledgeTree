<template>
	<div id="user">
		<headertop :headerOptions="headerOptions">
			<template #changeLoginWay>
				<span class="user_header_change" @click="onChangeLoginWay">登录方式</span>					
			</template>
		</headertop>
		<form action="" class="user_form" @submit="onUserSubmit">
			<section class="user_form_input_container">
				<input class="user_form_input" type="username" v-model="userOptions.username" placeholder="请输入账户">
			</section>
			<section class="user_form_input_container">
				<input class="user_form_input" type="password" v-model="userOptions.password"  placeholder="请输入密码">
				<span class="user_form_password_icon_container" @click="showPassword = !showPassword">
					<svg t="1556448154114" v-show="showPassword" 	class="user_form_password_icon"
						viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4732"
						xmlns:xlink="http://www.w3.org/1999/xlink">
						<path
							d="M921.336294 355.126136c-26.714432 43.134403-61.029982 80.7143-100.382245 112.39586 0.440022 0.860601 1.052982 1.579985 1.405 2.492774L872.663758 599.38421c5.282307 13.628392-1.282203 29.136597-14.656815 34.56012a25.275663 25.275663 0 0 1-9.600658 1.868557c-10.760065 0-20.273742-6.599302-24.240078-16.814968l-46.689368-120.083959c-37.473473 23.722284-78.352509 42.590004-121.602546 55.57883l24.942066 123.252115c1.403976 6.950296 0.069585 14.049994-3.756558 19.983123-3.826142 5.941316-9.688663 9.996678-16.533558 11.444657-1.702782 0.367367-3.492544 0.552585-5.300726 0.552585-12.286838 0-23.011086-8.933463-25.50386-21.24793l-24.555256-121.425513a501.975692 501.975692 0 0 1-93.15054 8.722662c-33.946137 0-67.36527-3.598968-99.872638-10.207479l-20.886703 122.111128c-2.229784 12.769838-13.024641 22.046109-25.678846 22.046109-1.439792 0-2.931772-0.122797-4.563945-0.385786-6.828522-1.219781-12.812817-5.099135-16.814968-10.917654-4.019547-5.819542-5.564739-12.884448-4.370541-19.887956l21.553899-125.98025c-45.38977-14.332427-87.955214-35.332716-126.675074-61.511959l-37.824467 105.699344c-3.720741 10.478655-13.550621 17.508769-24.485671 17.508769-3.071965 0-6.073322-0.544399-8.91709-1.623987-6.564509-2.439562-11.794627-7.327896-14.7264-13.778818-2.949168-6.441713-3.229554-13.656021-0.842181-20.334117l43.213198-120.751155c-34.350342-29.618575-64.469314-63.890122-88.463798-102.636588-3.739161-6.002714-4.949732-13.129019-3.405563-20.071128 1.526773-6.932899 5.616928-12.848633 11.514241-16.630772 4.178159-2.719948 8.986675-4.151553 13.901615-4.151553 9.021467 0 17.271362 4.65195 22.063505 12.428053 74.825173 120.794134 214.786855 195.830107 365.279381 195.830107 150.476153 0 290.420439-75.035974 365.245611-195.820897 4.792143-7.78429 13.042037-12.43624 22.046109-12.43624 4.931313 0 9.741875 1.430582 13.901615 4.143367 5.91471 3.790326 10.003841 9.697873 11.531637 16.638958 1.546216 6.933923 0.335644 14.069437-3.402493 20.072151z"
							p-id="4733" fill="#cdcdcd"></path>
					</svg>
					<svg t="1556448129628" v-show="!showPassword"
						class="user_form_password_icon"
						viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3894"
						xmlns:xlink="http://www.w3.org/1999/xlink">
						<path
							d="M512 224a508.48 508.48 0 0 1 444.16 272.64 32 32 0 0 1 0 32A508.48 508.48 0 0 1 512 800 508.48 508.48 0 0 1 67.84 527.36a32 32 0 0 1 0-32A508.48 508.48 0 0 1 512 224z m0 64a442.24 442.24 0 0 0-379.2 224A442.24 442.24 0 0 0 512 736a442.24 442.24 0 0 0 379.2-224A442.24 442.24 0 0 0 512 288z"
							p-id="3895" fill="#cdcdcd"></path>
						<path d="M640 512a128 128 0 1 1-128-128 128 128 0 0 1 128 128" p-id="3896" fill="#cdcdcd"></path>
					</svg>
				</span>
			</section>
			<section class="user_form_input_container">
				<input class="user_form_input" v-model="captchaValue" type="text" placeholder="请输入验证码"> 
				<span class="user_form_captcha_img">
					<img src = "../assets/loading.gif" alt="">
				</span>
				<span class="user_form_captcha_text" @click="onChangeCaptcha">
					<p>看不清</p>
					<p>换一张</p>
				</span>
			</section>
			<p class="user_form_info">温馨提示：未注册过的账号，登录时将自动注册</p>
			<button @click.prevent="onUserSubmit" class="user_form_btn">登录</button>
			<p class="user_form_forgetPassword" @click="onForgetPassword">忘记密码?</p>
		</form>
	</div>
</template>
<script>
import headertop from '../components/header/header.vue'
export default {
	data() {
		return {
			headerOptions: {
				logo: {
					goBack: true
				},
				title: "密码登录",
			},
			showPassword: false,
			userOptions:{
				username: '',
				password: '',
			},
			captchaValue: ''
		}
	},
	components: {
		headertop,
	},
	mounted() {
	},
	methods: {
		onChangeLoginWay() {
			alert`暂时不支持其他方式`
		},
		onUserSubmit() {
			console.log(`usersubmit`)
		},
		onForgetPassword() {
			console.log('forgetpassword')
		},
		onChangeCaptcha() {
			console.log('changeCaptcha')
			console.log(this._data)
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../style/mixin.scss';
	#user {
		.user {
			&_header_change {
				@include sclh(16px, #fff);
				margin: auto auto;
			}
			&_form {
				@include fj(flex-start);
				align-items: center;
				flex-direction: column;
				&_input {
					flex-grow: 1;
					@include sclh(16px, #000);
					&_container {
						@include fj;
						align-items: center;
						border-bottom: solid 1px $bdc;
						@include wh(375px, 45px);
						margin-top: 10px;
						padding-left: 10px;
						padding-right: 10px;
					}
				}

				&_password_icon {
					&_container {
						@include fj;
						align-items: center;
					}
					@include wh(20px, 20px);
				}

				&_captcha {
					&_img {
						height: 45px;
					}
					&_text {
						p {
							color: $blue;
						}
					}
				}

				&_info {
					@include sclh(12px, red, 16px);
					margin-top: 10px;
					align-self: flex-start;
				}

				&_btn {
					background-color: #4cd964;
					border-radius: 4px;
					@include wh(350px, 45px);
					@include sclh(16px, #fff, 45px);
					margin-top: 10px;
				}

				&_forgetPassword {
					margin-top: 10px;
					align-self: flex-end;
					margin-right: 10px;
					@include sclh(16px, $blue, 20px);
				}
			}
		}
	}
</style>