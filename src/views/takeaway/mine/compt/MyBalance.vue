<template>
  <div class="Mybalance">
    <van-grid :column-num="3">
      <van-grid-item>
        <div class="Mybalance_a">
          <div class="a_top">
            <div class="top_left">0.00</div>
            <div class="top_right">元</div>
          </div>
          <div class="a_btm">我的余额</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="Mybalance_a">
          <div class="a_top">
            <div class="top_left red">0</div>
            <div class="top_right">个</div>
          </div>
          <div class="a_btm">我的优惠</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="Mybalance_a">
          <div class="a_top">
            <div class="top_left green">0</div>
            <div class="top_right">分</div>
          </div>
          <div class="a_btm">我的积分</div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup lang='ts'>

</script>

