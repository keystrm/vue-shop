<template>
    <!-- Main Container -->
    <div class="flex flex-wrap md:flex-nowrap">
        <!-- Side Pane for Product Categories -->
        <div class="md:w-1/4 p-4 bg-white hidden md:block">
            <CategoryList :category-list="categoryList"/>
        </div>

        <!-- Main Area for Product List 1 -->
        <div id="cat1" class="w-full md:flex-1 p-4 tabcontent">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Product Card -->
                <ProductCard/>
                <!-- Repeat Product Card for each product -->
            </div>
        </div>

        <!-- Main Area for Product List 2 -->
        <div id="cat2" class="w-full md:flex-1 p-4 tabcontent">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Product Card -->
                <ProductCard/>
                <!-- Repeat Product Card for each product -->
                 
            </div>
        </div>

        <!-- Main Area for Product List 3 -->
        <div id="cat3" class="w-full md:flex-1 p-4 tabcontent">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Product Card -->
                <ProductCard/>
                <!-- Repeat Product Card for each product -->
            </div>
        </div>

        <!-- Main Area for Product List 4 -->
        <div id="cat4" class="w-full md:flex-1 p-4 tabcontent">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Product Card -->
                <ProductCard/>
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

const categoryList = ref<Array<string>>([])

const getCategories = async() => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        if(response?.data){
            categoryList.value = response.data
        }
        console.log(response)
    } catch (error) {
        console.error(error)
        
    }
}

onMounted(async()=>{
    await getCategories()
})


</script>