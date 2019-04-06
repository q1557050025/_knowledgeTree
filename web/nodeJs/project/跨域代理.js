const request = require('request')

// request('https://news-at.zhihu.com/api/4/news/latest', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

const http = require('http');

const hostname = '127.0.0.1';
const imgPort = 3001;
const port = 3000;

const apiServe = http.createServer((req, res) => {
	const url = 'https://news-at.zhihu.com/api/4' + req.url;
	const options = {
		url: url 
	};
	function callback (error, response, body) {
		if(!error && response.statusCode === 200) {
			res.setHeader('content-Type', 'text/plain;charset=UTF-8');
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.end(body);
		}
	}
	request.get(options, callback);
})

apiServe.listen(port, hostname, () => {
	console.log(`'http://${hostname}:${port}/'`)
})

const imgServe = http.createServer((req, res) => {
	const url = req.url.split('/img/')[1];
	const options = {
		url: url ,
		encoding: null
	};
	function callback (error, response, body) {
		if(!error && response.statusCode === 200) {
			const contentType = response.headers['content-type'];
			res.setHeader('content-Type', 'text/plain;charset=UTF-8');
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.end(body);
		}
	}
	request.get(options, callback);
})

imgServe.listen(imgPort, hostname, () => {
	console.log(`'http://${hostname}:${imgPort}/'`)
})
