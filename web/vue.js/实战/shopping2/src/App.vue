<template>
  <div id="app">
    <div id="nav" class="header">
      <router-link to="/list" class="header-title">电商网站示例</router-link>
      <div class="header-menu">
        购物车
        <span>1</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

