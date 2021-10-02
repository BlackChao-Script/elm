<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:centre>
      <div>我的</div>
    </template>
  </NavBar>
</template>

<script setup lang='ts'>
//! 引入组件
import { useRouter } from 'vue-router';
import NavBar from '../../../components/navbar/NavBar.vue'
//! 使用路由
const $router = useRouter()
</script>

<style scoped lang="scss">
</style>
