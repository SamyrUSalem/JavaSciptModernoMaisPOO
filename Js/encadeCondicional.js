const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
        name: "Mary",
        address: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "998765432"
    }
}

// Usando dessa forma "?.", será feito uma validação o sistema irá verificar se a propriedade realmente existe, com isso evitará erro, pois caso fosse só o ponto normal daria um erro já q o phone não esta referenciado nessa ordem mas inves disso acontecer o valor retornado é "undefined"
console.log(user?.friends[0]?.phone?.ddd)


let a = 0

//Esse é o operador de Coalescência Nula, ele é responsável por fazer uma verificação, o mesmo começa a ser executado da esquerda para direita então caso o valor seja null ou undefined será pulado para o da direito, então o primeiro valor q n for nenhum desses dois será aquele q retornara, a diferença dele para o & ou ||, seria q esses dois aceitam o "0" como se fosse false, mas esse operador em especifico não, então pode haver alguma situação q será útil
let b = a ?? 30

let c = null ?? 10