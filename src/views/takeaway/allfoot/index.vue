<template>
  <!-- nav -->
  <NavBarVue>
    <template v-slot:left>
      <div @click="totakeawayHome">
        <van-icon name="arrow-left" :size="20" />
      </div>
    </template>
    <template v-slot:centre>
      <div>{{ store.state.classTitle }}</div>
    </template>
  </NavBarVue>
  <!-- 下拉分类选择器加商品列表 -->
  <TreeSelect></TreeSelect>
</template>

<script setup lang='ts'>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
//!引入组件
import NavBarVue from "../../../components/navbar/NavBar.vue";
import TreeSelect from './compt/TreeSelect.vue'
//! 使用路由
const $router = useRouter()
//! 使用vuex
const store = useStore()
//! 数据
const data = reactive<any>({
})
//! 生命周期函数
onMounted(() => {
})
//! 点击返回回到takeawayHome页面
const totakeawayHome = () => {
  $router.push('/takeaway/takeawayHome')
}

</script>

<style scoped lang="scss">
</style>
