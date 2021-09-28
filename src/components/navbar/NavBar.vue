<template>
  <div class="nav">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="centre">
      <slot name="centre"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.nav {
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-size: 15px;
  .left {
    width: 20%;
  }
  .centre {
    width: 60%;
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行
  }
  .right {
    width: 20%;
  }
}
</style>
