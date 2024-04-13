<script setup>
import { RouterView } from 'vue-router'
import Message from '@/plugins/Message/index.js'
import {ref} from "vue";
// import error from '@/components/DaisyMessage/index.vue'

const num = ref(0)
</script>

<template>
  <RouterView />
  <button class="btn" @click="Message.info('测试：' + ++num)">测试</button>
  <button class="btn btn-success" @click="Message.success('测试：' + ++num)">测试</button>
  <button class="btn btn-warning" @click="Message.warning('测试：' + ++num)">测试</button>
  <button class="btn btn-error" @click="Message.error('测试：' + ++num)">测试</button>
<!--  <error />-->
</template>

<style scoped>

</style>
