const Character = require("./character");

class Warrior extends Character {
    constructor(name, life, attack, defense, shield) {
        super(name, life, attack, defense)
        this.shield = shield
        this.mode = "Attacking"
    }

    damage(target) {
        if (this.mode === "Attacking") {
            super.damage(target) //Estou deckarando o metodo usado na SuperClass
        }
    }

    switchMode() {
        if (this.mode === "Attacking") {
            this.mode = "Defending"
            this.defense += this.shield
        } else {
            this.mode = "Attacking"
            this.defense -= this.shield
        }
    }
}

module.exports = Warrior