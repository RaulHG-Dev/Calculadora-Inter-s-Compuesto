<script setup>
    import { onMounted } from 'vue';
    import DarkMode from '../icons/DarkModeIcon.vue';
    import LigthMode from '../icons/LigthModeIcon.vue';
    import { useDarkModeStore } from '@/stores/darkMode';

    const darkMode = useDarkModeStore();
    onMounted(() => {
        darkMode.isDarkMode();
    });
</script>

<template>
    <div class="flex gap-2">
        <LigthMode/>
        <label class="inline-flex items-center cursor-pointer">
            <input 
                type="checkbox" 
                class="sr-only peer"
                @click="darkMode.handleChange"
                :checked="darkMode.verifyDarkMode"
            >
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-500"></div>
        </label>
        <DarkMode/>
    </div>
</template>