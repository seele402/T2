import { createRouter, createWebHistory } from 'vue-router';
import EmptyPage from '@/components/EmptyPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'advantages' },
    },
    {
      path: '/advantages',
      name: 'advantages',
      component: EmptyPage,
    },
    {
      path: '/fares',
      name: 'fares',
      component: EmptyPage,
    },
    {
      path: '/sales',
      name: 'sales',
      component: EmptyPage,
    },
    {
      path: '/promo',
      name: 'promo',
      component: EmptyPage,
    },
    {
      path: '/esim',
      name: 'esim',
      component: EmptyPage,
    },
    {
      path: '/add-new',
      name: 'add-new',
      component: EmptyPage,
    },
  ],
});

export default router;
