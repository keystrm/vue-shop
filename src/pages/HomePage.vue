<template>
    <!-- Main Container -->
    <div class="flex flex-wrap md:flex-nowrap">
        <!-- Side Pane for Product Categories -->
        <div class="md:w-1/4 p-4 bg-white hidden md:block">
            <CategoryList :category-list="categoryList" @change-selected-category="getCategoryRelatedProducts" />
        </div>

        <!-- Main Area for Product List 1 -->
        <div class="w-full md:flex-1 p-4 tabcontent">
            <div v-if="loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                Loading...........
            </div>
            <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Product Card -->
                <ProductCard v-for="product in productList" :key="product.id" :product="product"/>
                <!-- Repeat Product Card for each product -->
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">


import { onMounted, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue'
import CategoryList from '../components/home-page/CategoryList.vue'
import axios from 'axios'
import Product from '../types/Product'

const categoryList = ref<Array<string>>([])
const productList = ref<Array<Product>>([])
const loading = ref<boolean>(false)

const getCategories = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        if (response?.data) {
            categoryList.value = response.data
        }
        console.log(response)
    } catch (error) {
        console.error(error)

    }
}

const getCategoryRelatedProducts = async (category: string) => {
    try {
        let url = 'https://fakestoreapi.com/products/category/' + category
        if (!url) {
            throw new Error('invalid url')
        }
        loading.value = true

        const response = await axios.get(url);

        if(!response.data){
            productList.value = []
        }

        productList.value = response.data;
        loading.value = false

    } catch (error) {
        console.error(error)
        loading.value = false
    }
}

onMounted(async () => {
    await getCategories()
})


</script>