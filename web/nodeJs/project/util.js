import axios from 'axios'

const Util = {
	apiPath: 'http://127.0.0.1:3000'
}

Util.ajax = axios.create({
	baseURL: Util.apiPath
});

Util.ajax.interceptors.response.use(res => {
	return res.data
})

Util.get('news/latest')
	.then(res => {
		console.log(res)
	})
// export default Util;