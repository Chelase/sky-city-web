<script setup>
import { RouterView } from 'vue-router'
import Message from '@/plugins/Message/index.js'
import {ref} from "vue";
// import error from '@/components/DaisyMessage/index.vue'

const num = ref(0)
</script>

<template>
  <RouterView />
  <button class="btn" @click="Message.info('信息：' + ++num)">信息</button>
  <button class="btn btn-success" @click="Message.success('成功：' + ++num)">成功</button>
  <button class="btn btn-warning" @click="Message.warning('警告：' + ++num)">警告</button>
  <button class="btn btn-error" @click="Message.error('危险：' + ++num)">危险</button>
<!--  <error />-->
</template>

<style scoped>

</style>
