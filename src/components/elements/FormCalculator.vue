<script setup>
    import { FormKit } from '@formkit/vue';
    import Title from '../UI/Title.vue';
    import { useResultStore } from '../../stores/results';

    const results = useResultStore();
</script>

<template>
    <div class="font-poppins">
        <Title class="h5">Ingrese información</Title>
        <FormKit
            type="form"
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
                    type="number"
                    class="input-default"
                    label="Capital Inicial"
                    name="capitalInicial"
                    min="1"
                    step="0.01"
                    validation="required|number|min:1"
                    v-model="results.form.capitalInicial"
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
                    label="Tasa de Interés (%)"
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
                    label="Años"
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
                    <button type="button" class="w-full btn-gray dark:btn-blue md:!basis-1/2" @click="results.clearData">Limpiar</button>
                    <button type="submit" class="w-full btn-green md:!basis-1/2">Calcular</button>
                </div>
            </div>
        </FormKit>
    </div>
</template>