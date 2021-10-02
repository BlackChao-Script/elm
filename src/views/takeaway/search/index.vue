<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:centre>
      <div>搜索</div>
    </template>
  </NavBar>
  <!-- 搜索框 -->
  <Search></Search>
</template>

<script setup lang='ts'>

//! 引入组件
import NavBar from '../../../components/navbar/NavBar.vue'
import Search from './compt/Search.vue'


</script>

<style scoped lang="scss">
</style>
