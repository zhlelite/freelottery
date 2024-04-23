import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
	routes: [{
			path: '/',
			redirect: '/lottery' //重定向
		},
		{
			path: '/lottery',
			name: 'lottery',
			meta: {
				title: '幸运大奖',
				index: 0
			},
			component: () => import('@/views/lottery.vue')
		}
	]
})
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})
export default router
