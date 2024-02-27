<template>
    <div class="flex flex-col bg-white shadow rounded-lg">
        <div class="flex-shrink-0">
            <img :src="product?.image" alt="product" class="rounded-t-lg w-full h-40 object-cover">
        </div>
        <div class="flex-grow p-4 flex flex-col justify-between">
            <div>
                <h3 class="text-lg font-semibold">{{ product?.title }}</h3>
                <p class="text-gray-600 overflow-hidden text-ellipsis max-h-16">{{ product?.description }}</p>
            </div>
            <button @click="visible = true" class="mt-4 px-4 py-2 bg-green-500 text-white rounded self-start md:self-stretch lg:self-start">
                Buy Now
            </button>
        </div>
    </div>

    <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
        <span class="p-text-secondary block mb-5">Update your information.</span>
        <div class="flex align-items-center gap-3 mb-3">
            <label for="username" class="font-semibold w-6rem">Username</label>
        </div>
        <div class="flex align-items-center gap-3 mb-5">
            <label for="email" class="font-semibold w-6rem">Email</label>
        </div>
        <div class="flex justify-content-end gap-2">
        </div>
    </Dialog>

</template>
<script setup lang="ts">
import { PropType, ref } from 'vue';
import Product from '../types/Product';

defineProps({
    product: {
        type: Object as PropType<Product>
    }
})


import Dialog from 'primevue/dialog';
const visible = ref(false);

</script>