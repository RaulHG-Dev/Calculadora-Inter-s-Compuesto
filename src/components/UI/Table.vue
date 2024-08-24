<script setup>
    import { computed } from 'vue';
    import { useResultStore } from '../../stores/results';
    import { formatNumberCurrency, truncateToTwoDecimals } from '../../helpers/helper';

    const resultsCalc = useResultStore();

    const numRows = computed(() => {
        return resultsCalc.getResults.length > 10;
    });
</script>

<template>
    <div :class="`relative overflow-x-auto shadow-md sm:rounded-lg ${numRows ? 'overflow-scroll h-[calc(51.5px*12)]' : 'h-auto'}`">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 font-poppins">
            <thead class="text-xs text-white uppercase dark:bg-[#00848f] dark:text-white bg-[#00816f] sticky">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Año
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Cantidad Total
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="result in resultsCalc.results" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ result.año }}
                    </th>
                    <th class="px-6 py-4">
                        {{ 
                        formatNumberCurrency(
                            truncateToTwoDecimals(result.total)
                        ) 
                        }}
                        <!-- {{ result.total }} -->
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>