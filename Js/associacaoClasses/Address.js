class Address {
    constructor(street, number, neighborhood) {
        this.street = street
        this.number = number
        this.neighborhood = neighborhood
    }

    fullAddress() {
        return `Rua ${this.street}, Número: ${this.number}, Bairro: ${this.neighborhood}`
    }
}


module.exports = Address