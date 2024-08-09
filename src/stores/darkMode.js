import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useDarkModeStore = defineStore('darkModel', () => {
    const isDark = ref(false);

    function isDarkMode() {
        // if (localStorage.getItem('color-theme') === 'dark'|| (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        if (localStorage.getItem('color-theme') === 'dark') {
            document.documentElement.classList.add('dark');
            isDark.value = true;
        } else {
            document.documentElement.classList.remove('dark');
            isDark.value = false;
        }
    }

    const handleChange = (e) => {
        const isChecked = e.target.checked;
        if(isChecked) {
            localStorage.setItem('color-theme', 'dark');
        } else {
            localStorage.removeItem('color-theme');
        }
        isDarkMode();
    }

    const verifyDarkMode = computed(() => {
        return isDark.value;
    });

    return {
        isDark,
        isDarkMode,
        handleChange,
        verifyDarkMode
    }
});