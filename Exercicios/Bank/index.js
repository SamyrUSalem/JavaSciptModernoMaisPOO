const App = require("./App")

App.newUser("ruben@gmail.com", "Ruben Queiroz")
App.newUser("lucca@gmail.com", "Lucca Edu")
App.newUser("julia@gmail.com", "Julia Vasconceles")

App.deposit("ruben@gmail.com", 100)

App.transfer("ruben@gmail.com", "lucca@gmail.com", 20)

App.changeFee(10)
App.loan("julia@gmail.com", 2000, 24)

console.log(App.findUser("ruben@gmail.com"))
console.log(App.findUser("ruben@gmail.com").account)
console.log(App.findUser("lucca@gmail.com"))
console.log(App.findUser("lucca@gmail.com").account)
console.log(App.findUser("julia@gmail.com"))
console.log(App.findUser("julia@gmail.com").account)
console.log(App.findUser("julia@gmail.com").account.loans[0].installment)