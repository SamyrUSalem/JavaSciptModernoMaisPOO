function Phonenumber(numberStr) {
    const fixedStr = numberStr.replace(/[\sa-zA-Z]/g, "") //Essa função é propia para string, é usado para identificar uma parte da string e substituí-la por outra

    //Estou utilizando as expressões regulares para identificar os elementos que quero substituir, nesse caso estou seleciuonando todos os espaços, letras minusculas e maiusculas, e usando a tag geral para ser em toda a string

    this.countryCode = fixedStr.match(/(?<=\+)\d{1,3}/)[0] //Com o match estou realizando a busca e captura do elemento que precede o "+", que seria o codigo do país e estou coletando esse numero que pode variar de 1 a 3

    this.ddd = fixedStr.match(/(?<=\()\d+(?=\))/)[0] //Estou utilizando o lookahead para buscar os números q precedem e antecedem os parenteses e o "+" é para dizer q sera coletados todos os números independente da quantidade

    this.number = fixedStr.match(/(?<=\)).+/)[0] //Estou coletando todos os elementos que precedem o fechamentos dos parenteses, usando o "." para dizer q é letra, numero, etc... e "+" para falar q são todos
}

console.log(new Phonenumber("+55 (92) 9 8154-3826"))
console.log(new Phonenumber("+765 (92) 9 81dd-3 8 p6"))