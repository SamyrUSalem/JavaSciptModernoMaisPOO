function validateEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {//Caso o email n siga esse modelo, será lançado um error. O \w é para verficar alfanumérico
        const err = new Error('Email invalido')
        err.input = 'email' //dessa forma, irei saber qual foi o input q esta dando errror
        throw err
    }
}

function validatePassword(password) {
    if (
        password.length < 8 ||
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/[0-9]/) ||
        !password.match(/[^a-zA-Z0-9\s]/)//para encontrar caracteres especiais, o "^" esta significando quer sera buscado o oposto daquilo que esta dentro do colchete
    ) {
        const err = new Error("Senha invalida")
        err.input = "password"
        throw err
    }
}

function resetStylesForm(inputs) {
    Object.entries(inputs).forEach(([key, value]) => { //Com o Object.entries, estou transformando os valores do userInputs em um array
        value.classList.remove("success", "error")
        document.querySelector(`#${key}-error`).textContent = ""
    })
}

const userInputs = {
    name: document.querySelector("#name"),
    email: document.querySelector("#email"),
    password: document.querySelector("#password")
}

const form = document.querySelector("form")

form.addEventListener("submit", (ev) => {
    ev.preventDefault()
    resetStylesForm(userInputs)
    try {
        userInputs.name.classList.add("success")
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add("success")
        validatePassword(userInputs.password.value)
        userInputs.password.classList.add("success")
    } catch (err) {
        userInputs[err.input].classList.add("error") //Com o err.input poderei saber qual input deu erro e trocar a sua classe
        document.querySelector(`#${err.input}-error`).textContent = err.message //Estou inserindo a mensagem de error no spam
    }
})