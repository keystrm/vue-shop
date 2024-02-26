<template>
    <TopNavBar/>

    <RouterView/>
</template>

<script setup lang="ts">
import TopNavBar from './components/TopNavBar.vue'

import Menu from 'primevue/menu';
import { ref } from "vue";

const items = ref([
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' }
]);

</script>
