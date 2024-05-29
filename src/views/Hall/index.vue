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
  // 2024-04-28 11:45:08
  // message.sendTime = message.sendTime.slice(11)
  MsgList.value.push(message)
});

async function sendMessage(message) {
  try {
    await connection.send("SendToAll", message); // 调用 Hub 上的 SendMessage 方法

  } catch (err) {
    return console.error(`Error sending message: ${err.toString()}`);
  }
}

// 创建WebSocket连接:
// const ws = new WebSocket('https://localhost:7139/MessageHub');
// // 连接成功时:
// ws.addEventListener('open', function (event) {
//   console.log('websocket connected.');
//   ws.send({userId: UserId, userName: UserName, msg: '连接成功'});
// });
// // 收到消息时:
// ws.addEventListener('message', function (event) {
//   console.log('message: ' + event.data);
//   // event.data.sendTime = event.data.sendTime.slice(11)
//   MsgList.value.push(event.data)
//   // TODO:
// });
// // 连接关闭时:
// ws.addEventListener('close', function () {
//   console.log('websocket closed.');
// });
// // 绑定到全局变量:
// window.chatWs = ws;

// const getMsg = async () => {
//   const { list } = await MessageApi.getMessage()
//   MsgList.value = list
// }

async function sendMsg () {
  if (data.value.msg) {
    await sendMessage(data.value)
    // await MessageApi.AddMessage(data.value)
    // window.chatWs.send(data.value)
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
    <div class="chat-bubble" :class="userStore.UserId != item.userId ? '' : 'chat-bubble-info'">{{item.msg}}</div>
  </div>
</template>

<style scoped>

</style>