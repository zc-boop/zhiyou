module.exports = {
    publicPath: '', /*相对于 HTML 页面（目录相同）*/
    devServer: {
        open: true
    },
    /* devServer:{
         proxy:{
             '/api': {
                 target: 'http://39.97.33.178', //对应自己的接口
                 changeOrigin: true
             }
         }
     }*/
};
