<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:left>
      <div @click="toBlck">
        <van-icon name="arrow-left" />
      </div>
    </template>
    <template v-slot:centre>
      <div>服务中心</div>
    </template>
  </NavBar>
  <!-- 问题 -->
  <Problem></Problem>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
//! 引入组件
import NavBar from '../../components/navbar/NavBar.vue'
import Problem from './compt/Problem.vue'
//! 使用路由
const $router = useRouter()
//! 点击返回跳转至个人信息界面
const toBlck = () => {
  $router.push('/takeaway/mine')
}
</script>

<style scoped lang="scss">
</style>
