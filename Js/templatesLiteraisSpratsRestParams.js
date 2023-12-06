const n = "Jota"

console.log(`Esse é um template literal, é uma forma diferente de declarar uma string nesse caso usamos a crase, também é possível      aplicar códigos JavaScript nele, dessa forma: Menu nome é ${n}, usando o simbolo do dolar e chaves.
    Com esse template tambem podemos fazer uma quebra de linha automatica, sem precisa do contra barra n`)

//Abaixo é uma arrow function, seria uma função anônima só q de uma maneira mais prática de ser usada e de uma forma q o código ficara masi entendivel, organizado e mais limpo, n é preciso digitat "function" apenas os parenteses com os parâmetros e o sinar "=>" e caso o código seja apenas de uma linha, tambémn n é preciso uasr o return e as chaves(caso possua apenas um parâmentro, também n é necessário usar os parenteses)
const arrow = (a, b) => a + b

console.log(`O valor da soma é: ${arrow(5, 5)}`)

//As arrow functions são muitos uadas juntos com as High orders functions, como o exemplo abaixo

//Quero filtrar apenas as cidades que começam com a letra P
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

//A High Order Function abaixo será executada em todos os componestes dentro do array, caso o dado na posição 0 seja igual ao P, será coletado
const firtsLetterP = towns.filter(p => p[0] === "P")

console.log(firtsLetterP)

//Esse é o operador sprats, ele espalha os elementos de todos os componentes iteraveis como um array, usando os 3 pontos e o nome do elemento, ele irá pegar os valores q tem dentro dele e separar, ex: const test = [n1, n2]/  const t1 = [...test] os valores do test serão enviados para o t1 separados se fossem strings ficaria = n 1 n 2.

//Uma utilidade dele, seria o exemplo abaixo q no caso é realizar uma cópia de um array, pois podemos coletar os dados de um e passar para outro, podemos passar vários parâmetros de um elemento de uma vez só
const townsCopy = [...towns]
townsCopy.push("teste")
console.log({ townsCopy, towns })

//Esse é o rest params, seria uma forma da function poder receber vários parâmetros e trabalhar eles como um array(Os rest params dvem ser inseridos no final, pois ele pode receber diversos valores o programa n saberá dizer quando vai acabar, caso tenha outro parâmetro), conforme o exemplo abaixo:
function sum(...test) {
    //Dessa forma, a função realizará uma soma com todos os elementos do array
    return test.reduce((acumulador, elementoAtual) => acumulador + elementoAtual, 0)//Estou inicializando o acumulador em 0
}
//Como estou usando um rest params, posso utilziar quantos parâmetros quiser
console.log(sum(2, 2, 2, 2, 2, 2, 2, 2, 2,))


const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

//Estou desestruturando um objeto, dessa maneira conseguiu coletar de maneira especifica a chave q quero desse objeto, isso facilita para deixar o código mais organizado e para criar uma variável a parte desse elemento, para n ter q utilizar ex: person.job person.name, mas como  é um obj os nomes das chaves não alteram
const { name, job, parents } = person

//Dessa forma, estou desestruturando um array diferente do objeto, o nome pode ser diferente tenho a possiblidade de colocar o nome que quiser, mas é importante ficar atento na posição, o primeiro elemento representa o primeiro do array, e o segundo tambem, etc...
const [father, mother] = parents

//È possível usar a desestruturação em functions, como abaixo
function user({ name, job, parents }) {
    const id = Math.floor(Math.random() * 9999)
    //Usando a desestruturação, eu consigo inserir as chaves desse objeto de uma forma mais pratica, inves de colocar o parâmetro ex: person e name: person.name
    return {
        id,
        name,
        job,
        parents
    }

}

const Ola = user(person)
console.log(Ola)


