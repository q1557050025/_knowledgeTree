<template>
	<div>
		<Header :headerOptions="headerOptions"></Header>
		<form action="/" class="city_form">
			<van-search
				class="city_form_search"
				v-model="place"
				placeholder="请输入地址"
				shape="round"
				@search="onSearch"
				@input="onSearch">
			</van-search>
			<div slot="action" class="city_form_submit" @click="onSearch">提交</div>
		</form>		
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			:immediate-check="false"
			@load="onLoad">
			<ul v-if="this.placeListAsync.length">
				<li 
					:key="index"	
					class="city_place" 
					@click="linkToHome(item)"
					v-for="(item, index) in placeListAsync">
						<h4 class="city_place_name">{{item.name}}</h4>
						<h6 class="city_place_address">{{item.address}}</h6>
				</li>
			</ul>
			<ul v-else>
				<h4 class="city_place_title">历史搜索记录</h4>
				<li
				v-for="(item, index) in placeHistory" :key="index"
				@click="linkToHome(item)"
				class="city_place">
					<h4 class="city_place_name">{{item.name}}</h4>
					<h6 class="city_place_address">{{item.address}}</h6>
				</li>
				<li
					class="city_place_clear" 
					@click="clearLocalStorage" 
					v-if="this.placeHistory.length">清楚所有历史</li>
			</ul>
		</van-list>
	</div>
</template>
<script>
import Header from '../components/header/header'
import {currentCity,searchPlace} from '../serviece/getData.js'
import {getStore, setStore, removeStore} from '../config/mUtils.js'

export default {
	components: {
		Header,
	},
	data() {
		return {
			cityId: null, //城市id
			place: '', //输入的地址
			placeList: [], //查询到的所有地址列表
			placeListAsync: [], //用于异步渲染的地址列表
			placeHistory: [], //历史地址列表
			currentCity: null, //当前城市数据
			headerOptions: {logo:{goBack:true},title:'出错',changeCity:true}, //header组件数据
			loading: false, // vant list依赖, 是否显示正在加载
			finished: false, // vant list依赖, 加载是否已经完成
		}
	},
	mounted() {
		this.cityId = this.$route.params.cityId
		currentCity(this.cityId).then(res => {
			this.currentCity = res
			this.headerOptions.title = this.currentCity.name
		})
		if(getStore("placeHistory")) {
			this.placeHistory = getStore("placeHistory")
		}
	},
	methods: {
		// 输入地址时调用, 查询地址
		onSearch() { 
			if(this.place.length > 0){
				searchPlace(this.cityId, this.place).then(res => {
					if(res.name === "ERROR_QUERY_TYPE") {
						this.placeList = []
					}else {
						this.placeList = res
					}
					this.onLoad()
				})
			}else {
				this.placeList = []
				this.placeListAsync = []
				this.finished = this.placeHistory.length === 0
			}
		},
		//vant list 滚动条滚动时调用, 异步渲染新的地址
    onLoad() {
			for (let i = 0; i < 10; i++) {
				this.placeListAsync = this.placeList.slice(0,this.placeListAsync.length+1)
			}
      // 加载状态结束
			this.loading = false;
			//   // 数据全部加载完成
      if (this.placeListAsync.length >= this.placeList.length) {
        this.finished = true;
			}
		},
		// 跳转到home页 , 记录地址
		linkToHome(item) {
			this.setPlaceHistory()
			if(!this.placeHistory.some(val => {
				return val.geohash === item.geohash
			})){
				this.placeHistory.push(item)
			}
			setStore('placeHistory', this.placeHistory)
			this.$router.push('/Home/' + item.geohash)
		},
		// 清楚所有本地地址的历史记录
		clearLocalStorage() {
			removeStore('placeHistory')
			this.setPlaceHistory()
		},
		// 重置历史记录
		setPlaceHistory() {
			if(getStore('placeHistory')) {
				this.placeHistory = getStore('placeHistory')
			}else{
				this.placeHistory = []
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';
	.city {
		&_form {
			&_search {
				width: 337.5px;
				margin: 0 auto;
				padding-left: 0;
				padding-right: 0;
			}
			.van-search__content {
				border: .5px solid $bdc;
			}
			margin-top: 10px;
			border-top: 2px solid $bdc;
			border-bottom: 2px solid $bdc;
			&_submit {
				background-color: $blue;
				@include wh(337.5px, 33px);
				margin: 0 auto;
				text-align: center;
				line-height: 33px;
				border-radius: 17px 17px;
				margin-bottom: 10px;
				color: #fff;
				font-weight: 700;
			}
		}
		
		&_place {
			padding-top: 15px;
			padding-left: 17px;
			@include wh(375px, 73px);
			border-bottom: solid 1px $bdc;
			background-color: #fff;
      overflow:hidden;
      text-overflow:ellipsis;
			white-space:nowrap;
			&_title {
				text-align: center;
				border-bottom: solid 1px $bdc;
				border-top: solid 1px $bdc;
				font-size: 12px;
			}
			&_name {
				@include sclh(15px,rgb(51,51,51))
			}
			&_address {
				margin-top: 8.3px;
				@include sclh(12px,#999)
			}
			&_clear {
				border-bottom: solid .5px $bdc;
				text-align: center;
				line-height: 30px;
				@include wh(375px,30px);
			}
		}
	}
</style>