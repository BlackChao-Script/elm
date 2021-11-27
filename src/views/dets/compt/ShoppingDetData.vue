<template>
  <div class="activity">
    <div class="activity_title">活动与属性</div>
    <!-- 折叠面板 -->
    <div class="active_a">
      <van-collapse v-model="data.activeName" accordion>
        <van-collapse-item
          v-for="item in data.shoopingDelDatas.supports"
          :key="item.id"
          :title="item.name"
          :name="item.id"
        >
          <span>
            <van-tag type="success">{{ item.icon_name }}</van-tag>
          </span>
          <span class="a_text">{{ item.description }}</span>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="divider"></div>
    <!-- 商家信息 -->
    <div class="activity_title">商家信息</div>
    <div class="active_a">
      <van-collapse v-model="data.activeNameb" accordion>
        <van-collapse-item title="商家名称" :name="1">{{ data.shoopingDelDatas.name }}</van-collapse-item>
        <van-collapse-item title="地址" :name="2">{{ data.shoopingDelDatas.address }}</van-collapse-item>
        <van-collapse-item title="营业时间" :name="3">{{ data.shoopingDelDatas.opening_hours[0] }}</van-collapse-item>
        <van-collapse-item title="手机" :name="4">{{ data.shoopingDelDatas.phone }}</van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
//! 定义接口
interface IDatatype {
  shoopingDelDatas: any,
  activeName: string[],
  activeNameb: string[]
}
//! 使用vuex
const store = useStore()
//! 数据
const data = reactive<IDatatype>({
  //* 店铺详细数据
  shoopingDelDatas: [],
  //* 展开的折叠面板1
  activeName: ['7'],
  //* 展开的折叠面板2
  activeNameb: ['1']
})
//! 生命周期函数
onMounted(() => {
  data.shoopingDelDatas = store.state.shoopingDelData
})
</script>

