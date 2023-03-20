<template>
  <nav class="header-container">
    <div class="header-top-half">
      <img class="logo" src="@/assets/Logo.svg" alt="Logo">

      <div v-if="!menuStore.isMenuOpen" class="right-section">
        <div class="location">Москва и область</div>

        <div class="notification-box">
          <span class="notification-indicator" />
          <img class="notification-bell" src="@/assets/notification-bell.svg" />
        </div>
        <button @click="toggleMenu" class="button-hamburger" />
      </div>
      <button v-else class="button-close" @click="toggleMenu" />
    </div>

    <HeaderNavigation v-if="!isMobile" />
  </nav>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';
import HeaderNavigation from './HeaderNavigation.vue';

defineProps<{
  isMobile: boolean;
}>();

const menuStore = useMenuStore();
const { toggle: toggleMenu } = useMenuStore();
</script>

<style lang="scss" scoped>
.header-container {
  width: 100vw;
}

.header-top-half {
  display: flex;
  height: 45px;
  padding: 9px 18px;
  justify-content: space-between;
  background-color: #1f2229;
  box-sizing: border-box;
}

.logo {
  width: 48px;
  height: 18px;
  align-self: center;
}

.location {
  display: none;
}

.right-section {
  height: 27px;
  display: flex;
  justify-self: flex-end;
  align-self: center;
  gap: 18px;


}

.button-hamburger {
  width: 18px;
  height: 14px;
  background: center no-repeat url('@/assets/hamburger.svg');
  align-self: center;
}

.button-close {
  align-self: center;
  background: center no-repeat url('@/assets/close.svg');
  width: 24px;
  height: 24px;
}

.notification-box {
  align-self: center;
  text-align: center;
  width: 20px;
  height: 20px;
  align-self: center;
  cursor: pointer;
}

.notification-bell {
  align-self: center;
  width: 20px;
  height: 20px;
  animation: bell 1s 1s both infinite;

  * {
    display: block;
    margin: 0 auto;
    background-color: #fff;
  }
}

.notification-indicator {
  position: absolute;
  transform: translateX(10px);
  z-index: 1;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #3FCBFF;
  border: solid 2px #1f2229;
}

@keyframes bell {
  0% {
    transform: rotate(0);
  }

  10% {
    transform: rotate(30deg);
  }

  20% {
    transform: rotate(0);
  }

  80% {
    transform: rotate(0);
  }

  90% {
    transform: rotate(-30deg);
  }

  100% {
    transform: rotate(0);
  }
}

@media (min-width: 1285px) {
  .logo {
    width: 59px;
    height: 23px;
    align-self: center;
  }

  .header-top-half {
    height: 40px;
    padding: 0px 162px;
  }

  .button-hamburger {
    display: none;
  }

  .right-section {
    gap: 32px;
  }

  .location {
    display: flex;
    align-items: center;
    align-self: center;
    cursor: pointer;
    color: #7C8792;
    font-family: "Tele2";
    font-size: 14px;

    &::before {
      display: flex;
      content: url('@/assets/location.svg');
      width: 22px;
      height: 22px;
      padding-right: 9px;
    }
  }
}
</style>
