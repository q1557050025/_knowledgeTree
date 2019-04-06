import Vue from 'Vue';
import VueRouter from 'vue-router';
import Routers from './router.js';
import Vuex from 'vuex';
import App from './app.vue';
import './style.css';
import product_data from './product.js';

Vue.use(VueRouter);
Vue.use(Vuex);

const RouterConfig = {
	mode: 'history',
	routes: Routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title;
	next();
});

router.afterEach((to, from, next) => {
	window.scrollTo(0,0);
});
// 数组排重
function uniqueArray (array) {
    const res = [];
    const json = {};
    for (let i = 0; i < array.length; i++){
        const _self = array[i];
        if(!json[_self]){
            res.push(_self);
            json[_self] = 1;
        }
    }
    return res;
}

const store = new Vuex.Store({
	state: {
		productList: [],
		cartList: [],
	},
	getters: {
		brands: state => {
			//.map返回每次调用函数返回的结果组成的数组
			const brands = state.productList.map(item => item.brand);
			return uniqueArray(brands);
		},
		colors: state => {
			//.map返回每次调用函数返回的结果组成的数组
			const colors = state.productList.map(item => item.color);
			return uniqueArray(colors);
		},
	},
	mutations: {
		setProductList(state, data) {
			state.productList = data;
		},
		addCart(state, id) {
			const isAdded = state.cartList.find(item => item.id);
			if(isAdded) {
				isAdded.count ++;
			} else {
				state.cartList.push({
					id: id,
					count: 1
				})
			}
		}
	},
	actions: {
		getProductList(context) {
			setTimeout(() => {
				context.commit('setProductList', product_data);
			}, 1000);
		}
	}
});

new Vue({
	el: '#app',
	router: router,
	store,
	render: h => {
		return h(App)
	}
});