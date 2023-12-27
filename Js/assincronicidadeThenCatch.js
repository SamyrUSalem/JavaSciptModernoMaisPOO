//As Promise possuem 3 modos: Reject, Pending, Resolved
function sistem() {//Na maior parte das vezes, as Promise seguem esse padrão, de serem utilizadas dentro de uma function
    return new Promise((resolve, reject) => {//A Promise possibilita trabalhar com as funções de modo assincrono, aquilo que for executado mais rapido será mostrado primeiro
        console.log("Executando!")
        if (true) {
            reject("Error") //O Reject seria uma forma de encerrar com um error, ex: Se o usuario digitar algo fora do padrão, a Promise sera encerrada de forma incorreta
        }
        setTimeout(() => {
            // console.log("Teste")
            resolve(true) //É utilizado para encerrar a função
        }, 1000 * 2)
    })
}

//Abaixo seria a forma de tratar o encerramento da Promise, e o modo mais utilizado seria esse padrão q seriam ter uma chamada para a função e o encadeamento
sistem().then((result) => { //O Then é utilizado quando deu tudo certo na Promise e a mesma foi Resolved, o parâmetro usado no callback seria o resultado da Promise
    console.log(`deu tudo certo! Resultado: ${result}`)
}).catch((err) => {//O Catch é utilizado quando a mesma foi reject, como o then devolve como resultado a Promise é possivel continuar o encadeamento
    console.log(`Error, devido a ${err}`)
}).finally(() => {//Independente da Prtomise ter sido resolvida ou rejeitada, o finally sera executado
    console.log("Encerramento")
})