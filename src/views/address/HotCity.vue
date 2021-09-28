<template>
  <div class="hotcity">
    <div class="hotcity_title">热门城市</div>
    <div class="hotcity_content">
      <van-grid>
        <van-grid-item v-for="item in data.HotcityData" :key="item.id" :text="item.name" />
      </van-grid>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { getcityList } from '../../api/getcity'
//! 数据类型接口
interface datatype {
  HotcityData: Array<any>
}
//! 数据
const data = reactive<datatype>({
  //* 热门城市数据
  HotcityData: []
})
//! 获取热门城市数据
const getHotCityData = () => {
  getcityList('hot').then((res: any) => {
    data.HotcityData = res.data
  })
}
onMounted(getHotCityData)
</script>
