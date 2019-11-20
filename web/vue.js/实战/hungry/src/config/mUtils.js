// 获取localStorage
export const getStore = val => {
	if(!val) return
	return JSON.parse(window.localStorage.getItem(val))
}

export const setStore = (key, val) => {
	if(!key) return
	if (typeof val !== 'string') {
		val = JSON.stringify(val)
	}
	return window.localStorage.setItem(key, val)
}

export const removeStore = val => {
	if(!val) return 
	window.localStorage.removeItem(val)
}