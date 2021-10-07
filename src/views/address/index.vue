<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:left>
      <div>ele.me</div>
    </template>
    <template v-slot:right>
      <div @click="toLogin">登录|注册</div>
    </template>
  </NavBar>
  <!-- 热门城市 -->
  <HotCity></HotCity>
  <!-- 所有城市 -->
  <AllCity></AllCity>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
//! 引入组件
import NavBar from '../../components/navbar/NavBar.vue'
import HotCity from './HotCity.vue'
import AllCity from './AllCity.vue'

//! 使用路由
const $router = useRouter()
//! 点击登录|注册时的方法
const toLogin = () => {
  $router.push('/login')
}
</script>

<style scoped lang="scss">
</style>

