export class Component {
    #element
    constructor(tag, parent, options) {
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build() //Como essa função n vai ter parametro, mas vai utilizar as informações acima então irei declarara-la aqui
    }

    getElement() {
        return this.#element //É necessário fazer isso, pq como o element esta encapsulado n podemos ler e nem alterar o seu valor, mas dessa forma poderemos, e com isso será possivel trabalhar com ele no metodo render
    }

    build() {
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options) //Usando o Object, ele pegara todas as opções q forem passadas e incluira dentro do elemento
        return this //Quando retorno a instancia, é possivel trabalhara com outros metodos como um array q é capaz de por ex: arr.map().filter() etc... Vai ser possivel trbalhar dessa forma
    }

    render() {
        if (this.parent instanceof Component) { //Estou realizando uma verificação, caso o parent seja uma instancia do component, o element sera inlcuido
            this.parent.getElement().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element) //Dessa forma, caso n seja uma instancia ira ser uma string, e com o querrySelector seja feito uma busca por exemplo do ID
        }
    }
}