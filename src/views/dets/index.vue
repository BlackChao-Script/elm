<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:left>
      <div @click="toshoppingDet">
        <van-icon name="arrow-left" />
      </div>
    </template>
    <template v-slot:centre>
      <div>商家详细</div>
    </template>
  </NavBar>
  <!-- 数据 -->
  <ShoppingDetData></ShoppingDetData>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router";
//! 引入组件
import NavBar from '../../components/navbar/NavBar.vue'
import ShoppingDetData from './compt/ShoppingDetData.vue'
//! 使用路由
const $router = useRouter()
//! 点击返回跳转至店铺详细与分类
const toshoppingDet = () => {
  $router.go(-1)
}
</script>

<style scoped lang="scss">
</style>
