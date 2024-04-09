<script setup>
import { ref, onMounted } from 'vue'
import MessageApi from '@/api/modules/Message.js'

const message = ref('')

onMounted(() => console.log('Msg：',getMsg()))

const MsgList = ref([])
const getMsg = async () => {
  MsgList.value = await MessageApi.getMessage()
}

const sendMsg = async () => {
  if (message.value) {
    await MessageApi.AddMessage(message.value)
    message.value = ''
    // await getMsg()
  }
}
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
    <button class="btn btn-primary" @click="sendMsg()">发送</button>
  </div>
  <div class="chat chat-start" v-for="item in MsgList" :key="item.id">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component"
             src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
      </div>
    </div>
    <div class="chat-header">
      欧比旺·克诺比
      <time class="text-xs opacity-50">{{item.sendTime}}</time>
    </div>
    <div class="chat-bubble">{{item.msg}}</div>
  </div>
<!--  <div class="chat chat-end">-->
<!--    <div class="chat-image avatar">-->
<!--      <div class="w-10 rounded-full">-->
<!--        <img alt="Tailwind CSS chat bubble component"-->
<!--             src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="chat-header">-->
<!--      阿纳金-->
<!--      <time class="text-xs opacity-50">12:46</time>-->
<!--    </div>-->
<!--    <div class="chat-bubble">我恨你！</div>-->
<!--  </div>-->
</template>

<style scoped>

</style>