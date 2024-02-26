<template>
    <nav class="bg-gray-800 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
            <router-link to="/" class="text-xl font-semibold">Logo</router-link>
            <div class="hidden md:flex space-x-4">
                <router-link to="/" class="hover:text-gray-300">Home</router-link>
                <router-link to="/shop" class="hover:text-gray-300">Shop</router-link>
                <router-link to="/contact-us" class="hover:text-gray-300">Contact Us</router-link>
            </div>
            <button class="md:hidden text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>