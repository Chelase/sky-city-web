<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    default: '',
  },
})

const show = (msg) => {
  props.message = msg;
  props.visible = true;
  setTimeout(() => {
    hide();
  }, 3000);  // 3秒后自动隐藏
};

const hide = () => {
  props.visible = false;
  props.message = '';
};
</script>

<template>
  <div v-if="visible" role="alert" class="alert alert-error">
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>{{message}}</span>
  </div>
</template>

<style scoped>

</style>