const routers = [
	{
		path: '/list',
		meta: {
			title: '商品列表'
		},
		component: (resolve) => require(['./views/list.vue'], resolve)
	},
	{
		path: '/product/:id',
		meta: {
			title: '产品列表'
		},
		component: (resolve) => require(['./views/product.vue'], resolve)
	},
	{
		path: '*',
		redirect: '/list' 
	},
]

export default routers;