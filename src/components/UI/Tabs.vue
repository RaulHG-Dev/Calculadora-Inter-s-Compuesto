<script setup>
    import { RouterLink } from 'vue-router';
    import Monitoring from '@/components/icons/MonitoringIcon.vue';
    import TableIcon from '@/components/icons/TableIcon.vue';
    import { useTabsStore } from '@/stores/tabs';

    const tabs = useTabsStore();
</script>

<template>
    <div class="border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li class="me-2">
                <RouterLink 
                    :to="{name: 'tabulacion'}"
                    :class="`${tabs.isActiveIconTabulation ? 'link-active' : 'link-inactive'} group gap-1`"
                >
                    <TableIcon/>
                    Tabulación
                </RouterLink>
            </li>
            <li class="me-2">
                <RouterLink 
                    :to="{name: 'graficar'}"
                    :class="`${tabs.isActiveIconGraphic ? 'link-active' : 'link-inactive'} group gap-1`"
                >
                    <Monitoring/>
                    Graficar
                </RouterLink>
            </li>
        </ul>
        <!-- <div>
            <Tabulation/>
            <Graphic/>
        </div> -->
    </div>
</template>
