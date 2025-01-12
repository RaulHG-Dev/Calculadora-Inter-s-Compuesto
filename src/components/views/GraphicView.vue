<script setup>
    import { onMounted } from 'vue';
    import Graphic from '@/components/elements/Graphic.vue';
    import Layout from '@/components/UI/Layout.vue';
    import Tabs from '@/components/UI/Tabs.vue';

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
