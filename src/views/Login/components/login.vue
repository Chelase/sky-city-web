<script setup>
import {ref} from 'vue'
import useUserStore from "@/stores/user.js"
import {useRoute} from "vue-router"
import router from "@/router/index.js"

const userStore = useUserStore()
const route = useRoute()
const redirect = ref(route.query.redirect?.toString() ?? '/')

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
  <!-- component -->
  <div style="animation: ReadyToSignIn">
    <div class="w-screen h-screen fixed top-0 backdrop-blur-md" style="background: rgba(0,0,0,.5)"></div>
    <div class="container absolute top-0 right-0 left-0 bottom-0 m-auto border">
      <div class="w-full flex-center flex-col my-32" style="border: 1px solid red">
        <el-avatar :size="100" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        <form class="mt-6" style="border: 1px black solid" @submit="userRegister">
          <div>
            <input type="text" name="" v-model="FormData.name" placeholder="输入账户名称" style="width: 300px" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:outline-none" autofocus autocomplete required>
          </div>

          <div class="mt-4">
            <input type="email" name="" v-model="FormData.email" placeholder="输入邮箱" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500
                focus:outline-none"  required>
          </div>

          <div class="mt-4">
            <input type="password" name="" v-model="FormData.password" minlength="6" maxlength="18" placeholder="输入密码" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500
                focus:outline-none" required>
          </div>

          <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">注册</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes ReadyToSignIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>