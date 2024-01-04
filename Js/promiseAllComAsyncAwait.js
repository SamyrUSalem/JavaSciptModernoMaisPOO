function waitFor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })

}

const number = [4, 5, 9, 13, 77]

async function execute() {
    console.time("map")//É utlizado para inicar um cronometro, com oo intuito de saber o tempo de execução do código
    const squares = await Promise.all(number.map(async (number) => {//Caso fosse uma functin sincrona, demoraria 10 segundos para executar, pq ja q o array tem 5 elementos o WaitFor seria execuatado 5 vezes, mas como estamos utilizando o método assincrono todos os elementos são executados ao mesmo tempo fazendo com que o sistema seja mais rapido. E como o Promise.all() retorna uma Promise, é possível utilizar o await 
        await waitFor(2) //Essa função vai ser utilizada para simular um sistema q necessita de mais tempo para resolver determinados calculos
        return number * number
    }))

    console.log(squares)

    console.timeEnd("map")//Finalizando o cronometro
}


execute()