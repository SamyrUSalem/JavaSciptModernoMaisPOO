const Address = require("./Address")
const Person = require("./Person")


const addr = new Address("Pará", "2", "Ponta negra")

const suel = new Person("Suel", addr) //Nesse momento esta sendo feito uma associação, que seria quando uma intancia de uma classe depende da instancia de outra

console.log(suel)
console.log(suel.address.fullAddress())