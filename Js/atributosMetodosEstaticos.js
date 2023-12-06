//São aqueles que n precisam de instancia para serem chamados, são acessados diretamente pela classe, ex de uso: Quando uma classe precisa q um atributo tenha o mesmo valor para todas as instâncias
class Reservations {
    constructor(guests, room, days) {
        this.guests = guests
        this.room = room
        this.days = days
        this.value = days * Reservations.baseFee // BaseFee seria a taxa para pagar de cada reserva, então seria um valor q n ia alterar, e para chamar esse atributo estatico tive q utilizar a Classe
    }

    static baseFee = 100 // Usando o static consigo declarar um valor estatico, como se fosse uma variavel globaL q pode sr usada em toda a classe Reservations

    static showValue() {//É possivel criar metodos utilizando o static
        console.log(`BaseFee is ${Reservations.baseFee}`)
    }

    static get deluxeFee() { //É possível utilizar o get junto com o static, ele esta modificando o comportamento de leitura baseado no static acima
        return Reservations.baseFee * 10
    }
}

Reservations.showValue()

const guest1 = new Reservations(3, 1, 2)
console.log(guest1)
console.log(Reservations.deluxeFee)