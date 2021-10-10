<template>
  <div class="mymssg">
    <div class="mymssg_img">
      <van-image round width="5rem" height="5rem" src>
        <template v-slot:error>
          <div class="img_icon">
            <van-icon name="user-o" />
          </div>
        </template>
      </van-image>
    </div>
    <div class="mymssg_name">
      <div class="name_a">登录/注册</div>
      <div class="name_b">
        <div class="b_icon">
          <van-icon name="graphic" />
        </div>
        <div class="b_text">暂未绑定手机号</div>
      </div>
    </div>
    <div class="mymssg_right">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

