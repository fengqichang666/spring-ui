import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/login',
			name: 'home',
			component: () => import('@/views/login/index.vue'),
			children: []
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/login/index.vue')
			// children: [
			// 	{
			// 		path: '/login/register',
			// 		name: 'register',
			// 		component: () => import('@/views/login/components/register.vue')
			// 	}
			// ]
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('@/views/login/components/register.vue')
		}
	]
})

export default router
