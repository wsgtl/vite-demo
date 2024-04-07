<script setup lang="ts">
import { ref, reactive } from "vue";
import NavMenu from "./navMenu.vue";
let title = ref("首页");
</script>

<template>

 <div class="common-layout">
    <el-container>
      <NavMenu/>
      <el-container>
        <!-- 头部 -->
        <el-header>Header</el-header>
        <!-- 主体 -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<style scoped>
</style>