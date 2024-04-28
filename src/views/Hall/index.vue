<script setup>
import { ref, onMounted } from 'vue'
import MessageApi from '@/api/modules/Message.js'
import { HubConnectionBuilder } from '@microsoft/signalr'
import useUserStore from "@/stores/user.js"
import {storeToRefs} from "pinia"

const userStore = useUserStore()
const { UserId, UserName } = storeToRefs(userStore)
const data = ref({
  userId: UserId,
  userName: UserName,
  msg: ''
})

// onMounted(() => console.log('Msg：',getMsg()))

const MsgList = ref([])

const connection = new HubConnectionBuilder()
    .withUrl('https://localhost:7139/MessageHub')
    .build();

connection.start()
    .then(() => {
      console.log('SignalR Connected');
    })
    .catch(err => console.error(err));

connection.on('ReceiveMessage', message => {
  console.log('Received message:', message);
  message.sendTime = message.sendTime.replace('T',' ')
  MsgList.value.push(message)
});

// const getMsg = async () => {
//   const { list } = await MessageApi.getMessage()
//   MsgList.value = list
// }

async function sendMsg () {
  if (data.value.msg) {
    await MessageApi.AddMessage(data.value)
    data.value.msg = ''
  }
}
</script>

<template>
  <div>
    <input
        v-model="data.msg"
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
  <div class="chat" :class="userStore.UserId != item.userId ? 'chat-start' : 'chat-end'" v-for="item in MsgList" :key="item.id">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component"
             src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
      </div>
    </div>
    <div class="chat-header">
      {{item.userName}}
      <time class="text-xs opacity-50">{{item.sendTime}}</time>
    </div>
    <div class="chat-bubble" :class="userStore.UserId != item.userId ? 'chat-bubble-info' : ''">{{item.msg}}</div>
  </div>
</template>

<style scoped>

</style>