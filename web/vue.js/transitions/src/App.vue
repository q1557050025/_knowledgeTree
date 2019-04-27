<template>
  <div id="app">
    <div class="box1">
      box1
    </div>
    <h1>css原生transition</h1>
    <button @click="show = !show">按钮</button>
    <div v-if="show" class="box">
      box
    </div>
    <h1>vue transition</h1>
    <button @click="show2 = !show2">按钮</button>
    <transition name="width">
      <div class="box3" v-if="show2">
        box3
      </div>
    </transition>
    <h1>vue transition平移</h1>
    <button @click="show4 = !show4">按钮</button>
    <transition name="move">
      <div class="box4" v-if="show4">
        box4
      </div>
    </transition>
    <h1>vue tr</h1>
    <button @click="show5 = !show5">按钮</button>
    <transition name="test">
      <div class="box5" v-if="show5">
        box5
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show2: true,
      show3: true,
      show5: true,
      show4: true
    }
  }
}
</script>

<style lang="scss">
  div {
    background-color: orange;
    height: 100px;
    width: 100px;
  }
  #app {
    width: 100%;
  }
  .box1 {
    background-color: orange;
    height: 100px;
    width: 200px;
    animation: fade 3s;
  }
  @keyframes fade {
    from {width: 100px}
    to {width: 200px}
  }

  .box {
    transition: width 3s;
    &:hover {
      width:200px;
    }
  }

  .width {
    &-enter-active, &-leave-active{
      transition: all 3s;
    }
    &-enter, &-leave-to{
      width:0;
    }
  }

  
  .move {
    &-enter-active, &-leave-active{
      position: relative;
      left:0;
      transition: left 3s;
    }
    &-enter, &-leave-to {
      position: relative;
      left: -111px;
    }
  }

  .test {
    
					&-enter-active, &-leave-active {
						position: relative;
						left: -30px;
						margin-right: 0px;
						transition: 111s margin ;
					}
					&-enter, &-leave-to {
						position: relative;
						margin-right: -30px;
						left: -30px;
					}
  }
</style>