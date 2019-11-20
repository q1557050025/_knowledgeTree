<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-14 21:20:46
 * @LastEditTime: 2019-08-20 20:04:30
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <Header :headerOptions="headerOptions"></Header>
    <nav class="city-nav">
      <div class="city_tip">
        <span>当前定位城市:</span>
        <span>定位不准时,请在城市列表中选择</span>
      </div>
      <router-link :to="'/City/'+ cityGuessId" class="city_guess">
        <span>{{cityGuess}}</span>
        <span >
          <svg class="city_guess_icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
          </svg>
        </span>
      </router-link>
    </nav>
    <section class="hot_city">
      <ul class="hot_city_list">
        <h4 class="hot_city_title">热门城市</h4>
        <router-link 
          v-for="(hotCity, index) in hotCities" :key="index"
          tag="li" 
          :to="'/city/'+ hotCity.id">
            {{hotCity.name}}
          </router-link>
      </ul>
    </section>
    <van-list 
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
      class="city_group">
      <ul 
        v-for="(cities, index) in asyncCityGroup" :key="index"
        class="city_group_list">
          <h4 class="city_group_title">{{asyncCityGroup[index].key}}
            <span v-if="asyncCityGroup[index].key === 'A'">(按字母顺序排列)</span>
          </h4>
          <router-link 
            v-for="(city, index) in cities" :key="index"    
            :to="'/city/'+ city.id"
            tag="li">{{city.name}}</router-link>
      </ul>
    </van-list>
  </div>
</template>

<script>
import {hotCities, cityGroup, cityGuess} from '../serviece/getData.js'
import Header from '../components/header/header.vue'
export default {
  name: 'home',
  components: {
    Header,
  },
  data() {
    return {
      cityGroup: null,
      hotCities: [],
      cityGuess: '',
      cityGuessId: '',
      headerOptions: {logo:{title:true}, signUp:true},
      loading: false,
      finished: false,
      asyncCityGroup:[],
    }
  },
  methods: {
		//vant list 滚动条滚动时调用, 异步渲染新的地址
    onLoad() {
			for (let i = 0; i < 3; i++) {
				this.asyncCityGroup = this.cityGroup.slice(0,this.asyncCityGroup.length+1)
			}
      // 加载状态结束
			this.loading = false;
			//   // 数据全部加载完成
      if (this.asyncCityGroup[this.asyncCityGroup.length - 1].key === 'Z') {
        this.finished = true;
      }
      
      console.log(this.asyncCityGroup)
		},
    sortedCityGroup() {
      let res = []
      for(let i = 65 ; i <= 90; i++) {
        if(this.cityGroup[String.fromCharCode(i)]) {
          res[i-65] = this.cityGroup[String.fromCharCode(i)]
          res[i-65].key = String.fromCharCode(i)
        }else{
          res[i-65] = []
          res[i-65].key = String.fromCharCode(i)
        }
      }
      this.cityGroup = res
    },
  },
  computed: {
  },
  mounted() {
    hotCities().then(res => {
      this.hotCities = res
      console.log(res,"qqqqqq")
    })
    cityGuess().then(res => {
      this.cityGuess = res.name
      this.cityGuessId = res.id
    })
    cityGroup().then(res => {
      this.cityGroup = res
      this.sortedCityGroup()
      this.onLoad()
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '../style/mixin.scss';
  
  @mixin cityList() {
    border-top: 2px solid $bdc;
    @include fj(flex-start);
    margin-top: 10px;
    flex-wrap: wrap;
    border-bottom: .5px solid $bdc;
    li {
      @include sclh(14px, #333, 41px);
      border-bottom: .5px solid $bdc;
      border-right: .5px solid $bdc;
      @include wh(93.75px, 41px);    
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      text-align: center;
      &:nth-of-type(4n) {
        border-right: none;
      }
    }
  }

  .city-nav {
    .city_tip {
      @include fj;
      @include wh(375px, 40px);
      background-color: #fff;
      border-bottom: 1px solid $bdc;
      span:nth-of-type(1) {
        margin-left: 10px;
        @include sclh(13px, #666, 50px);
      }
      span:nth-of-type(2) {
        @include sclh(12px, #9f9f9f, 50px);
        font-weight: 900;
        margin-right: 10px;
      }
    }
  }
  .city_guess {
    @include fj;
    @include wh(375px, 40px);
    border-bottom: 2px solid $bdc;
    span{
      @include sclh(17.6px, $blue, 42px);
      &:nth-of-type(1) {
        margin-left: 10px;
      }
      &:nth-of-type(2) {
        margin-right: 10px;
      }
    }
    &_icon {
      @include wh(14px, 14px);
      fill: #999;
    }
  }
  .hot_city{
    background-color: #fff;
    &_title {
      @include sclh(13px, #666, 34px);
      font-family: "Helvetica Neue";
      border-bottom: 1px solid $bdc;
      padding-left: 10px;
      width: 375px;
    }
    &_list {
      @include cityList;
      li {
      color: $blue;
      }      
    }
  }
  .city_group{
    background-color: #fff;
    &_title {
      @include sclh(13px, #666, 34px);
      font-family: "Helvetica Neue";
      border-bottom: 1px solid $bdc;
      padding-left: 10px;
      width: 375px;
      span {
        @include sclh(12px, #999, 37px)
      }
    }
    &_list {
      @include cityList;
    }
  }
</style>