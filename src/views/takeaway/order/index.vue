<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:left></template>
    <template v-slot:centre>
      <div>订单列表</div>
    </template>
  </NavBar>
</template>

<script setup lang='ts'>
//! 引入组件
import NavBar from '../../../components/navbar/NavBar.vue'
</script>

<style scoped lang="scss">
</style>
