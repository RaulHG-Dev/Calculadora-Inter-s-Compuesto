<script setup>
    import { onMounted } from 'vue';
    import Layout from '../UI/Layout.vue';
    import Title from '../UI/Title.vue';
    import Notification from '../elements/Notification.vue';
    import { useResultStore } from '../../stores/results';
import router from '../../router';

    const resultStore = useResultStore();

    onMounted(() => {
        if(resultStore.getResults.length > 0) {
            router.push({ name: 'tabulacion' });
        }
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
