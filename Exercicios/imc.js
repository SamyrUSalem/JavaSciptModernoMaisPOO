function imc(weight, height) {
    return new Promise((resolve, reject) => {
        if (typeof weight !== "number" || typeof height !== "number") {
            reject("Need be a number!")
        } else {
            resolve(weight / (height * height))
        }
    })
}

function showImcResult(weight, height) {
    imc(weight, height).then((result) => {
        console.log(`IMC: ${result}`)
        if (result < 18.5) {
            console.log("Resultado: Magreza")
        } else if (result < 25) {
            console.log("Resultado: Normal")
        } else if (result < 30) {
            console.log("Rsultado: SobrePreso")
        } else if (result < 40) {
            console.log("Resultado: Obesidade")
        } else {
            console.log("Resultado: Obesidade Grave")
        }
    }).catch((err) => {
        console.log(err)
    })

    console.log("Processando...")
}

showImcResult(71, 1.74)