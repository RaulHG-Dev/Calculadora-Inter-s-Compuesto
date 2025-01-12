<script setup>
    import { squircle } from 'ldrs';
    import { onMounted } from 'vue';
    import { useDarkModeStore } from '@/stores/darkMode';
    import { useLoaderStatusStore } from '@/stores/loaderStatus';

    const darkMode = useDarkModeStore();
    const loaderMode = useLoaderStatusStore();

    onMounted(() => {
        squircle.register();
    });
</script>

<template>
    <div 
        class="z-50 flex flex-col items-center justify-center w-full h-full bg-gray-500 bg-opacity-30 fixed"
        :class="loaderMode.verifyLoaderStatus ? 'block' : 'hidden'"
    >
        <div class="z-50">
            <l-squircle
                size="40"
                stroke="5"
                stroke-length="0.15"
                bg-opacity="0.1"
                speed="0.9" 
                :color="darkMode.verifyDarkMode ? '#1C64F2' : '#00848f'"
            ></l-squircle>
        </div>
        <div class="z-50">
            <p class="font-poppins text-xl" :class="darkMode.verifyDarkMode ? 'text-[#1C64F2]' : 'text-[#00848f]'">Calculando, espere por favor...</p>
        </div>
    </div>
</template>