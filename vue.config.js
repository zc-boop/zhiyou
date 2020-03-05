module.exports = {
    publicPath: '', /*相对于 HTML 页面（目录相同）*/
    devServer: {
        open: true
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 75
                    })
                ]
            }
        }
    },
};
