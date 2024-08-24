<script setup>
  	import { onMounted } from 'vue';
	
	import Tabulation from '../elements/Tabulation.vue';
  	import Layout from '../UI/Layout.vue';
  	import Tabs from '../UI/Tabs.vue';

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
