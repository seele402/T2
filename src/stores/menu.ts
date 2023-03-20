import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { MenuOption } from '@/types/MenuOption';

export const useMenuStore = defineStore('menu', () => {
  const menuOptions: MenuOption[] = [
    { text: 'Преимущества Tele2', routeName: 'advantages' },
    { text: 'Тарифы', routeName: 'fares' },
    { text: 'Акции и спецпредложения', routeName: 'sales' },
    { text: 'Промотариф Tele2', routeName: 'promo' },
    { text: 'Технология eSIM', routeName: 'esim' },
    { text: 'Подключение нового абонента', routeName: 'add-new' },
  ];

  const selectedOption = ref(menuOptions[0]);

  const isMenuOpen = ref(false);

  const toggle = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  return {
    selectedOption,
    menuOptions,
    isMenuOpen,
    toggle,
  };
});
