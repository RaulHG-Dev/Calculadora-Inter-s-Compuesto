<script setup>
    import { FormKit } from '@formkit/vue';
    import Percent from '../icons/PercentIcon.vue';
    import Title from '../UI/Title.vue';
</script>

<template>
    <div class="font-poppins">
        <Title class="h5">Ingrese información</Title>
        <FormKit
            type="form"
            :classes="{
                            input: 'w-full btn-green'
                        }"
        >
            <div class="mb-4">
                <FormKit
                    type="number"
                    class="input-default"
                    label="Capital Inicial"
                    name="capital-inicial"
                    min="1"
                    step="0.01"
                    validation="required|number|min:1"
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
                    :classes="{
                        label: '!font-poppins',
                        input: 'input-default !font-poppins',
                        messages: 'text-xs text-red-400 !font-poppins'
                    }"
                />
            </div>
            <div class="mb-6">
                <div class="flex">
                    <button type="button" class="w-full btn-gray dark:btn-blue">Limpiar</button>
                    <FormKit
                        type="submit"
                        label="Calcular"
                        :classes="{
                            input: 'w-full btn-green'
                        }"
                    />
                </div>
            </div>
        </FormKit>
    </div>
</template>

<style>
/* .formkit-icon {
  max-width: 5em;
} */
</style>