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

<style scoped lang="scss">
.Mybalance_a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .a_top {
    display: flex;
    .top_left {
      width: 70%;
      color: #ff9900;
      font-weight: 700;
      font-size: 25px;
    }
    .top_right {
      width: 30%;
      margin-top: 5px;
      margin-left: 5px;
    }
  }
  .a_btm {
    margin-top: 5px;
    font-size: 13px;
    color: #666666;
  }
}
.red {
  color: #ff5f3e !important;
}
.green {
  color: #6ac289 !important;
}
</style>
