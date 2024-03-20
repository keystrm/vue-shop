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
import { ref, onMounted, watch } from 'vue';
import { throttle } from 'lodash'; // Assuming you're using lodash for throttling


const items = ref([]);
const loaderRef = ref(null);
const nextStart = ref(0);

const loadImageForItem = async (itemId) => {
  const imageUrl = `https://picsum.photos/200/300?random=${itemId}`;

  const item = items.value.find(item => item.id === itemId);
  if (item) {
    item.imageUrl = imageUrl;
  }
};

// Throttle function to only allow 1 call per second (1000 milliseconds)
const throttledLoadImageForItem = throttle(loadImageForItem, 1000);

const loadItems = async () => {
  const newItems = Array.from({ length: 10 }, (_, index) => ({
    id: nextStart.value + index,
    imageUrl: null,
  }));

  items.value.push(...newItems);
  nextStart.value += newItems.length;

  newItems.forEach(item => {
    throttledLoadImageForItem(item.id);
  });
};




const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      loadItems();
    }
  },
  { rootMargin: '100px' }
);

onMounted(() => {
  loadItems();
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