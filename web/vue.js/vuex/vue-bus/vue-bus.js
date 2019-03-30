const install = function(Vue) {
	const Bus = new Vue({
		methods: {
			// ...args 获取从当前开始的所有参数
			emit(event, ...args) {
				this.$emit(event, ...args);
			},
			on (event, callback) {
				this.$on(event, callback);
			},
			off(event, callback) {
				this.$off(event, callback);
			}
		}
	});
	Vue.prototype.$bus = Bus;
};
export default install;