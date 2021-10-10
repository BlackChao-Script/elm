<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:left>
      <div @click="toSearchShopping">
        <van-icon name="search" size="20px" />
      </div>
    </template>
    <template v-slot:centre>
      <div @click="toaddressDel">{{ data.addressData }}</div>
    </template>
    <template v-slot:right>
      <div>登录|注册</div>
    </template>
  </NavBar>
  <!-- 食品分类 -->
  <FootClass></FootClass>
  <!-- 分割 -->
  <div class="division"></div>
  <!-- 商铺列表 -->
  <ShoppingList :geohashData="data.geohashData"></ShoppingList>
</template>

<script setup lang='ts'>
import { useStore } from "vuex";
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
//! 引入组件
import NavBar from '../../../components/navbar/NavBar.vue'
import FootClass from './compt/FootClass.vue'
import ShoppingList from './compt/ShoppingList.vue'
//! 使用vuex
const store = useStore()
//! 使用路由
const $router = useRouter()
//! 数据
const data = reactive<any>({
  //* 城市的地址
  addressData: '',
})
//! 生命周期函数
onMounted(() => {
  //* 通过vuex拿到数据
  data.addressData = store.state.addressData

})
//! 点击地址跳转到地址页面
const toaddressDel = () => {
  $router.push('/address')
}
//! 点击搜索图标跳转至搜索页面
const toSearchShopping = () => {
  $router.push('/takeaway/search')
}

</script>
