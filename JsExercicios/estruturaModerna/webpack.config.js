const path = require('path')

module.exports = {
    devServer: { //O devServer é a configuração para o webpack-dev-server funcionar, seria um server igual ao live server, para a gente poder ver as atualizações na pagina ao vivo, para instalar basta usa o comando 'npm i -D webpack-dev-server'
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    entry: {
        index: './src/index.js'
    },
    mode: 'production', //Quando o mode é production, ele empacota tudo e minimifica também, deixando o código apenas em uma linha para faze-lo carregar mais rapido e otimizado
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    output: {
        filename: '[name].min.js'                      //O min significa 'mininficado'
    }
}