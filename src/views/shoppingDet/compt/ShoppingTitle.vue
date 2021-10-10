<template>
  <!-- 骨架屏 -->
  <van-skeleton title avatar :row="2" :loading="data.loading">
    <div class="shoppingtitle">
      <div class="shoppingtitle_img">
        <van-image width="5rem" height="5rem" :src="data.ShoppingDetailedData.image_path" />
      </div>
      <div class="shoppingtitle_text">
        <div class="text_name">{{ data.ShoppingDetailedData.name }}</div>
        <div class="text_a">商家配送 / 分钟送达 / 配送费￥{{ data.ShoppingDetailedData.float_delivery_fee }}</div>
        <div class="text_b">{{ data.ShoppingDetailedData.promotion_info }}</div>
      </div>
      <div @click="toshoppingdels" class="shoppingtitle_right">
        <van-icon name="arrow" />
      </div>
      <div @click="toTakeawayHome" class="goleft">
        <van-icon name="arrow-left" />
      </div>
    </div>
  </van-skeleton>
</template>

<script setup lang='ts'>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

//! 引入网络请求方法
import { getShoppingDetailedData } from '../../../api/getshoppinglist'
//! 使用路由
const $route = useRoute()
const $router = useRouter()
//! 使用vuex
const store = useStore()
//! 数据
const data = reactive<any>({
  //* 骨架屏幕是否显示
  loading: true,
  //* 店铺详细
  ShoppingDetailedData: []
})
//! 获取店铺详细数据
const getShoppingDetailed = () => {
  const id = $route.params.id
  getShoppingDetailedData(id).then((res: any) => {
    //* 拼接图片地址
    const arr = res.data
    arr.image_path = 'https://elm.cangdu.org/img/' + arr.image_path
    data.ShoppingDetailedData = arr
    store.state.shoopingDelData = arr
    //* 显示骨架屏
    data.loading = false
  })
}
//! 生命周期函数
onMounted(getShoppingDetailed)
//! 点击跳转至店铺详细页面
const toshoppingdels = () => {
  $router.push('/dets')
}
//! 点击返回值TakeawayHome页面
const toTakeawayHome = () => {
  $router.go(-1)
}
</script>

