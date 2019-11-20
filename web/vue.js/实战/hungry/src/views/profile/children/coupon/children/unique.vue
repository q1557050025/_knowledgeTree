<template>
	<coupon-list :couponList="couponList"></coupon-list>
</template>

<script>
import couponList from './components/couponList.vue'
import {getHongbaoNum} from '../../../../../serviece/getData.js'

export default {
	components: {
		couponList,
	},
	data() {
		return {
			userInfo: {
				user_id: 28249,
			},
			couponList: [],
		}
	},
	mounted() {
		this.initData();
	},
	methods: {
		async initData() {
			this.couponList = await getHongbaoNum(this.userInfo.user_id)
		}
	}
}
</script>