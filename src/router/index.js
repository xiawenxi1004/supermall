import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
Vue.use(VueRouter)

const routes =[
	{
		path: '',
		redirect: '/home'
	},
	{
		path:'/home',
		component: Home
	},{
		path:'/cart',
		component: Cart
	}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router