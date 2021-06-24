module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.pdf$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        }
    },
    // chainWebpack: (config) => {
    //     config.plugins.delete('prefetch')
    //     config.plugins.delete('preload')
    // },
    devServer: {
        proxy: {
            '^/api/': {
                target: 'http://localhost:8000',
                pathRewrite: { "^/api/": "/api/" },
                logLevel: "debug",
                changeOrigin: true
            }
        }
    }
}
