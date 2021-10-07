<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:centre>
      <div>我的</div>
    </template>
  </NavBar>
  <!-- 个人信息 -->
  <Mymssg></Mymssg>
  <!-- 个人福利与余额 -->
  <MyBalance></MyBalance>
  <!-- 分割 -->
  <div class="division"></div>
  <!-- 个人单元格 -->
  <Mycell></Mycell>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
//! 引入组件
import NavBar from '../../../components/navbar/NavBar.vue'
import Mymssg from './compt/Mymssg.vue'
import MyBalance from './compt/MyBalance.vue'
import Mycell from './compt/Mycell.vue'
//! 使用路由
const $router = useRouter()
</script>

<style scoped lang="scss">
.division {
  width: 100%;
  height: 10px;
  background-color: #f5f5f5;
}
</style>
