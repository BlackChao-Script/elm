<template></template>

<script setup lang='ts'>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
//! 引入网络请求方法
import { getServicesData } from '../../../api/getServices'
//! 数据
const data = reactive<any>({
  //* 问题数据
  problemData: []
})
//! 获取问题数据
const getServicesDatas = () => {
  getServicesData().then((res) => {
  })
}
//! 生命周期函数
onMounted(getServicesDatas)
</script>

<style scoped lang="scss">
</style>
