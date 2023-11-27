class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (this.email == email && this.password == password) {
            alert("Certo!")
        } else {
            alert("Error")
        }
    }
}

const user = new User("Samyr", "ola@hotmail.com", "1234")


console.log(user, user.login("ola@hotmail.com", "1234"))

class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantities) {
        return this.inStock += quantities
    }

    calculateDiscount(descount) {
        const value = this.price * (descount / 100)

        return (this.price -= value)
    }
}
2
const p = new Product("Gel", "Muito Usado", 20)

console.log(p)

console.log(p.addToStock(5))

console.log(p.calculateDiscount(10))

console.log(p)

