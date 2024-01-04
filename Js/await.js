async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject("Need be a Number")
    }
    return a + b
}

async function execute() {
    try {//Dessa forma, que é tratado os erros quando utilizamos o await
        const value = await asyncSum(null, 10) //O await(só funciona em function async) faz com que o código espere o valor da Promise, seria um método mais rápido e mais organizado para identificar alguns resultados, inves de ficar utilizando then()
        console.log(value)
    }
    catch (err) {
        console.log(err) //O catch ira capturar o error q esta no reject
    }
}


execute()