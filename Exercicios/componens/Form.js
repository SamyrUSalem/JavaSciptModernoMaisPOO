import { Component } from "./Component.js";

export class Form extends Component {
    constructor(parent, options) {
        super("form", parent, options)
    }

    addChildren(...children) {
        children.forEach(child => this.getElement().appendChild(child.getElement())) //O objetivo dessa função é incluir diversos filhos dentro do elemento html q é referenciado pelo getElement(), foi utilizado um forEach pois podem ser indeterminados elementos, e a arrow function foi usada pq com ela é possivel usar o this referenciando o elemento, se fosse uma function normal n daria certo devido ao fato da função possuir o seu proprio this
    }
}