<script setup>
import {ref} from 'vue'
import useUserStore from "@/stores/user.js"
import {useRoute} from "vue-router"
import router from "@/router/index.js"
import {ElMessage} from "element-plus"

const userStore = useUserStore()
const route = useRoute()
const redirect = ref(route.query.redirect?.toString() ?? '/hall')
const LoginOrRegister = ref(true)
const confirmPassword = ref('')

const FormData = ref({
  name: '',
  password: ''
})

async function userLogin(event) {
  event.preventDefault()
  if (FormData.value.email) {
    delete FormData.value.email
  }
  await userStore.Login(FormData.value)
  ElMessage.success('登录成功')
  await router.push(redirect.value)
}

async function userRegister(event) {
  event.preventDefault()
  await userStore.register(FormData.value)
  ElMessage.success('注册成功')
  LoginOrRegister.value = true
}
</script>

<template>
  <div class="w-screen h-screen backdrop-blur-md fixed top-0" style="background: rgba(0,0,0,.5)">
    <!-- form表单 -->
    <div class="container absolute top-0 right-0 left-0 bottom-0 m-auto">
      <div class="w-full flex-center flex-col my-32">
        <div class="
          bg-[url('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')]
          bg-cover
          bg-center
          w-32
          h-32
        "></div>
        <div class="login-form">
          <transition name="right">
            <form v-if="LoginOrRegister" class="mt-6" @submit="userLogin">
              <div>
                <input
                    type="text"
                    name=""
                    v-model="FormData.name"
                    placeholder="请输入昵称或邮箱"
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
                    placeholder="请输入密码"
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
              <p @click="LoginOrRegister = false">去注册</p>
            </form>
          </transition>
          <transition name="left">
            <form v-if="!LoginOrRegister" class="mt-6" @submit="userRegister">
              <div>
                <input
                    type="text"
                    name="name"
                    v-model="FormData.name"
                    placeholder="请输入昵称"
                    class="w-full px-4 py-2 rounded-lg mt-2 border focus:border-blue-500 focus:outline-none"
                    autofocus autocomplete required>
              </div>

              <div class="mt-4">
                <input
                    type="email"
                    name="email"
                    v-model="FormData.email"
                    placeholder="请输入邮箱"
                    class="w-full px-4 py-2 rounded-lg mt-2 border focus:border-blue-500
                focus:outline-none"
                    required>
              </div>

              <div class="mt-4">
                <input
                    type="password"
                    name="password"
                    v-model="FormData.password"
                    minlength="6"
                    maxlength="18"
                    placeholder="请输入密码"
                    class="w-full px-4 py-2 rounded-lg mt-2 border focus:border-blue-500
                focus:outline-none"
                    required>
              </div>

              <div class="mt-4">
                <input
                    type="password"
                    name="confirmPassword"
                    v-model="confirmPassword"
                    minlength="6"
                    maxlength="18"
                    placeholder="请确认密码"
                    class="w-full px-4 py-2 rounded-lg mt-2 border focus:border-blue-500
                focus:outline-none"
                    :pattern="FormData.password"
                    title="密码不一致"
                    required>
              </div>

              <button
                  type="submit"
                  class="w-full text-white font-semibold rounded-lg px-4 py-2 mt-6 border"
              >
                注册
              </button>
              <p @click="LoginOrRegister = true">去登录</p>
            </form>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  width: 300px;
  color: white;
  background: rgba(0, 0, 0, .5);
}
.login-form {
  width: 300px;
  position: relative;

  p {
    cursor: pointer;
    text-align: right;
    margin-top: 20px;
    color: white;
  }
}

.right-enter-active, .right-leave-active {
  transition: all .5s;
}
.right-enter-from {
  position: absolute;
  right: -999px;
}
.right-enter-to {
  position: absolute;
  right: 0;
}
.right-leave-from {
  position: absolute;
  right: 0;
}
.right-leave-to {
  position: absolute;
  right: -999px;
}

.left-enter-active, .left-leave-active {
  transition: all .5s;
}
.left-enter-from {
  position: absolute;
  left: -999px;
}
.left-enter-to {
  position: absolute;
  left: 0;
}
.left-leave-from {
  position: absolute;
  left: 0;
}
.left-leave-to {
  position: absolute;
  left: -999px;
}
</style>