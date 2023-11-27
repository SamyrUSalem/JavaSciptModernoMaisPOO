const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js', //Como estou dizendo q o ponto de entrrada se chama index.js, ao mesmo tempo digo q o ponto de saida vai se chamar esse, não mais main.js
        hello: './src/hello.js' //Estou inserindo mais um arquivo de entrada
    },
    mode: 'development', //Estou dizendo que irei usar o webpack apenas na parte de desenvolvimento, não em produção
    output: {
        path: path.resolve(__dirname, 'public'), //O output que seria a saida, e o path é o caminho onde desejo armaazenar o código, usando um modulo externo do path eu posso colocar o resolve que seria o caminho absoluto e o __dirname q esta inserindo o caminho para o meu diretorio atual, e inserindo o public, estou dizendo q a saida va para esse diretorio
        filename: '[name].bundle.min.js' //usando o '[name]' vai da para identificar todos os qrquivos de saidas, isso é necessáiro quando tem mais de uma entrada
    }

}