<template>
  <!-- 路由占位符 -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <!-- 底部导航栏 -->
  <TabBar></TabBar>
</template>

<script setup lang='ts'>
import TabBar from './TabBar.vue'

</script>

<style scoped lang="scss">
</style>

