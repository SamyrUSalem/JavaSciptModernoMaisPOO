function sum(a, b) {
    const firstNumber = Number(a) //Estou convertendo os valores dos paramentros para numero
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {//Estou verirficando se o valor é um NaN (Not a number)
        throw new Error('arguments must be two numbers')//Caso seja, sera lançado um error, "throw" é lançar
    }

    return firstNumber + secondNumber
}

try { //O try seria como, ele ira tentar executar essas linhas de codigo, caso ocorra um error o catch é executado(A mensagem do catch sera apresentada, na linha q ocorreu o error). Dessa forma, é possivel utilizar um plano B caso ocorra um error, pois o normal seria o sistema parar todo mas utilizando o try e o catch, sera possivel continuar executando
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    console.log(sum(undefined, 22))
    console.log(sum(18, "0"))
    console.log(sum(39, null))
    console.log(sum(13, "zero"))
} catch (error) { //É possivel utilizar um parametro no catch, q seria o error q foi capturado no try
    console.log("Error")
    console.log(error.message) //É possível inserir o ".message", para apenas aparecer a mensagem do error(Aquela q foi digitada no if)
} finally {
    console.log("Finished") //O finally seria um bloco q sempre será executado, independente de ter ocorrido um error ou não
}

console.log("Teste") //Assim mesmo q ocorra um error, essa linha sera executada
