function showCountrie(country) {
    const card = document.createElement("div")
    card.classList.add("country")

    const countryName = country.name.common //Dessa maneira, estou coletando o nome do país, é usado esse formato para a coleta pois é aquele que esta na documentação da API

    const h2 = document.createElement("h2")
    h2.textContent = countryName

    const flag = document.createElement("img")
    flag.src = country.flags.svg //Caminho especificado no doc da API
    flag.alt = countryName

    card.append(h2, flag)

    document.querySelector("#countries").append(card)
}



async function getCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all") //O fetch é usado para realizar uma requisição https (API), estou me comunicando com a API e a variavel ira armazenar a resposta
    const countries = await response.json() //Dessa forma, estou convertendo para um valor que o Js entenda

    countries.forEach(showCountrie)
}

getCountries()