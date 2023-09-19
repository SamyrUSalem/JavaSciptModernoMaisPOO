//Dessa forma, estou importando as funções q estão nesse respectivo caminho
import { label, input, br } from "./functions.js"
//Estou atribuindo os atributos
console.log(label({ for: 'fullname', textContent: 'Nome Completo' }))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...' }))
console.log(br())