<template>
    <h1>Shop</h1>
    <button class="mt-4 px-4 py-2 bg-green-500 text-white rounded self-start md:self-stretch lg:self-start" @click="visible=true"></button>

    <div v-if="visible">
        <AsyncComponent/>
    
    </div>

</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';

const AsyncComponent = defineAsyncComponent(() =>
  import('../components/AsyncComponent.vue')
);

const visible = ref(false)
</script>