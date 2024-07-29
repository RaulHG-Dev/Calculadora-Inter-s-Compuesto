<script setup>
  import { RouterView } from 'vue-router';
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'
  import Header from './components/UI/Header.vue'

  onMounted(() => {
    initFlowbite();
  });

</script>

<template>
  <Header class="font-poppins"/>
  <RouterView />
</template>

<style scoped>

</style>
