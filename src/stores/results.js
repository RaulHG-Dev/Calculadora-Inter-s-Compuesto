import { computed, reactive, ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { localeStringToNumber, truncateToTwoDecimals } from "../helpers/helper";
import { push } from "notivue";

import router from "../router";
import APIServices from "@/services/APIServices";
import { useLoaderStatusStore } from "./loaderStatus";

export const useResultStore = defineStore('results', () => {
    const results = ref([]);
    const form = reactive({
        capitalInicial: '',
        tasaInteres: '',
        anios: ''
    });

    const loaderMode = useLoaderStatusStore();
    
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
        const response = calculateYearByYear(
            Number(
                localeStringToNumber(
                    data.capitalInicial
                )
            ), 
            Number(data.anios), 
            Number(data.interes)
        );

        response.then(response => {
            const {data: {data:info, success}} = response
            const result = [];

            loaderMode.isLoading = false;
            if (success) {
                info.forEach(dataYear => {
                    result.push({
                        'año': `Año ${dataYear.year}`,
                        'total': dataYear.capital
                    });
                });
                
                results.value = result
                router.push({ name: 'tabulacion' });
            } else {
                push.error('¡Ocurrió un problema al realizar cálculo!');
            }
        }).catch(error => {
            console.log(error)
            push.error('¡Ocurrió un problema al realizar cálculo!');
        })
        
    }

    const getResults = computed(() => {
        return results.value;
    });

    async function calculateYearByYear(initQuantity, year, interest) {
        loaderMode.isLoading = true;
        return await APIServices.getByYear(initQuantity, year, interest)
    }

    const getLabels = computed(() => {
        const labels = [];
        if(results.value.length > 0) {
            for (const element of results.value) {
                labels.push(element.año);
            }
        }
        return labels;
    });

    const getValues = computed(() => { 
        const values = [];
        if(results.value.length > 0) {
            for (const element of results.value) {
                values.push(
                    truncateToTwoDecimals(element.total)
                );
            }
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