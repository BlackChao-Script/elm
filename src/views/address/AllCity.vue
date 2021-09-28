<template>
  <div class="title">全部城市</div>
  <div class="allcity" v-for="(value,key,index) in data.allCityData" :key="index">
    <div class="allcity_title">{{ key }}</div>
    <div class="allcity_content">
      <van-grid>
        <van-grid-item v-for="item in value" :key="item.id" :text="item.name" />
      </van-grid>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { getcityList } from '../../api/getcity'
//! 数据
const data = reactive<any>({
  //* 所有城市数据
  allCityData: [],
  //* 城市首字母
  cityKey: []
})
//! 获取所有城市数据
const getAllCityData = () => {
  getcityList('group').then((res: any) => {
    const obj = res.data
    //* 对城市数据进行排序
    //& 排序的函数
    function objKeySort(obj: any) {
      let newkey = Object.keys(obj).sort();
      //& 先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
      //& 创建一个新的对象，用于存放排好序的键值对
      const newObj: any = {};
      //& 遍历newkey数组
      for (var i = 0; i < newkey.length; i++) {
        //& 向新创建的对象中按照排好的顺序依次增加键值对
        newObj[newkey[i]] = obj[newkey[i]];
      }
      //& 返回排好序的新对象
      return newObj;
    }
    //* 函数执行并赋值
    data.allCityData = objKeySort(obj);
  })
}
//! 在生命周期函数中调用
onMounted(getAllCityData)
</script>
