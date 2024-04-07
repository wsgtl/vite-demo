<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const items=reactive([
  {name:'首页',url:'/index',icon:Document},
  {name:'订单管理',url:'/order',icon:Document},
  {name:'统计分析',url:'/census',icon:Document},
])
</script>

<template>
  <el-aside width="200px" class="aside"> 
     <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        router
      >
      <el-menu-item :index="v.url" v-for="v in items" :key='v.url'>
          <el-icon><icon-menu /></el-icon>
          <span>{{v.name}}</span>
        </el-menu-item>
     </el-menu>
     
  </el-aside>
</template>



<style scoped>
</style>