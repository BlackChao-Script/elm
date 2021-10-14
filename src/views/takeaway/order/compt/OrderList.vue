<template>
  <div class="orderlist">1</div>
</template>

<script setup lang='ts'>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';

//! 使用vuex
const store = useStore()
//! 数据
const data = reactive<any>({
  //* 订单列表数据
  orderListData: [],
})
onMounted(() => {
  data.orderListData = store.state.FoodsList
  console.log(data.orderListData)
})
</script>

<style scoped lang="scss">
.orderlist {
  margin-top: 50px;
}
</style>
