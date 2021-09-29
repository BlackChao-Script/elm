<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:left>
      <div>
        <van-icon name="search" />
      </div>
    </template>
    <template v-slot:centre>
      <div @click="toaddressDel">{{ data.addressData }}</div>
    </template>
    <template v-slot:right>
      <div>登录|注册</div>
    </template>
  </NavBar>
  <!-- 路由占位符 -->
  <router-view></router-view>
  <!-- 底部导航栏 -->
  <TabBar></TabBar>
</template>

<script setup lang='ts'>import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
//! 引入组件
import NavBar from '../../components/navbar/NavBar.vue'
import TabBar from './TabBar.vue'
//! 使用路由
const $router = useRouter()
//! 使用vuex
const store = useStore()
//! 数据
const data = reactive<any>({
  //! 城市的经纬度
  geohashData: '',
  //! 城市的地址
  addressData: '',
})
//! 生命周期函数
onMounted(() => {
  //! 通过vuex拿到数据
  data.geohashData = store.state.geohashData
  data.addressData = store.state.addressData

})
//! 点击跳转到地址页面
const toaddressDel = () => {
  $router.push('/address')
}
</script>

<style scoped lang="scss">
</style>
