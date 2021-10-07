<template>
  <!-- 附近商家 -->
  <div class="shopping">
    <div class="ShoppingList_title">
      <div clas="title_icon">
        <van-icon name="shop-o" />
      </div>
      <div class="title_text">附近商家</div>
    </div>
    <!-- 店铺列表 -->
    <div
      v-if="data.showshopping"
      class="shoppinglist_list"
      v-for="item in data.shoppingList"
      :key="item.id"
    >
      <div class="list_img">
        <img :src="item.image_url" />
      </div>
      <div class="list_title">
        <div class="title_a">
          <div class="a_icon">
            <van-tag type="warning">品牌</van-tag>
          </div>
          <div class="a_title">{{ item.name }}</div>
        </div>
        <div class="title_b">
          <div class="b_rate">
            <van-rate
              v-model="item.rating"
              readonly
              allow-half
              :size="6"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            ></van-rate>
          </div>
          <div class="b_text">
            <div class="text_a">{{ item.rating }}</div>
            <div class="text_b">月销{{ item.recent_order_num }}单</div>
          </div>
        </div>
        <div class="title_c">20￥起送/{{ item.piecewise_agent_fee.tips }}</div>
      </div>
      <div class="list_text">
        <div class="text_a">
          <van-tag color="#ccc" plain>保准票</van-tag>
        </div>
        <div class="text_b">
          <van-tag color="#57A9FF">{{ item.delivery_mode.text }}</van-tag>
          <van-tag color="#ffc0cb" plain>准时达</van-tag>
        </div>
        <div class="text_c">
          <span>{{ item.distance }}</span> /
          <span class="c_color">{{ item.order_lead_time }}</span>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="loging">
        <van-loading color="pink" size="35" vertical>加载中...</van-loading>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
//! 引入网络请求
import { getShoppingList } from '../../../../api/getshoppinglist'
//! 使用vuex
const store = useStore()
//! 数据
const data = reactive<any>({
  //* 城市的经纬度
  geohashData: '',
  //* 店铺列表信息
  shoppingList: [],
  //* 是否展示商家列表
  showshopping: false
})
//! 生命周期函数
onMounted(() => {
  //* 通过vuex拿到数据
  data.geohashData = store.state.geohashData
  //* 请求店铺列表信息
  getShoppingList(data.geohashData[0], data.geohashData[1]).then((res: any) => {
    //* 拼接图片地址
    const arr = res.data
    for (var i = 0; i < arr.length; i++) {
      arr[i].image_url = 'https://elm.cangdu.org/img/' + arr[i].image_path
    }
    data.shoppingList = arr
    //* 展示商家列表
    data.showshopping = true
  })
})
</script>