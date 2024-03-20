<template>
    <div class="gallery">
      <div v-for="(item, index) in items" :key="item.id" class="tile">
        <img :src="item.thumbnailUrl" alt="Random Image from Picsum">
      </div>
      <!-- Loader or a message indicating loading or end of gallery -->
      <div ref="loaderRef" class="loader">Loading more items...</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  
  const items = ref([]);
  const loaderRef = ref(null);
  const nextStart = ref(0);
  
  // Replacing the previous fetchItems with the provided dummy API logic
  const loadItems = async () => {
    // For testing: loading 10 random images from Picsum Photos
    const itemsToAdd = Array.from({ length: 10 }, (_, index) => ({
      id: nextStart.value + index,
      type: 'image',
      thumbnailUrl: `https://picsum.photos/200/300?random=${nextStart.value + index}`,
    }));
  
    items.value.push(...itemsToAdd);
    nextStart.value += 10; // Simulate "pagination" by increasing the starting index
  };
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        loadItems();
      }
    },
    { rootMargin: '100px' } // Adjust based on your needs
  );
  
  onMounted(() => {
    loadItems(); // Initial load
  });
  
  watch(loaderRef, (newValue, oldValue) => {
    if (oldValue) {
      observer.unobserve(oldValue);
    }
    if (newValue) {
      observer.observe(newValue);
    }
  });
  </script>
  
  <style scoped>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
  .tile {
    position: relative;
  }
  img {
    width: 100%;
    height: auto;
  }
  .loader {
    text-align: center;
    padding: 20px;
  }
  </style>
  