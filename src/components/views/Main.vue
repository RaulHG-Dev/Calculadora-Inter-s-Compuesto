<script setup>
    import { onMounted } from 'vue';
    import { push } from 'notivue'

    import Layout from '../UI/Layout.vue';
    import Title from '../UI/Title.vue';
    import Notification from '../elements/Notification.vue';

    onMounted(() => {
        push.success('Something good has been pushed!')
    });
</script>

<template>
    <Notification/>
    <Layout>
        <div class="flex flex-col items-center w-full justify-center opacity-45 py-4">
            <Title class="h4 md:h3">Ingresa información para empezar...</Title>
            <img src="/img/main_icon.svg" alt="Inicio imagen" class="w-[60%]">
        </div>
    </Layout>
</template>
