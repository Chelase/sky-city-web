<script setup>
import sidebar from './components/sidebar .vue'
</script>

<template>
  <div class="bg-blue-500">
    <main>
      <sidebar />
      <RouterView/>
    </main>
  </div>
</template>
