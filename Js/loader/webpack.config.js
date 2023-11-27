const MiniCssExtractPlugin = require("mini-css-extract-plugin") //Eu instalei pelo npm e agora estou baixando o plugin

module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/, //Foi instalado um loader para o css, então para utiliza-lo apenas para arquivos css é necessário criar essa estrutura, o test é para  ideintificar quais arquivos serão testados por esse loader, e usando uma expressão regular q pode ser utilizada para testar strings, mas estão sendo aplicadas para procurar apenas arquivos com a extensão .css

            use: [MiniCssExtractPlugin.loader, 'css-loader'] //O use é usado para o webpack saber quais loader serão usados / esse plugin possui um loader integrado por isso q inserir ele dessa forma, a função dele vai ser separar o css do js e cada um ter os seus arquivos
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}

//Dessa forma, o webpack irá juntar tanto o Js como o Css, não será necessário linkar o css pois ele ja vaie star junto com o js