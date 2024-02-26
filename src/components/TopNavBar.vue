<template>
    <nav class="bg-white shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <div class="flex items-center py-4 px-2">
                        <!-- Website Logo -->
                        <router-link to="/" class="flex items-center text-gray-700">
                            <span class="font-semibold text-lg">ShopName</span>
                        </router-link>
                    </div>
                    <!-- Primary Navbar items -->
                    <div class="hidden md:flex items-center space-x-1">
                        <router-link to="/" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</router-link>
                        <router-link to="/shop" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Shop</router-link>
                        <router-link to="/contact-us" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</router-link>
                    </div>
                </div>
                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button class="outline-none mobile-menu-button">
                        <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                            x-show="!showMenu"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- mobile menu -->
        <div class="hidden mobile-menu">
            <ul class="">
                <li><router-link to="/" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</router-link></li>
                <li><router-link to="/shop" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Shop</router-link></li>
                <li><router-link to="/contact-us" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</router-link></li>
            </ul>
        </div>
    </nav>
</template>