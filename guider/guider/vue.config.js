module.exports = {
  devServer : {
    proxy : {
        'http://localhost:3000' : {
            target : 'http://localhost:3000',
            changeOrigin : true
        }
    }
}
}