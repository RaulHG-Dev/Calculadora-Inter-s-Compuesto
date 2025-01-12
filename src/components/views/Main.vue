<script setup>
    import { onMounted } from 'vue';
    import router from '@/router';

    import Layout from '@/components/UI/Layout.vue';
    import Title from '@/components/UI/Title.vue';
    import Notification from '@/components/elements/Notification.vue';

    import { useResultStore } from '@/stores/results';

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
        <div class="flex flex-col items-center w-full justify-center py-4">
            <Title class="h4 md:h3">Ingresa información para empezar...</Title>
            <img src="/img/main_icon.webp" alt="Inicio imagen" loading="lazy" width="60%">
        </div>
    </Layout>
</template>
