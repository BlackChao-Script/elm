<template>
  <div class="mycell">
    <van-cell @click="toOrder" title="我的订单" icon="orders-o" is-link />
    <van-cell @click="clickshopp" title="积分商城" icon="point-gift-o" is-link />
    <van-cell @click="clickVip" title="elm会员卡" icon="gem-o" is-link />
    <!-- 分割 -->
    <div class="division"></div>
    <van-cell @click="toServices" title="服务中心" icon="service-o" is-link />
    <van-cell @click="clickDown" title="下载 elm App" icon="down" is-link />
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router";
import { Toast } from 'vant'

//! 使用路由
const $router = useRouter()
//! 点击跳转至订单页面
const toOrder = () => {
  $router.push('/takeaway/order')
}
//! 点击积分商城触发
const clickshopp = () => {
  Toast.fail('由于API原因暂时无法使用积分商城');
}
//! 点击elm会员卡触发
const clickVip = () => {
  Toast.fail('由于API原因暂时无法使用elm会员卡');
}
//! 点击服务中心跳转至服务页面
const toServices = () => {
  $router.push('/services')
}
//! 点击下载app时触发
const clickDown = () => {
  Toast.fail('暂未开发app');
}
</script>
