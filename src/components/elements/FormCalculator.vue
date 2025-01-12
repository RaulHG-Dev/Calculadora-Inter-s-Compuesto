<script setup>
    import { reactive, ref } from 'vue';
    import { vMaska } from 'maska/vue';
    import { FormKit, reset } from '@formkit/vue';
    import { useResultStore } from '@/stores/results';
    import { localeStringToNumber } from '@/helpers/helper';

    const results = useResultStore();
    
    const optionsMask = reactive({
        number: {
            locale: 'es-MX',
            fraction: 2,
            unsigned: true
        },
        postProcess: (val) => val ? `$${val}` : ''
    });

    const valueNumber = function ({ value }) {
        return new Promise((resolve) => {
            resolve(localeStringToNumber(value) > 0);
        });
    }

    const clearForm = function () {
        reset('formCalculator');
        results.clearData();
    }
</script>

<template>
    <div class="font-poppins">
        <section class="mb-6">
            <p class="text-base dark:text-white">
                Calcula el crecimiento de tu inversión con interés compuesto.
            </p>
        </section>
        <FormKit
            type="form"
            id="formCalculator"
            :classes="{
                messages: 'p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 font-poppins text-sm'
            }"
            @submit="results.handleSubmit"
        >
            <template #submit>
                <button style="display: none;">Submit</button>
            </template>
            <div class="mb-4">
                <FormKit
                    type="text"
                    class="input-default"
                    label="Capital Inicial"
                    name="capitalInicial"
                    validation="required|valueNumber"
                    :validation-rules="{valueNumber}"
                    :validation-messages="{
                        valueNumber: 'Capital inicial debe ser mayor a cero.'
                    }"
                    v-model="results.form.capitalInicial"
                    v-maska="optionsMask"
                    :classes="{
                        label: '!font-poppins',
                        input: 'input-default !font-poppins',
                        messages: 'text-xs text-red-400 !font-poppins',
                    }"
                />
            </div>
            <div class="mb-4 relative">
                <FormKit
                    type="number"
                    class="input-default"
                    label="Tasa de Interés Anual (%)"
                    name="interes"
                    min="1"
                    step="0.01"
                    validation="required|number|min:1|max:100"
                    v-model="results.form.tasaInteres"
                    :classes="{
                        label: '!font-poppins',
                        input: 'input-default !font-poppins',
                        messages: 'text-xs text-red-400 !font-poppins'
                    }"
                />
            </div>
            <div class="mb-4 relative">
                <FormKit
                    type="number"
                    class="input-default"
                    label="Número de Años"
                    name="anios"
                    min="1"
                    step="1"
                    validation="required|number|min:1|max:100"
                    v-model="results.form.anios"
                    :classes="{
                        label: '!font-poppins',
                        input: 'input-default !font-poppins',
                        messages: 'text-xs text-red-400 !font-poppins'
                    }"
                />
            </div>
            <div class="mb-6">
                <div class="flex flex-col md:flex-row w-full">
                    <button type="button" class="w-full btn-gray dark:btn-blue md:!basis-1/2" @click="clearForm">Limpiar</button>
                    <button type="submit" class="w-full btn-green md:!basis-1/2">Calcular</button>
                </div>
            </div>
        </FormKit>
    </div>
</template>