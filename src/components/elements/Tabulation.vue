<script setup>
    import { onMounted } from 'vue';
    import Handsontable from 'handsontable';
    import 'handsontable/dist/handsontable.full.min.css';

    const container = document.querySelector('#table');

    onMounted(() => {
        const hot = new Handsontable(container, {
            data: [
                ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
                ['2019', 10, 11, 12, 13],
                ['2020', 20, 11, 14, 13],
                ['2021', 30, 15, 12, 13]
            ],
            rowHeaders: true,
            colHeaders: true,
            height: 'auto',
            autoWrapRow: true,
            autoWrapCol: true,
            licenseKey: 'non-commercial' // for non-commercial use only
        });
    });
</script>

<template>
    <div id="table">

    </div>
</template>

<style lang="scss" scoped>

</style>