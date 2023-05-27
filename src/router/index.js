import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
	{
		// will match everything
		path: '*',
		component: () => import('../views/404.vue'),
	},
	{
		path: '/',
		name: 'Home',
		redirect: '/kirish',
	},
	{
		path: '/kirish',
		name: 'Dashboard',
		layout: "dashboard",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/Kirish.vue'),
	},
	{
		path: '/kirish',
		name: 'kirish',
		layout: "dashboard",
		component: () => import('../views/Layout.vue'),
	},
	{
		path: '/author',
		name: 'author',
		layout: "dashboard",
		component: () => import('../views/Tables.vue'),
	},
	{
		path: '/adabiyotlar',
		name: 'adabiyotlar',
		layout: "dashboard",
		component: () => import('../views/Billing.vue'),
	},
	{
		path: '/darslar',
		name: 'Darslar',
		layout: "dashboard",
		component: () => import('../views/RTL.vue'),
		// children: [
		// 	{
		// 		path: ":index",
		// 		component: () => import(/* webpackChunkName: "languages" */ "../views/item.vue"),
		// 		name: "items"
		// 	},
		// ]
	},
	{
		path: '/item',
		name: 'items',
		layout: "dashboard",
		component: () => import('../views/item.vue'),
	},
	{
		path: '/rtl',
		name: 'RTL',
		layout: "dashboard-rtl",
		meta: {
			layoutClass: 'dashboard-rtl',
		},
		component: () => import('../views/RTL.vue'),
	},
	{
		path: '/Profile',
		name: 'Profile',
		layout: "dashboard",
		meta: {
			layoutClass: 'layout-profile',
		},
		component: () => import('../views/Profile.vue'),
	},
	{
		path: '/sign-in',
		name: 'Sign-In',
		component: () => import('../views/Sign-In.vue'),
	},
	{
		path: '/sign-up',
		name: 'Sign-Up',
		meta: {
			layoutClass: 'layout-sign-up',
		},
		component: () => import('../views/Sign-Up.vue'),
	},
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;

	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		if ( to.hash ) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
})

export default router
