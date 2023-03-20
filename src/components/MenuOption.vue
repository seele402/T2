<template>
  <router-link :to="option.routeName" class="option">
    {{ option.text }}
  </router-link>
</template>

<script setup lang="ts">
import type { MenuOption } from '@/types/MenuOption';

defineProps<{
  option: MenuOption;
}>();
</script>

<style lang="scss" scoped>
.option {
  min-height: fit-content;
  display: flex;
  align-self: center;
  font-family: Tele2;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #7C8792;
  padding-bottom: 15px;
  padding-top: 13px;

  &:hover {
    border-bottom: solid 2px #3e4246;
    color: #3e4246;
  }
}

.router-link-active {
  display: flex;
  padding-bottom: 15px;
  padding-top: 13px;
  align-self: center;
  font-family: Tele2;
  border-bottom: solid 2px #1F2229;
  color: #1F2229;
}
</style>
