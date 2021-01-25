import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardPage from '@/views/DashboardPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DashboardPage
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
