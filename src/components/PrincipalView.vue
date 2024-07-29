<script setup>
  import FormCalculator from './elements/FormCalculator.vue';
  import Result from './elements/Result.vue';
</script>

<template>
  <main class="flex-col md:flex md:flex-row">
    <section class="basis-7/12 md:basis-3/12 shadow-sm px-5 py-4 md:h-dvh dark:bg-[#2f3136] border-r-[0.1em] dark:border-none">
      <FormCalculator />
    </section>
    <section class="basis-5/12 md:basis-9/12 px-5 py-4 md:h-dvh dark:bg-[#202124]">
      <Result />
    </section>
  </main>
</template>

<style scoped>

</style>
