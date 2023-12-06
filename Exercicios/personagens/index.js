const Warrior = require("./Warrior");
const Mage = require("./mage");
const Thief = require("./thief");

const John = new Warrior("John", 50, 10, 15, 10)
const Rimbel = new Mage("Rimbel", 30, 8, 10, 20)
const Lucio = new Thief("Lucio", 30, 15, 5)

console.table({ John, Rimbel, Lucio })
John.switchMode()
Rimbel.damage(John)
Lucio.damage(Rimbel)
John.damage(Lucio)
Rimbel.heal(Rimbel)
console.table({ John, Rimbel, Lucio })