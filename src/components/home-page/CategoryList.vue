<template>
    <h2 class="font-bold text-xl">{{ title }}</h2>
    <ul class="mt-4 tab">
        <li><a class="block text-gray-700 py-2 tablinks">Category 1</a></li>
        <li><a class="block text-gray-700 py-2 tablinks">Category 2</a></li>
        <li><a class="block text-gray-700 py-2 tablinks">Category 3</a></li>
        <li><a class="block text-gray-700 py-2 tablinks">Category 4</a></li>
    </ul>
</template>

<script setup lang="ts">

const props = defineProps({
    title: {type: String , defualt:""},
    categoryList: {type: Object , defualt:[]},
})

</script>