<script setup>
import router from "@/router/index.js";
import { ref, onBeforeUnmount } from 'vue'
import Login from './components/login.vue'


const time = ref('') // 时间
const date_time = ref('') //日期
const is2Login = ref(false) // 控制login组件
let timingClose = null

document.onmousedown = () => {
  toLogin()
}

document.onkeydown = function(event){
  if (event.key === 'Enter')
    toLogin()
  else if (event.key === 'Escape' && is2Login.value) {
    is2Login.value = false
    clearTimeout(timingClose)
  }
}

// 准备登录
function toLogin() {
  clearTimeout(timingClose)
  is2Login.value = true
  timingClose = setTimeout(() => {
    is2Login.value = false
  },30000)
}

// 获取时间
function getNowTime() {

  const date = new Date(),
      obj = {
        month: date.getMonth() + 1, //获取当前月份(0-11,0代表1月)
        strDate: date.getDate(), // 获取当前日(1-31)
        week: '星期' + '日一二三四五六'.charAt(date.getDay()), //获取当前星期几(0 ~ 6,0代表星期天)
        hour: date.getHours(), //获取当前小时(0 ~ 23)
        minute: date.getMinutes(), //获取当前分钟(0 ~ 59)
      }

  time.value = `${obj.hour}:${obj.minute < 10 ? '0'+obj.minute : obj.minute}`
  date_time.value = `${obj.month}月${obj.strDate}日 ${obj.week}`
}

// 定时每秒获取
const timingDate = setInterval(() => {
  getNowTime()
},1000)

// 离开页面时销毁定时器
onBeforeUnmount(() => {
  clearInterval(timingDate)
  document.onmousedown = null
  document.onkeydown = null
})

</script>

<template>
  <div class="
      bg-[url('https://bing.img.run/1920x1080.php')]
      bg-cover
      bg-center
      w-screen
      h-screen
      flex-center">
    <transition name="top">
      <div class="container h-full text-center" v-show="!is2Login">
        <div class="w-auto h-auto mt-24">
          <strong class="text-8xl">{{time}}</strong> <br>
          <strong class="text-base mt-1.5">{{date_time}}</strong>
        </div>
        <div class="w-auto h-auto mt-36">
          <div class="bg-black w-10 h-10 m-auto flex-center">
            <img class="w-8 h-8 m-auto" src="@/assets/images/login/地球.png" alt="">
          </div>
          <strong>欢迎来到天空之城</strong>
        </div>
      </div>
    </transition>
  </div>

  <transition>
    <Login v-if="is2Login" />
  </transition>

</template>

<style lang="postcss" scoped>
.container {
  color: white;
}

.v-enter-active,.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,.v-leave-to {
  opacity: 0;
}

.top-enter-active, .top-leave-active {
  transition: all .5s;
}
.top-enter-from {
  position: fixed;
  top: -999px;
}
.top-enter-to {
  position: fixed;
  top: 0;
}
.top-leave-from {
  position: fixed;
  top: 0;
}
.top-leave-to {
  position: fixed;
  top: -999px;
}
</style>