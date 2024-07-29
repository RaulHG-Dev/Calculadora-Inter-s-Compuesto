<script setup>
    import Percent from '../icons/PercentIcon.vue';
import Title from '../UI/Title.vue';
</script>

<template>
    <form action="" class="font-poppins">
        <Title class="h5">Ingrese información</Title>
        <div class="mb-6">
            <label for="default-input">Capital Inicial:</label>
            <input type="number" id="default-input" class="input-default" min="1">
        </div>
        <div class="mb-6">
            <label for="default-input">Interés:</label>
            <div class="relative mb-6">
                <div class="absolute inset-y-0 end-0 flex items-center pe-7 pointer-events-none">
                    <Percent/>
                </div>
                <input type="number" id="default-input" class="input-default" min="1" max="100">
            </div>
        </div>
        <div class="mb-6">
            <label for="default-input">Años:</label>
            <input type="number" id="default-input" class="input-default" min="1" max="100">
        </div>
        <div class="mb-6">
            <div class="flex">
                <button type="button" class="w-full btn-gray dark:btn-blue">Limpiar</button>
                <button type="button" class="w-full btn-green">Calcular</button>
            </div>
        </div>
    </form>
</template>

<style lang="scss" scoped>

</style>