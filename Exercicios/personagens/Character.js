class Character {
    constructor(name, life, attack, defense) {
        this.name = name
        this.life = life
        this.attack = attack
        this.defense = defense
    }

    damage(target) {
        target.life -= this.attack - target.defense
    }
}

module.exports = Character