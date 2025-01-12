<script setup>
    import { RouterLink } from 'vue-router';
    import Title from '@/components/UI/Title.vue';

    const props = defineProps(['title']);
</script>

<template>
    <div class="relative w-lvw h-lvh">
        <div class="absolute bg-[url('/img/waves-light.svg')] dark:bg-[url('/img/waves.svg')] bg-cover w-full h-full bg-no-repeat"></div>
    </div>
    <div class="flex flex-col justify-center items-center absolute w-full h-full top-0 left-0 gap-4">
        <section class="font-poppins text-center flex flex-col gap-3">
            <Title class="h1 text-gray-600 font-bold">{{ props.title }}</Title>
            <slot></slot>
            <RouterLink
                class="btn-green md:!basis-1/2"
                :to="{name: 'index'}"
            >
                Ir a Inicio
            </RouterLink>
        </section>
        <section>
            <img src="/img/error_image.png" class="w-[40rem]"/>
        </section>
    </div>
</template>