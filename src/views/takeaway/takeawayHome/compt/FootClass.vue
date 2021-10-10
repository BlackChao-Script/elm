<template>
  <div class="footclass">
    <van-swipe class="my-swipe" :loop="false" indicator-color="pink">
      <van-swipe-item>
        <div class="footclass_item">
          <div
            class="item_data"
            v-for="item in data.footClassDataa"
            :key="item.id"
            @click="tocategoryall(item.title)"
          >
            <div class="data_img">
              <img :src="item.image_url" />
            </div>
            <div class="data_title">{{ item.title }}</div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="footclass_item">
          <div
            class="item_data"
            v-for="item in data.footClassDatab"
            :key="item.id"
            @click="tocategoryall(item.title)"
          >
            <div class="data_img">
              <img :src="item.image_url" />
            </div>
            <div class="data_title">{{ item.title }}</div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang='ts'>
//! 引入网络请求
import { onMounted } from '@vue/runtime-core'
import { reactive } from "@vue/reactivity";
import { getFootClassLIst } from '../../../../api/getfootclass'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
//! 使用路由
const $router = useRouter()
//! 使用vuex
const store = useStore()
//! 数据
const data = reactive<any>({
  //! 食品分类数据
  //* 第一页
  footClassDataa: [],
  //* 第二页
  footClassDatab: []
})
//! 获取食品分类数据
const getFooTData = () => {
  getFootClassLIst().then((res) => {
    //* 拼接图片地址
    const arr = res.data
    for (var i = 0; i < arr.length; i++) {
      arr[i].image_url = 'https://fuss10.elemecdn.com/' + arr[i].image_url
    }
    //* 截取数据分两页
    data.footClassDataa = arr.slice(0, 8)
    data.footClassDatab = arr.slice(8)
  })

}
//! 生命周期函数
onMounted(getFooTData)
//! 点击食品分类跳转至全部分类页面
const tocategoryall = (title: any) => {
  store.state.classTitle = title
  $router.push(`/allfoot/${store.state.classTitle}`)
}
</script>
