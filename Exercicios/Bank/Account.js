module.exports = class Account {
    #balance
    constructor(user) {
        this.owner = user
        this.#balance = 0
        this.tranfer = []
        this.deposit = []
        this.loans = []
    }

    get balance() {
        return this.#balance
    }

    addDeposit(deposit) {
        this.#balance += deposit.value //Esse método ja ira receber uma instancia da class Deposit, por isso utilizo o ".value"
        this.deposit.push(deposit)
    }

    addLoan(Loan) {
        this.#balance += Loan.value //Esse método ja ira receber uma instancia da class Loan, por isso utilizo o ".value"
        this.loans.push(Loan)
    }

    addTransfer(transfer) {
        if (transfer.toUser.email === this.owner.email) {//caso seja o mesmo email, então seria a mesma pessoa q esta fazendo a transferencia
            this.#balance += transfer.value
            this.tranfer.push(transfer)
        } else if (transfer.fromUser.email === this.owner.email) {//Caso n seja para o mesmo usuário, então o valor sera descontado
            this.#balance -= transfer.value
            this.tranfer.push(transfer)
        }
    }
}