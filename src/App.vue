<template>
  <!-- 路由占位符 -->
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

//! 使用路由
const $route = useRoute()
</script>

<style>
</style>
