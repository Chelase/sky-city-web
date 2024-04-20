<script setup>
import { RouterView } from 'vue-router'
import skyMessage from '@/plugins/Message/index.js'
import {ref} from "vue";
// import error from '@/components/DaisyMessage/index.vue'

const num = ref(0)
</script>

<template>
  <RouterView />
  <button class="btn" @click="skyMessage.info('信息：' + ++num)">信息</button>
  <button class="btn btn-success" @click="skyMessage.success('成功：' + ++num)">成功</button>
  <button class="btn btn-warning" @click="skyMessage.warning('警告：' + ++num)">警告</button>
  <button class="btn btn-error" @click="skyMessage.error('危险：' + ++num)">危险</button>
<!--  <error />-->
</template>

<style scoped>

</style>
