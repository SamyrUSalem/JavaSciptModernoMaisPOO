//Usando o export, possuo a capacidade de exportar essas funções para outros doc js, e faço com q esse atual vire um modulo
export function label(attributes) {
    const element = document.createElement('label')
    //Dessa maneira, ela irá atribuir para esse elemento q esta sendo criado, os atributos q iremos passar
    Object.assign(element, attributes)
    return element
}

export function input(attributes) {
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
}

export function br() {
    const element = document.createElement('br')
    return element
}