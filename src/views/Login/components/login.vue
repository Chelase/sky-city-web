<script setup>
import {ref} from 'vue'
import useUserStore from "@/stores/user.js"
import {useRoute} from "vue-router"
import router from "@/router/index.js"

const userStore = useUserStore()
const route = useRoute()
const redirect = ref(route.query.redirect?.toString() ?? '/')
const props = defineProps({
  is2Login: {
    type: Boolean,
    default: false
  }
})

const FormData = ref({
  name: '',
  password: ''
})

async function userLogin (event)  {
  event.preventDefault()
  await userStore.Login(FormData.value)
  await router.push(redirect.value)
}
</script>

<template>
  <!-- 遮罩 -->
  <div class="w-screen h-screen fixed top-0 backdrop-blur-md" style="background: rgba(0,0,0,.5)"
       :class="{'block-login': props.is2Login,'none-login': !props.is2Login}
  "></div>
  <!-- form表单 -->
  <div class="container absolute top-0 right-0 left-0 bottom-0 m-auto"
       :class="{'block-login': props.is2Login,'none-login': !props.is2Login}
  ">
    <div class="w-full flex-center flex-col my-32" style="border: 1px solid red">
      <el-image class="w-28" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
      <form class="mt-6" style="border: 1px black solid" @submit="userLogin">
        <div>
          <input
              type="text"
              name=""
              v-model="FormData.name"
              placeholder="输入账户名称"
              class="w-full px-4 py-2 rounded-lg mt-2 border focus:border-blue-500 focus:outline-none"
              autofocus autocomplete required>
        </div>

        <div class="mt-4">
          <input
              type="password"
              name=""
              v-model="FormData.password"
              minlength="6"
              maxlength="18"
              placeholder="输入密码"
              class="w-full px-4 py-2 rounded-lg mt-2 border focus:border-blue-500
                focus:outline-none"
              required>
        </div>

        <button
            type="submit"
            class="w-full text-white font-semibold rounded-lg px-4 py-2 mt-6 border"
        >
          登录
        </button>
      </form>
    </div>
  </div >
</template>

<style scoped>
.block-login {
  animation: ReadyToSignIn .5s;
}
@keyframes ReadyToSignIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.none-login {

}
@keyframes CancelTheLogin {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

input {
  width: 300px;
  background: rgba(0,0,0,.5);
}
</style>