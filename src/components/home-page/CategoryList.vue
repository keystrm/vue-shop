<template>
    <h2 class="font-bold text-xl">{{ title }}</h2>
    <ul class="mt-4 tab">
        <li v-for="(category,i) in categoryList" :key="i">
            <a class="block text-gray-700 py-2 tablinks" @click.prevent="selectedCategory=category">{{ category }}</a>
        </li>
    </ul>
</template>

<script setup lang="ts">

import { ref,PropType, watch } from 'vue';

const selectedCategory = ref<string>('')

const props = defineProps({
    title: {type: String , defualt:""},
    categoryList: {type: Object as PropType<Array<string>> , defualt:[]},
})

const emits = defineEmits(['changeSelectedCategory'])

watch(selectedCategory,()=>{
    emits('changeSelectedCategory',selectedCategory.value)
})

</script>