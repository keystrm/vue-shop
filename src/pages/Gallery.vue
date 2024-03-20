<template>
  <div class="gallery">
    <div v-for="item in items" :key="item.id" class="tile">
      <div v-if="!item.imageUrl" class="loading-placeholder"></div>
      <img v-else :src="item.imageUrl" alt="Media Image" class="media-img">
    </div>
    <div ref="loaderRef" class="more-items-loader">Loading more items...</div>
  </div>
</template>


<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { throttle } from 'lodash'; // Assuming you're using lodash for throttling


const items = ref([]);
const loaderRef = ref(null);
const nextStart = ref(0);
const loadQueue = ref([]); // Queue to manage loading items
const loadRate = 1000; // Adjust based on API rate limit (1000ms = 1 second)

const loadImageForItem = async (itemId) => {
  // Function to load image for a specific item
  const imageUrl = `https://picsum.photos/200/300?random=${itemId}`;
  const index = items.value.findIndex(item => item.id === itemId);
  if (index !== -1) {
    items.value[index].imageUrl = imageUrl;
    // Force update for reactivity
    items.value = [...items.value];
  }
};

const processQueue = () => {
  if (loadQueue.value.length > 0) {
    const itemId = loadQueue.value.shift(); // Remove the first item from the queue
    loadImageForItem(itemId); // Load the item's image
  }
};

const loadItems = async () => {
  // Your existing logic to load item IDs, then push IDs to loadQueue
  const newItems = Array.from({ length: 10 }, (_, index) => ({
    id: nextStart.value + index,
    imageUrl: null, // Images start out not loaded
  }));

  items.value.push(...newItems);
  nextStart.value += newItems.length;
  
  // Add new item IDs to the load queue
  newItems.forEach(item => loadQueue.value.push(item.id));
};



const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      loadItems();
    }
  },
  { rootMargin: '100px' }
);

onMounted(async() => {
  await loadItems();
  nextTick(() => {
    setInterval(processQueue, loadRate); // Process one item every loadRate milliseconds
  });
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
  /* Adjust minmax() for tile size */
  gap: 16px;
  margin: auto;
  /* Center the gallery */
  overflow: hidden;
  /* Prevent overflow */
  width: 100%;
  /* Adjust based on your layout */
}

.tile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  /* Fixed height, or min-height based on your design */
  background-color: #f0f0f0;
  /* Placeholder background color */
  position: relative;
}

.loading-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(130deg, #e4e4e4 40%, #f0f0f0 50%, #e4e4e4 60%);
  /* Animated loading effect */
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
}

.media-img {
  width: 100%;
  /* Ensure images fit within the tile */
  height: auto;
  /* Maintain aspect ratio */
  display: block;
  /* Remove any extra space below the image */
}

.more-items-loader {
  text-align: center;
  padding: 20px;
  width: 100%;
}

@keyframes loading {
  from {
    background-position: 200% 0;
  }

  to {
    background-position: -200% 0;
  }
}
</style>