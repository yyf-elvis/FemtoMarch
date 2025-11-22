import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue';
import therapeutic from '../views/therapeutic.vue';
import newsCenter from '../views/newsCenter.vue';
import customerService from '../views/customerService.vue';
import contactUs from '../views/contactUs.vue';
import company from '../views/company.vue';
import culture from '../views/culture.vue';
import career from '../views/career.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/therapeutic',
    name: 'therapeutic',
    component: therapeutic
  },
  {
    path: '/newsCenter',
    name: 'newsCenter',
    component: newsCenter
  },
  {
    path: '/customerService',
    name: 'customerService',
    component: customerService
  },
  {
    path: '/company',
    name: 'company',
    component: company
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: contactUs
  },
  {
    path: '/culture',
    name: 'culture',
    component: culture
  },
  {
    path: '/career',
    name: 'career',
    component: career
  },
  {
    path: '/news/:id',
    name: 'news',
    component: () => import('../views/NewsDetailRouter.vue')  // 动态加载器
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;