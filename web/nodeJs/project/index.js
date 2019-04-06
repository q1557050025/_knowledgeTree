const request = require('request')
const fs = require('fs')


request('https://news-at.zhihu.com/api/4/news/latest').on('response',(response) => {
	console.log(response)
	fs.createWriteStream('tests.js')
	fs.writeFile('tes1ts.js', response, () => {})
})