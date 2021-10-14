<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:left></template>
    <template v-slot:centre>
      <div>订单列表</div>
    </template>
  </NavBar>
  <!-- 订单列表 -->
  <OrderList></OrderList>
</template>

<script setup lang='ts'>
//! 引入组件
import NavBar from '../../../components/navbar/NavBar.vue'
import OrderList from './compt/OrderList.vue'
</script>

<style scoped lang="scss">
</style>
