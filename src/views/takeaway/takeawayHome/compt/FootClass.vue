<template>
  <div class="footclass">
    <van-swipe class="my-swipe" :loop="false" indicator-color="pink">
      <van-swipe-item>
        <div class="footclass_item">
          <div class="item_data" v-for="item in data.footClassDataa" :key="item.id">
            <div class="data_img">
              <img :src="item.image_url" />
            </div>
            <div class="data_title">{{ item.title }}</div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="footclass_item">
          <div class="item_data" v-for="item in data.footClassDatab" :key="item.id">
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
</script>

<style scoped lang="scss">
.footclass {
  margin-top: 50px;
  .my-swipe .van-swipe-item {
    font-size: 20px;
    height: 200px;
    text-align: center;
    .footclass_item {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      .item_data {
        width: 25%;
        height: 100%;
        margin-top: 15px;
        .data_img {
          img {
            width: 50%;
          }
        }
        .data_title {
          font-size: 15px;
          color: #ccc;
        }
      }
    }
  }
}
</style>
