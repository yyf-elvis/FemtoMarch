import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue';
import product from '../views/product.vue';
import newsCenter from '../views/newsCenter.vue';
import customerService from '../views/customerService.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/product',
    name: 'product',
    component: product
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
    path: '/news/:id',
    name: 'test',
    component: () => import('../views/dynamicLoader.vue')  // 动态加载器
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