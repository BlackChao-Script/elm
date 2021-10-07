<template>
  <div class="mycell">
    <van-cell title="我的订单" icon="orders-o" is-link />
    <van-cell title="积分商城" icon="point-gift-o" is-link />
    <van-cell title="elm会员卡" icon="gem-o" is-link />
    <!-- 分割 -->
    <div class="division"></div>
    <van-cell title="服务中心" icon="service-o" is-link />
    <van-cell title="下载 elm App" icon="down" is-link />
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.division {
  width: 100%;
  height: 10px;
  background-color: #f5f5f5;
}
</style>
