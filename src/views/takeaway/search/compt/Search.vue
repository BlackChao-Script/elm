<template>
  <div class="search">
    <van-search
      v-model="data.searchData"
      show-action
      placeholder="请输入商家或美食名称"
      @search="onSearch"
      @clear="remData"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
  <van-divider :style="{ color: 'pink', borderColor: 'pink' }"></van-divider>
  <!-- 搜索记录 -->
  <div v-if="data.showrecords" class="search_records">
    <div class="records_title">搜索历史</div>
    <div class="records_box">
      <div class="box_content" v-for="(item,index) in data.searchRecordsData" :key="index">
        <div class="content_text" @click="getSearchData(item)">{{ item }}</div>
        <div class="content_icon" @click="remSearchData(item)">
          <van-icon name="cross" />
        </div>
      </div>
    </div>
  </div>
  <!-- 商家 -->
  <div v-else-if="!data.showrecords" class="search_shopping">
    <div class="shopping_title">商家</div>
    <div
      class="shopping_box"
      v-for="(item,index) in data.searchShoppingData"
      :key="index"
      @click="toShoppingDet(item.id)"
    >
      <div class="box_img">
        <img :src="item.image_url" />
      </div>
      <div class="box_text">
        <div class="text_name">
          <div class="name_title">{{ item.name }}</div>
          <div class="name_icon">
            <van-tag type="warning">支付</van-tag>
          </div>
        </div>
        <div class="text_b">月售 {{ item.recent_order_num }} 单</div>
        <div class="text_c">20 元起送 / 距离{{ item.distance }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from '@vue/reactivity';
import { useRouter } from 'vue-router';
//! 引入网络请求方法
import { useStore } from 'vuex'
import { searchShopping } from '../../../../api/searchshopp'
//! 使用vuex
const store = useStore()
//! 使用路由
const $router = useRouter()
//! 数据
const data = reactive<any>({
  //* 要搜索的值
  searchData: '',
  //* 搜索到的数据
  searchShoppingData: [],
  //* 搜索过的数据记录
  searchRecordsData: [],
  //* 是否展示记录
  showrecords: true,
})
//! 确定搜索时的方法
const onSearch = () => {
  searchShopping(store.state.geohashDataStr, data.searchData).then((res) => {
    //* 拼接图片地址
    const arr = res.data
    for (let i = 0; i < arr.length; i++) {
      arr[i].image_url = 'https://elm.cangdu.org/img/' + arr[i].image_path
    }
    data.searchShoppingData = arr
  })
  const arr2 = []
  arr2.push(data.searchData)
  data.searchRecordsData = arr2.filter((element: any, index: any, self: any) => {
    return self.indexOf(element) == index
  })
  //* 展示数据
  data.showrecords = !data.showrecords
}
//! 点击清除搜索时的方法
const remData = () => {
  //* 显示搜索记录
  data.showrecords = !data.showrecords
}
//! 点击搜索记录数据时的方法
const getSearchData = (item: any) => {
  //* 把点击的数据赋值给要搜索的值
  data.searchData = item
  onSearch()
}
//! 点击删除图标时的方法
const remSearchData = (item: any) => {
  data.searchRecordsData.pop(item)
}
//! 点击店铺进入店铺详细与分类
const toShoppingDet = (id: Number) => {
  $router.push(`/shoppingdet/${id}`)
}
</script>
