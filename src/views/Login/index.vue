<script setup>
import router from "@/router/index.js";
import { ref, onBeforeUnmount } from 'vue'
import Login from './components/login.vue'

// 时间
const time = ref('')
//日期
const date_time = ref('')

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

const timing = setInterval(() => {
  getNowTime()
},1000)

onBeforeUnmount(() => {
  clearInterval(timing)
})

</script>

<template>
  <div class="
      bg-[url('https://bing.img.run/1920x1080.php')]
      bg-cover
      bg-center
      w-screen
      h-screen
      flex
      justify-center
      items-center">
    <div class="container min-h-full text-center">
      <div class="w-auto h-auto mt-24">
        <strong class="text-8xl">{{time}}</strong> <br>
        <strong class="text-base mt-1.5">{{date_time}}</strong>
      </div>
      <div class="w-auto h-auto mt-36">
        <div class="bg-black w-10 h-10 m-auto flex justify-center items-center">
          <img class="w-8 h-8 m-auto" src="@/assets/images/login/地球.png" alt="">
        </div>
        <strong>请按回车建</strong>
      </div>
    </div>
  </div>

  <Login />
</template>

<style lang="postcss" scoped>
.container {
  color: white;
}
</style>