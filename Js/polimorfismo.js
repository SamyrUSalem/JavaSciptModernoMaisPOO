//O polimorfismo é o ato de um objeto poder possuir diferentes formas, no Js seria como uma classe herdar os metodos da classe mae, mas esse metodo seria reescrito ainda iria ser o mesmo mas agiria de uma forma diferente

class Vehicle {
    move() {
        console.log("O veiculo esta em movimento") //Esse seria um exemplo de polimorfismo, duas classes herdando um metedo da superClass, mas utilizando esse metodo de outra forma
    }
}

class Car extends Vehicle {
    move() {
        console.log("O carro esta em movimento")
    }
}
class Plane extends Vehicle {
    move(speed) {
        console.log(`O avião esta voando em ${speed} km/h`)
    }
}

const onix = new Car()
const air = new Plane()

onix.move()
air.move(1000)