module.exports = {
    publicPath: '', /*相对于 HTML 页面（目录相同）*/
    devServer: {
      /*  open: true,
        proxy: {
            '/api': { // 匹配所有以 '/axios' 开头的请求路径
                target: 'http://120.79.222.144', // 代理目标的基础路径
                changeOrigin: true, // 支持跨域
                ws: true,
                pathRewrite: {// 重写路径 : 去掉路径中开头的 '/axios'
                    '^/api': ''
                }
            }
        },*/
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem-exclude')({
                        remUnit: 75,
                        exclude: /node_modules|folder_name/i
                    })
                ]
            }
        }
    },
};
