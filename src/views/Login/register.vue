<script setup>
import {ref} from 'vue'
import useUserStore from "@/stores/user.js"
import router from "@/router/index.js";

const userStore = useUserStore()

const FormData = ref({
  name: null,
  email: null,
  password: null
})

async function userRegister (event)  {
  event.preventDefault()
  await userStore.register(FormData.value)
  await router.push('/welcome')
}
</script>

<template>
  <!-- component -->
  <section class="flex flex-col md:flex-row h-screen items-center">

    <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img src="https://source.unsplash.com/random" alt="" class="w-full h-full object-cover">
    </div>

    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

      <div class="w-full h-100">

        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">注册您的账户</h1>

        <form class="mt-6" @submit="userRegister">
          <div>
            <label class="block text-gray-700">账户名称</label>
            <input type="text" name="" v-model="FormData.name" placeholder="输入账户名称" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">邮箱</label>
            <input type="email" name="" v-model="FormData.email" placeholder="输入邮箱" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"  required>
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">密码</label>
            <input type="password" name="" v-model="FormData.password" minlength="6" maxlength="18" placeholder="输入密码" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required>
          </div>

          <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">注册</button>
        </form>

        <p class="mt-8"><router-link to="/login" class="text-blue-500 hover:text-blue-700 font-semibold">返回登录</router-link></p>

      </div>
    </div>

  </section>
</template>

<style scoped>

</style>