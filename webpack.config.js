const path = require('path')

module.exports = {
    module: "development",
    entry:'./index.js',
    output:{
        path: path.resolve(__dirname,"public"),
        filename: "main.js"
    },

    target:"web",
    devServer: {
        port: '5000',
        static:["./public"],
        open:true,
        hot:true,
        // livereload:true
    },
    resolve:{
        extensions:[".js", ".jsx", ".json",'.ts']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:"babel-loader",
            }
        ]
    }
}