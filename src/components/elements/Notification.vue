<script setup>
    import { Notivue, Notification, slateTheme, pastelTheme, materialTheme } from 'notivue';
    import { useDarkModeStore } from '@/stores/darkMode';
    useDarkModeStore

    const darkMode = useDarkModeStore();
</script>

<template>
    <Notivue v-slot="item">
        <Notification 
            :item="item"
            :theme="darkMode.verifyDarkMode ? slateTheme : materialTheme"
        />
    </Notivue>
</template>

<style>
:root {
  /* Your variables */
  --header-height: 70px;
  --container-padding: 30px;
  --container-width: auto;

  /* Set the maximum width of the stream */
  --nv-root-width: var(--container-width);

  /* Add the top padding and place it below the header */
  --nv-root-top: calc(var(--header-height) + var(--container-padding));

  /* Add the same left-right paddings of your app container */
  --nv-root-left: var(--container-padding);
  --nv-root-right: var(--container-padding);
}

/* Rules for mobile devices */
@media (max-width: 768px) {
  :root {
    --header-height: 60px;
    --container-padding: 20px;
  }
}
</style>