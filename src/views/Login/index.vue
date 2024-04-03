<script setup>

</script>

<template>
  <div class="
      bg-[url('@/assets/image/3d_people_car.webp')]
      size-96
      bg-no-repeat
      mx-auto
      bg-contain
      top-animation"
  >

  </div>
  <div class="flex flex-col text-center" style="margin-top: -150px">
    <strong class="z-50 text-black text-3xl mb-5">欢迎来到天空之城</strong>
    <button class="z-50 bg-blue-500 text-white w-24 h-9 mx-auto my-2.5 rounded-md">游客</button>
    <button class="z-50 bg-blue-700 text-white w-24 h-9 mx-auto my-2.5 rounded-md">注册</button>
    <button class="z-50 bg-blue-600 text-white w-24 h-9 mx-auto my-2.5 rounded-md">登录</button>
  </div>
</template>

<style lang="postcss" scoped>
.top-animation {
  animation: top 2s;
}

@keyframes top {
  from {
    //margin-top: 100px;
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>