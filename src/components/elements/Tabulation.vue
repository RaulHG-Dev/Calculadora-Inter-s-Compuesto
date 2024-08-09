<script setup>
    import Title from '../UI/Title.vue';
    import { computed, onMounted, readonly, ref } from 'vue';
    import { HotTable } from '@handsontable/vue3';
    import { registerAllModules } from 'handsontable/registry';
    import 'handsontable/dist/handsontable.full.css';

    registerAllModules();

    const settings = ref({
        licenseKey: 'non-commercial-and-evaluation',
        colHeaders: true,
        rowHeaders: false,
        colHeaders: ['Año', 'Cantidad Total'],
        readOnly: true,
        width: '100%',
        height: 'auto',
        stretchH: 'all',
        contextMenu: false,
        autoWrapRow: true,
        autoWrapCol: true,
        colWidths: ['100%', '100%'],
        className: '!font-poppins'
    });

    const tableData = ref([
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 },
    ]);

    const hasData = computed(() => {
        return tableData.value.length > 0;
    });
</script>

<template>
    <div class="py-4 w-full">
        <Title>Tabulación de Interés Compuesto</Title>
        <div v-if="hasData">
            <hot-table :settings="settings" :data="tableData"/>
        </div>
        <div v-else>
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

<style scoped>
</style>