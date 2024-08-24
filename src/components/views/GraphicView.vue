<script setup>
    import { onMounted } from 'vue';
    import Graphic from '../elements/Graphic.vue';
    import Layout from '../UI/Layout.vue';
    import Tabs from '../UI/Tabs.vue';
    import { useTabsStore } from '@/stores/tabs';

    const tabs = useTabsStore();

    onMounted(() => {
        tabs.iconTabulationActive = false;
        tabs.iconGraphicActive = true;
    });
</script>

<template>
    <Layout>
        <Tabs/>
        <Graphic/>  
    </Layout>
</template>
