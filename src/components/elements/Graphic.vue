<script setup>
    import { computed, onMounted, ref, watch } from 'vue';
    import { Line } from 'vue-chartjs';
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    } from 'chart.js'
    import { storeToRefs } from 'pinia';
    import { useResultStore } from '@/stores/results';
    import { useDarkModeStore } from '@/stores/darkMode';
    import TitleUI from '../UI/Title.vue';

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    const options = ref({});
    const results = useResultStore();
    const darkMode = useDarkModeStore();

    const { results: resultados } = storeToRefs(results);
    const { isDark } = storeToRefs(darkMode);

    const data = ref({
        label: [],
        datasets: [
            {
                label: 'Interés Acumulado',
                backgroundColor: '#00816f',
                data: []
            }
        ]
    });

    options.value = {
        responsive: true,
        maintainAspectRatio: false
    };

    onMounted(() => {
        updateDataChar();
    });

    watch(resultados, () => {
        updateDataChar();
    }, {
        deep: true
    });

    watch(isDark, () => {
        updateDataChar();
    });

    const hasData = computed(() => {
        return results.results?.length > 0;
    });

    const chartData = computed(() => {
        return data.value;
    });

    function updateDataChar() {
        const labels = results.getLabels;
        const values = results.getValues;

        data.value = {
            labels: labels,
            datasets: [
                {
                    label: 'Interés Acumulado',
                    backgroundColor: darkMode.verifyDarkMode ? '#00848f' : '#00816f',
                    data: values,
                    borderColor: darkMode.verifyDarkMode ? '#ffffff' : '#9ca3af',
                    borderWidth: 0.5
                }
            ]
        };
    }
</script>

<template>
    <div class="py-4 w-full">
        <TitleUI>Gráfica de resultados</TitleUI>
        <div v-if="hasData">
            <div class="h-[41em] w-full dark:bg-gray-800">
                <!-- <apexchart type="line" :options="optionsApexCharts" :series="chartData.datasets" /> -->
                <Line :data="chartData" :options="options" />
            </div>
        </div>
        <div v-else class="text-xl font-poppins text-gray-400">
            <div class="flex gap-2 items-center justify-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" class="fill-gray-400 w-10 h-10">
                        <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                    </svg>
                </span>
                <span>
                    <p class="text-xl font-poppins text-gray-400">No hay resultados</p>
                </span>
            </div>
        </div>
    </div>
</template>