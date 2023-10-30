const dayjs = require("dayjs"); //Estou importando a função do dayjs

function birthday(date) {
    const birthday = dayjs(date) //Esse parâmetro será a data de aniversário da pessoa
    const today = dayjs() //Dessa forma estou coletando a data de hoje


    const differentInYears = today.diff(birthday, 'year') //Essa função do dayjs a "diff", irá pegar a data q tem na variavel today e fazer a diferencça em anos com a data que tem na variavel birthday
    const nextBir = birthday.add(differentInYears + 1, "year") // Estou adicionando mais um ano para poder saber quando vai ser o próximo aniversário dessa pessoa

    const daysNextBirth = nextBir.diff(today, "day") + 1 // Estou vendo a diferença em dias entreo o dia de hoje, até o próxio aniversário. Quando faltar menos de um dia para o aniversario o código irá exibir que faltam 0 dias,  para corrigir isso é s´ocolcoar o "+1", pois quando faltar menos de um dia, será exibido o 1

    console.log(`Idade: ${differentInYears}`)
    console.log(`Próximo niver: ${nextBir.format("DD/MM/YYYY")}`) //Com o format, posso inserir como quero q aa data seja exibida
    console.log(`Dias para o próximo aniversário: ${daysNextBirth}`)

}

birthday("1995-09-02")