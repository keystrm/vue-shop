<script setup lang="ts">
import {useCounterStore} from './store/counter'

const store = useCounterStore();

</script>

<template>
<h1 @click="store.increment"> {{ store.count }}</h1>
 
</template>

<style scoped>

</style>
