function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
}

getAge("2000-09-02").then((age) => {
    return checkAge(age) //Estou dizendo para retorno o resultado dessa função, mas essa function é um Promise então como o then retorna tambem retorna uma Promise, será possivel realizar o encadeamento e inserir outro then mas referente a function checkAge
}).then((over18) => {
    if (over18) {
        console.log("Maior de Idade!")
    } else {
        console.log("Menor de Idade!")
    }
}).catch((err) => {
    console.log(err.message)
})