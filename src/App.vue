<template>
  <div class="main-container">
    <Header :isMobile="isMobile" />
    <MenuBlock v-if="menuStore.isMenuOpen && isMobile" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/TheHeader.vue';
import MenuBlock from './components/MenuBlock.vue';
import { useMenuStore } from '@/stores/menu';
import { onMounted, computed, ref, watch, onUnmounted } from 'vue';

const menuStore = useMenuStore();
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value <= 1285);

onMounted(() => {
  window.onresize = () => windowWidth.value = window.innerWidth;
});

onUnmounted(() => {
  window.onresize = null;
});

watch(isMobile, () => {
  if (!isMobile.value && menuStore.isMenuOpen) menuStore.toggle();
})
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
