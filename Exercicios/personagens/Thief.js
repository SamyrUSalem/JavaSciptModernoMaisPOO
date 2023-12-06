const Character = require("./character")

class Thief extends Character {
    damage(target) {
        target.life -= (this.attack - target.defense) * 2

    }

}

module.exports = Thief