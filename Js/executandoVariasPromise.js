async function asyncSum(a, b) { //O async seria a maneira mais moderna e pratica para trabalhar com as Promise, pq o mesmo automaticamente cria uma Promise então n é necessário fazer new Promise, criar uma arrow function etc..., pq o retonor dele ja seria uma
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject("Need be a Number") //Dessa forma, é utilizado o reject
    }
    return a + b //O return seria o resolve q é utilizado quando usamos aquela maneira mais antiga, como o ex abaixo
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(null, 10)

//Esse Promise ira realizar uma verificação, as duas Promises serão executadas de forma independente mas caso uma de erro, ele vai fazer com que o sistema todo de erro. E o mesmo recebe um array com os valores das Promise e retorna uma nova promise
Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results) //Esse paramentro é um array com os resultados das Promise
}).catch(err => {
    console.log(err)
})

// const numbers = [4, 9, 5, 13, 77]

// function asyncSquare(x) {
//     return new Promise((resolve, reject) => {
//         resolve(x * x)
//     })
// }

// Promise.all(numbers.map(number => asyncSquare(number))).then(squares => { //O Map esta executando a Promise em cada Item do Array e como resultado será devolvido um array de Promise, mas caso uma delas desse error iria fazer com que todo o codigo desse error
//     console.log(squares)
// })