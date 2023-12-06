//O get modifica a forma q podemor ler alguma propriedade, usando condições por exemplo / O set modifica a forma que atribuimos um valor para alguma propriedade
class Wallet {
    #amount
    #user
    constructor() {
        this.#amount = 100.99 * 100 //Dessa forma, apenas numeros inteiros serão armazenados
        console.log(this.#amount)

    }
    get amount() {//O get é clarado igual a um método, com a função abaixo é possível ler o valor privado 
        return this.#amount / 100 //Dessa forma, estou modificando o modo de ver o valor desse atributo privado
    }

    set user(name) { //Com isso, estou utilizando o set para atribuir valor a um atributo privado, visando protege-lo pois essa seria a unica forma de inserir algum valor nele
        if (typeof name === "string") { //Com o set, é possível utilizar condicionais no momento da atribuição
            this.#user = name
        } else {
            console.log("Error, need be a string")
        }
    }

    get user() {
        return this.#user
    }
}

const test = new Wallet()
console.log(test.amount) // A maior diferença entre o get e um método, seria que podemos referencia-lo como uma propriedade(sem os parenteses)

test.user = "Reitor" //O set é como se fosse um método, mas estou utilizando um sinal de '=', como se fosse um atributo para usa-lo
console.log(test.user)

test.user += " Ricardo" //Consigo modificar o valor como uma propriedade, caso fosse um metodo seria um pouco mais dificil realizar essas funções
test.user = 1
console.log(test.user)