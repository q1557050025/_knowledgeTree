<template>
  <div class="home">
    <Header singin-up="home">
      <span slot="logo"  class="header-logo">饿了么</span>
    </Header>
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
  
  .header-logo {
    @include sc(0.7rem, #fff);
    @include wh(2.3rem, 0.7rem);
    @include ct;
    left: 0.4rem;
    font-weight: 400;
  }
</style>