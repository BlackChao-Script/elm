<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:left>
      <div @click="toAddress">
        <van-icon name="arrow-left" />
      </div>
    </template>
    <template v-slot:centre>{{ data.citydata.name }}</template>
    <template v-slot:right>
      <div @click="toAddress">切换城市</div>
    </template>
  </NavBar>
  <!-- 搜索 -->
  <SearchAdd :id="data.id"></SearchAdd>
</template>

<script setup lang='ts'>
import { reactive } from '@vue/reactivity';
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
//! 引入组件
import NavBar from '../../components/navbar/NavBar.vue'
import SearchAdd from './SearchAdd.vue'
//! 引入网络请求方法
import { getcityDel } from '../../api/getcity'
//! 使用路由
const $route = useRoute()
const $router = useRouter()
//! 数据
const data = reactive<any>({
  //* 跳转页面携带的城市id
  id: 0,
  //* 城市数据
  citydata: []
})
//! 根据id获取城市信息
const getCityData = () => {
  getcityDel(data.id).then((res: any) => {

    data.citydata = res.data
  })
}
//! 点击跳转address页面
const toAddress = () => {
  $router.push('/address')
}
//! 生命周期函数
onMounted(() => {
  //* 保存跳转页面的城市id
  data.id = $route.params.id
  //* 调用网络请求方法
  getCityData()
})
</script>
