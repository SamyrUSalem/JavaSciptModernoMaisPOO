async function imc(weight, height) {
    if (typeof weight !== "number" || typeof height !== "number") {
        return Promise.reject("Need be a number!")
    } else {
        return weight / (height * height)
    }
}

async function showImcResult(weight, height) {
    try {
        console.log("Processando...")

        const value = await imc(weight, height)

        console.log(`IMC: ${value}`)

        if (value < 18.5) {
            console.log("Resultado: Magreza")
        } else if (value < 25) {
            console.log("Resultado: Normal")
        } else if (value < 30) {
            console.log("Rsultado: SobrePreso")
        } else if (value < 40) {
            console.log("Resultado: Obesidade")
        } else {
            console.log("Resultado: Obesidade Grave")
        }
    } catch (err) {
        console.log(err)
    }

}

showImcResult(71, 1.74)