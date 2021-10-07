<template>
  <!-- nav -->
  <NavBar>
    <template v-slot:left>
      <div @click="toAddress">
        <van-icon name="arrow-left" :size="20" />
      </div>
    </template>
    <template v-slot:centre>
      <div>密码登录</div>
    </template>
  </NavBar>
  <!-- 登录|注册表单 -->
  <div class="from">
    <van-form @submit="onSubmit">
      <!-- 用户名 -->
      <van-cell-group inset>
        <van-field
          v-model="data.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <!-- 密码 -->
        <van-field
          v-model="data.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <!-- 验证码 -->
        <div class="from_VerificationCode">
          <div class="VerificationCode_a">
            <van-field
              v-model="data.VerificationCode"
              name="验证码"
              label="验证码"
              placeholder="验证码"
              :rules="[{ required: true, message: '请填写验证码' }]"
            />
          </div>
          <div class="VerificationCode_b">
            <div class="b_img"></div>
            <van-image width="4rem" height="4rem" fit="contain" :src="data.VerificationCodeImg" />
            <div class="b_btn" @click="replaceVIC">
              <div>看不请</div>
              <div class="btn_color">换一张</div>
            </div>
          </div>
        </div>
      </van-cell-group>
      <div class="tips">
        <div>温馨提示：未注册过的账号，登录时将自动注册</div>
        <div class="tips_b">注册过的用户可凭账号密码登录</div>
      </div>
      <div style="margin: 16px;">
        <van-button round block color="pink" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
//! 引入组件
import NavBar from '../components/navbar/NavBar.vue'
//! 引入网络请求方法
import { getVerificationCode, login } from '../api/login'
import { useRouter } from "vue-router";
//! 使用路由
const $router = useRouter()
//!数据
const data = reactive<any>({
  //* 用户名
  username: '',
  //* 密码
  password: '',
  //* 验证码
  VerificationCode: '',
  //* 验证码图片
  VerificationCodeImg: ''
})
//! 获取验证码
const getVerificationCodeData = () => {
  getVerificationCode().then((res: any) => {
    console.log(res)
    data.VerificationCodeImg = res.data.code
  })
}
//! 生命周期函数
onMounted(getVerificationCodeData)
//! 点击更换验证码时触发
const replaceVIC = () => {
  getVerificationCodeData()
}
//! 提交表单时触发
const onSubmit = (values: any) => {
  console.log(data.VerificationCode)
  if (!values) return
  login(data.username, data.password, data.VerificationCode).then((res: any) => {
    console.log(res)
  })

}
//! 点击返回时触发
const toAddress = () => {
  $router.push('/address')
}
</script>

<style scoped lang="scss">
.from {
  margin-top: 60px;
  .from_VerificationCode {
    display: flex;
    .VerificationCode_a {
      width: 60%;
    }
    .VerificationCode_b {
      width: 40%;
      display: flex;
      align-items: center;
      .b_btn {
        margin-left: 15px;
        font-size: 15px;
        .btn_color {
          color: pink;
        }
      }
    }
  }
  .tips {
    color: pink;
    font-size: 15px;
    padding: 10px;
    .tips_b {
      margin-top: 10px;
    }
  }
}
</style>
