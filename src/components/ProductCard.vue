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
            <button class="mt-4 px-4 py-2 bg-green-500 text-white rounded self-start md:self-stretch lg:self-start">
                Buy Now
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import Product from '../types/Product';

defineProps({
    product: {
        type: Object as PropType<Product>
    }
})
</script>