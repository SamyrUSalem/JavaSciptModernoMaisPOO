import { Component } from "./Component.js";

export class Label extends Component {
    constructor(text, parent, options) {
        super("label", parent, Object.assign({}, options, { textContent: text })) //Como quero q o text seja uma das opções q sera incluida na label, usei o Object com um objeto vazio para armazenar as opções e depois criei outro objeto com uma chave q possui o nome da propriedade q ira inserir o text
    }
}

