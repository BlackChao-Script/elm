<template>
  <!-- 搜索框 -->
  <div class="search">
    <van-search
      v-model="data.searchData"
      show-action
      label="地址"
      placeholder="请输入学校、商务楼、地址"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
  <!-- 搜索地址数据展示 -->
  <div class="search_list">
    <van-divider :style="{ color: 'pink', borderColor: 'pink', padding: '0 16px' }" />
    <div
      class="list_data"
      v-for="item in data.searchList"
      :key="item.geohash"
      @click="toTakeawayHome(item.geohash, item.address)"
    >
      <div class="data_title">{{ item.name }}</div>
      <div class="data_address">{{ item.address }}</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
//! 引入网络请求方法
import { SearchAddress } from '../../api/searchAddress'
//! 定义接口
interface IDatatype {
  searchData: string,
  searchList: any[]
}
//! 使用路由
const $router = useRouter()
//! 使用vuex
const store = useStore()
//! 数据
const data = reactive<IDatatype>({
  //* 搜索的值
  searchData: '',
  //* 搜索到的数据
  searchList: [],
})
//! 父组件传递过来的值
const props = defineProps({
  id: Number
})
//! 点击搜索时触发
const onSearch = () => {
  SearchAddress(props.id, data.searchData).then((res) => {
    data.searchList = res.data
  })
}
//! 点击跳转至外卖主页
const toTakeawayHome = (geohash: string, address: string) => {
  //! 把城市经纬度和城市地址保存到vuex中
  store.state.geohashDataStr = geohash
  const geohashs = geohash.split(',')
  store.state.geohashData = geohashs
  store.state.addressData = address
  //* 页面跳转
  $router.push(`/takeaway/takeawayHome`)

}
</script>
