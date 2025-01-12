import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useLoaderStatusStore = defineStore('loaderStatus', () => {
    const isLoading = ref(false);

    const verifyLoaderStatus = computed(() => {
        return isLoading.value;
    });

    return {
        isLoading,
        verifyLoaderStatus
    }
});