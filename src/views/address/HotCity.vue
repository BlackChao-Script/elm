<template>
  <div class="hotcity">
    <van-divider :style="{ color: 'pink', borderColor: 'pink', padding: '0 16px' }" />
    <div class="hotcity_title">热门城市</div>
    <van-divider :style="{ color: 'pink', borderColor: 'pink', padding: '0 16px' }" />
    <div v-if="data.showcity" class="hotcity_content">
      <van-grid>
        <van-grid-item
          v-for="item in data.HotcityData"
          :key="item.id"
          :text="item.name"
          @click="toAddressDel(item.id)"
        />
      </van-grid>
    </div>
    <div v-else>
      <van-loading color="pink" size="24" vertical>加载中...</van-loading>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
//! 引入网络请求方法
import { getcityList } from '../../api/getcity'
//! 使用路由
const $router = useRouter()
//! 数据类型接口
interface datatype {
  HotcityData: Array<any>,
  showcity: Boolean
}
//! 数据
const data = reactive<datatype>({
  //* 热门城市数据
  HotcityData: [],
  //* 是否显示城市信息
  showcity: false
})
//! 获取热门城市数据
const getHotCityData = () => {
  getcityList('hot').then((res: any) => {
    data.HotcityData = res.data
    //* 显示城市信息
    data.showcity = true
  })
}
//! 点击城市跳转方法
const toAddressDel = (id: any) => {
  $router.push('/addressDel/' + id)
}
//! 生命周期函数
onMounted(getHotCityData)
</script>
