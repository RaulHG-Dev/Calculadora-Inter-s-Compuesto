import { computed, reactive, ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { localeStringToNumber, truncateToTwoDecimals } from "../helpers/helper";
import { push } from "notivue";

import router from "../router";

export const useResultStore = defineStore('results', () => {
    const results = ref([]);
    const form = reactive({
        capitalInicial: '',
        tasaInteres: '',
        anios: ''
    });
    
    onMounted(() => {
        results.value = JSON.parse(localStorage.getItem('results')) ?? [];
        form.capitalInicial = localStorage.getItem('capital');
        form.tasaInteres = localStorage.getItem('interes');
        form.anios = localStorage.getItem('anios');
    });

    watch(results, () => {
        sincronizarLocalStorage()
    }, {
        deep: true
    });

    function sincronizarLocalStorage() {
        localStorage.setItem('results', JSON.stringify(results.value));
        localStorage.setItem('capital', form.capitalInicial);
        localStorage.setItem('interes', form.tasaInteres);
        localStorage.setItem('anios', form.anios);
    }

    function handleSubmit(data) {
        results.value = calculateYearByYear(
            Number(
                localeStringToNumber(
                    data.capitalInicial
                )
            ), 
            Number(data.anios), 
            Number(data.interes)
        );
        router.push({ name: 'tabulacion' });
    }

    const getResults = computed(() => {
        return results.value;
    });

    function calculateYearByYear(initQuantity, year, interest) {
        let result = [];
        for (let yearIndex = 1; yearIndex <= year; yearIndex++) {
            result.push({
                'año': `Año ${yearIndex}`,
                'total': initQuantity*((1+(interest/100))**yearIndex)
            });
        }

        return result;
    }

    const getLabels = computed(() => {
        const labels = [];
        for (const element of results.value) {
            labels.push(element.año);
        }
        return labels;
    });

    const getValues = computed(() => { 
        const values = [];
        for (const element of results.value) {
            values.push(
                truncateToTwoDecimals(element.total)
            );
        }
        return values;
    });

    function clearData() {
        form.anios = '';
        form.capitalInicial = '';
        form.tasaInteres = '';
        results.value = {};

        router.push({ name: 'index' });
        push.success('¡Formulario reiniciado correctamente!');
    }

    return {
        handleSubmit,
        clearData,
        getLabels,
        getValues,
        getResults,
        results,
        form
    }
});