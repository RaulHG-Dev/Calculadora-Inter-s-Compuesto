<script setup>
  import { RouterView } from 'vue-router';
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'
  
  import { useDarkModeStore } from './stores/darkMode';

  const darkMode = useDarkModeStore();
  onMounted(() => {
    initFlowbite();
    darkMode.isDarkMode();
  });
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
