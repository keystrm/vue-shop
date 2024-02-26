<script setup lang="ts">

const openCity = (evt:Event, cityName:string) => {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

</script>

<template>
        <!-- Navbar -->
    <nav class="bg-white shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <div class="flex items-center py-4 px-2">
                        <!-- Website Logo -->
                        <a href="#" class="flex items-center text-gray-700">
                            <span class="font-semibold text-lg">ShopName</span>
                        </a>
                    </div>
                    <!-- Primary Navbar items -->
                    <div class="hidden md:flex items-center space-x-1">
                        <a href="#" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
                        <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Shop</a>
                        <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
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
                <li><a href="#" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
                <li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Shop</a></li>
                <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
            </ul>
        </div>
    </nav>

    <!-- Main Container -->
    <div class="flex flex-wrap md:flex-nowrap">
        <!-- Side Pane for Product Categories -->
        <div class="md:w-1/4 p-4 bg-white hidden md:block">
            <h2 class="font-bold text-xl">Categories</h2>
            <ul class="mt-4 tab">
                <li><a @click.prevent="openCity(event, 'cat1')" class="block text-gray-700 py-2 tablinks">Category 1</a></li>
                <li><a @click.prevent="openCity(event, 'cat2')" class="block text-gray-700 py-2 tablinks">Category 2</a></li>
                <li><a @click.prevent="openCity(event, 'cat3')" class="block text-gray-700 py-2 tablinks">Category 3</a></li>
                <li><a @click.prevent="openCity(event, 'cat4')" class="block text-gray-700 py-2 tablinks">Category 4</a></li>
            </ul>
        </div>

        <!-- Main Area for Product List 1 -->
        <div id="cat1" class="w-full md:flex-1 p-4 tabcontent">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Product Card -->
                <div class="bg-white shadow rounded-lg p-4" v-for="n in 10000">
                    <img src="https://via.placeholder.com/150" alt="product" class="rounded-t-lg w-full h-40 object-cover">
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Product Name</h3>
                        <p class="text-gray-600">Product Description</p>
                        <button class="mt-4 px-4 py-2 bg-green-500 text-white rounded">Buy Now</button>
                    </div>
                </div>
                <!-- Repeat Product Card for each product -->
            </div>
        </div>

        <!-- Main Area for Product List 2 -->
        <div id="cat2" class="w-full md:flex-1 p-4 tabcontent">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Product Card -->
                <div class="bg-white shadow rounded-lg p-4" v-for="s in 100">
                    <img src="https://via.placeholder.com/150" alt="product" class="rounded-t-lg w-full h-40 object-cover">
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Product Name</h3>
                        <p class="text-gray-600">Product Description</p>
                        <button class="mt-4 px-4 py-2 bg-red-500 text-white rounded">Buy Now</button>
                    </div>
                </div>
                <!-- Repeat Product Card for each product -->
                 
            </div>
        </div>

        <!-- Main Area for Product List 3 -->
        <div id="cat3" class="w-full md:flex-1 p-4 tabcontent">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Product Card -->
                <div class="bg-white shadow rounded-lg p-4" v-for="s in 100">
                    <img src="https://via.placeholder.com/150" alt="product" class="rounded-t-lg w-full h-40 object-cover">
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Product Name</h3>
                        <p class="text-gray-600">Product Description</p>
                        <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Buy Now</button>
                    </div>
                </div>
                <!-- Repeat Product Card for each product -->
            </div>
        </div>

        <!-- Main Area for Product List 4 -->
        <div id="cat4" class="w-full md:flex-1 p-4 tabcontent">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Product Card -->
                <div class="bg-white shadow rounded-lg p-4" v-for="s in 200">
                    <img src="https://via.placeholder.com/150" alt="product" class="rounded-t-lg w-full h-40 object-cover">
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Product Name</h3>
                        <p class="text-gray-600">Product Description</p>
                        <button class="mt-4 px-4 py-2 bg-yellow-500 text-white rounded">Buy Now</button>
                    </div>
                </div>
                <!-- Repeat Product Card for each product -->
                
            </div>
        </div>
    </div>
</template>

<style scoped>

.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

</style>
