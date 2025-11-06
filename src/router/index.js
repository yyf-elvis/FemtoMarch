import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import index from '../views/index.vue';


const routes = [{
		path: '/',
		name: 'index',
		component: index,
	}
];

// 使用 import.meta.env.BASE_URL 代替 process.env.BASE_URL
const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// 返回顶部
		return {
			top: 0
		};
	},
});

export default router;