class Account {
    //Dessa forma, estou tonnando esses satributos privados(encapsulamento) eles so podem ser alterados dentro da classe, isso é muito usado quando n queremos que o usuario altere um certo atributo, quando existe um metodo principal e outros secundarios q sao usados apenas para compor o principal, mas sozinhos n serão usados pelo usuario, então serão privados, entre outros...
    #password
    #balance = 0 //Estou predefinindo um valor nesse atributo privado
    constructor(user) {
        this.name = user.name
        this.#password = user.password
    }

    getBalance(name, password) { //Com essa função, caso tenha o name e password certo o balance sera mostrado, mas n podera ser alterado
        if (this.#authenticate(name, password)) {
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(name, password) { //Esse seria uma função secundaria usada para compor a principa;
        return this.name === name && this.#password === password
    }
}

const user = {
    name: "Jota",
    password: "senha"
}

const myAccount = new Account(user)

console.log(myAccount.getBalance("Jota", "senha"))