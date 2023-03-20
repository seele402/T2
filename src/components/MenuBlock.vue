<template>
  <div class="menu-container">
    <MenuOption :option="option" v-for="option in menuStore.menuOptions" :key="option.routeName"
      @click="menuStore.toggle()" class="option-container" />
    <div class="location">Москва и область</div>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';
import MenuOption from './MenuOption.vue';

const menuStore = useMenuStore();
</script>

<style lang="scss" scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 24px;
  box-sizing: border-box;
}

.option-container {
  display: flex;
  width: calc(100% - 30px);
}

.option {
  display: flex;
  align-self: center;
  font-family: Tele2Bold;
  font-size: 16px;
  line-height: 22px;
  font-weight: 800;
  border-bottom: solid 1px #EDEDED;
  color: #959597;
  padding-bottom: 8px;
  padding-top: 0px;
  margin-bottom: 16px;

  &:hover {
    border-bottom: solid 1px #EDEDED;
    color: #959597;
  }
}

.router-link-active {
  display: flex;
  align-self: center;
  padding-bottom: 8px;
  padding-top: 0px;
  font-family: Tele2Bold;
  border-bottom: solid 1px #EDEDED;
  color: #959597;
}

.location {
  &::before {
    content: url('@/assets/location.svg');
    margin-top: 4px;
  }

  cursor: pointer;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #959597;
  font-family: "Tele2";
  background-color: #F3F5F6;
  padding: 11px 15px;
}
</style>
