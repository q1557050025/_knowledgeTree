import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './home.vue'
import about from './about.vue'
import user from './user.vue'
import phone from './phone.vue'
import computer from './computer.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: "/home",
		component: home,
		name: "home",
		children: [
			{
				path: "phone",
				component: phone
			},
			{
				path: "computer",
				component: computer
			},
			{
				path: "",
				component: phone
			}
		]
	},
	{
		path: "/about",
		component: about
	},
	{
		path: "/",
		redirect: '/home'
	},
	{
		path: "/user/:id",
		component: user
	}
]

var router = new VueRouter({
	routes
})

export default router;