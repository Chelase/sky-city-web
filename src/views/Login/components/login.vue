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
  <div class="w-screen h-screen absolute top-0 blur" style="background: rgba(0,0,0,.5)">

  </div>
</template>

<style scoped>

</style>