const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User")

module.exports = class App {
    static #users = []

    static findUser(email) {
        const user = this.#users.find(u => u.email === email)
        return user ?? null //se n existir, sera mostrado um valor nulo
    }

    static newUser(email, fullname) {
        const userExist = App.findUser(email)
        if (!userExist) {//Caso n exista ninguem com esse email, então sera criado um novo usuario
            this.#users.push(new User(email, fullname))
        }
    }

    static deposit(email, value) {
        const user = App.findUser(email)
        if (user) {// Se o user existe, sera feito um deposito
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static transfer(fromUserEmail, toUserEmail, value) {
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if (fromUser && toUser) {//Caso o user existe, sera feita a transferencia
            const newTransfer = new Transfer(fromUser, toUser, value)
            fromUser.account.addTransfer(newTransfer)
            toUser.account.addTransfer(newTransfer)
        }
    }

    static loan(email, value, numberOfInstallment) {
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan(value, numberOfInstallment)
            user.account.addLoan(newLoan)
        }
    }

    static changeFee(newFee) {
        Loan.fee = newFee //Com o Loan.fee, estou chamando o set q foi criado na class Loan
    }
}