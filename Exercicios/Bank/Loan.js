const Installment = require("./Installment")

module.exports = class Loan {
    static #fee = 1.05 // Esse valo equivale a 5%

    constructor(value, installment) {
        this.value = value
        this.installment = []
        for (let i = 1; i <= installment; i++) { //Com esse for, sera possivel criar varias instancias da Class Installmente(parcelas)
            this.installment.push(new Installment((value * Loan.#fee) / installment, i))//O "i" esta referenciando o número da parcela q esta sendo criada
        }
        this.createdAt = new Date()
    }

    static get fee() {
        return Loan.#fee
    }

    static set fee(newFee) {
        Loan.#fee = 1 + (newFee / 100) //dessa forma, estou fazendo com que todos os valores fiquem no mesmo padrão q esta acima
    }
}