import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTabsStore = defineStore('tabs', () => {
    const iconTabulationActive = ref(false);
    const iconGraphicActive = ref(false);

    const isActiveIconTabulation = computed(() => {
        return iconTabulationActive.value;
    });

    const isActiveIconGraphic = computed(() => {
        return iconGraphicActive.value;
    });

    return {
        iconTabulationActive,
        iconGraphicActive,
        isActiveIconTabulation,
        isActiveIconGraphic
    }
});