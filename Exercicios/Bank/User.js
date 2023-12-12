const Account = require("./Account")

module.exports = class User {
    constructor(email, fullname) {
        this.email = email
        this.fullname = fullname
        this.account = new Account(this) //Estou usando como parametro, a propria instancia q esta sendo criado pela class User
    }
}