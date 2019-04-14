<template>
  <div>
    <Header singin-up="home">
      <span slot="logo"  class="header-logo">饿了么</span>
    </Header>
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
    <section class="city_group">
      <ul 
        v-for="(cities, key) in sortedCityGroup" :key="key"
        class="city_group_list">
          <h4 class="city_group_title">{{key}}
            <span v-if="key === 'A'">(按字母顺序排列)</span>
          </h4>
          <router-link 
            v-for="(city, index) in cities" :key="index"    
            :to="'/city/'+ city.id"
            tag="li">{{city.name}}</router-link>
      </ul>
    </section>
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
      cityGroup: {},
      hotCities: [],
      cityGuess: '',
      cityGuessId: '',
    }
  },
  computed: {
    sortedCityGroup() {
      let res = {}
      for(let i = 65 ; i <= 90; i++) {
        if(this.cityGroup[String.fromCharCode(i)]) {
          res[String.fromCharCode(i)] = this.cityGroup[String.fromCharCode(i)]
        }
      }
      return res
    }
  },
  mounted() {
    hotCities().then(res => {
      this.hotCities = res
      console.log(this.hotCities)
    })
    cityGuess().then(res => {
      this.cityGuess = res.name
      this.cityGuessId = res.id
      console.log(this.cityGuess, this.cityGuessId)
    })
    cityGroup().then(res => {
      this.cityGroup = res
      console.log(this.cityGroup)
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

  .header-logo {
    @include sclh(16px, #fff, 45px);
    @include wh(54px, 16.5px);
    margin-left: rem2px(.4);
    font-weight: 400;
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