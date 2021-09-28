<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:left>ele.me</template>
    <template v-slot:right>登录|注册</template>
  </NavBar>
  <!-- 热门城市 -->
  <HotCity></HotCity>
  <!-- 所有城市 -->
  <AllCity></AllCity>
</template>

<script setup lang='ts'>
import NavBar from '../../components/navbar/NavBar.vue'
import HotCity from './HotCity.vue'
import AllCity from './AllCity.vue'

</script>

<style scoped lang="scss">
</style>

