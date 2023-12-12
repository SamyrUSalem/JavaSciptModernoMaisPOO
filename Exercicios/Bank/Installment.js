module.exports = class Installment {
    constructor(value, number) {
        this.value = value //Valor da parcela
        this.number = number //Número da parcela
        this.status = "pending"
    }
}