const Address = require("./Address")

class Person {
    constructor(name, address) {
        this.name = name
        this.address = address
        // this.address = new Address("Rua", "7", "algo"), essa seria outra forma de realizar a associação, com isso no index.js, n seria mais necessário importar a class Address e todas as infformação de endereço seriam inseridas diretamente no person
    }
}

module.exports = Person