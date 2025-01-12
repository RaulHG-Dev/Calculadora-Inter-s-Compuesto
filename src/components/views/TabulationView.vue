<script setup>
  	import { onMounted } from 'vue';
	
	import Tabulation from '@/components/elements/Tabulation.vue';
	import Layout from '@/components/UI/Layout.vue';
	import Tabs from '@/components/UI/Tabs.vue';

	import { useTabsStore } from '@/stores/tabs';


	const tabs = useTabsStore();

	onMounted(() => {
		tabs.iconGraphicActive = false;
		tabs.iconTabulationActive = true;
	});
</script>

<template>
  	<Layout>
    	<Tabs/>
    	<Tabulation/>  
  	</Layout>
</template>
