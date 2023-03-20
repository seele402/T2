<template>
  <nav class="navigation-container">
    <MenuOption :option="option" v-for="option in menuStore.menuOptions" :key="option.routeName" />
  </nav>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';
import MenuOption from './MenuOption.vue';

const menuStore = useMenuStore();
</script>

<style lang="scss" scoped>
.navigation-container {
  width: calc(100% - 324px);
  display: flex;
  border-bottom: solid 1px #EDEDED;
  gap: 18px;
  height: 47px;
  justify-content: flex-start;
  margin-left: 162px;
}
</style>
