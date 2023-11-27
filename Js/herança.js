class Property {
    constructor(area, price) {
        this.area = area
        this.price = price
    }

    squadMeter() {
        return this.area / this.price
    }
}

class Apartment extends Property { } // Usando o extends é possivel fazer com que a classe Apartment herde tanto os atributos como os metodos da class Property

const land = new Property(1000, 30000)
const apt = new Apartment(2000, 30000)

class House extends Property {
    constructor(number, area, price) { //É necessário referencia os paramentros da classe mae (caso queira incluir um atributo diferente na classe filho), para o usuario poder utiliza-las
        super(area, price) //Usando o super mais os parametros da classe mae, sera meio q puxado o constructos da superClass
        this.number = number
    }
}

const house = new House("10", 1000, 50000)

console.log(land)
console.log(apt.squadMeter())
console.log(house)