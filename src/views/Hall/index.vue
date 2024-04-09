<script setup>
import { ref } from 'vue'

const message = ref('')

</script>

<template>
  <div>
    <input
        v-model="message"
        type="text"
        placeholder="请输入"
        class="input
        input-bordered
        input-info
        w-full
        max-w-xs"
    />
    <button class="btn btn-primary">发送</button>
  </div>
  <div class="chat chat-start">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component"
             src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
      </div>
    </div>
    <div class="chat-header">
      欧比旺·克诺比
      <time class="text-xs opacity-50">12:45</time>
    </div>
    <div class="chat-bubble">你是被选中的人！</div>
  </div>
  <div class="chat chat-end">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component"
             src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
      </div>
    </div>
    <div class="chat-header">
      阿纳金
      <time class="text-xs opacity-50">12:46</time>
    </div>
    <div class="chat-bubble">我恨你！</div>
  </div>
</template>

<style scoped>

</style>