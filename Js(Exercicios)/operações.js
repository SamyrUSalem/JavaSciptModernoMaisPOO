const aritmetica = (...media) => {
    const value = media.reduce((acumulador, atual) => acumulador + atual, 0);

    return value / media.length
}

console.log(`O valor da média é ${aritmetica(2, 2, 2, 22, 2, 2)}`)

const ponderada = (...ponderada) => {
    //Estou realizando a ponderação, coloquei um paramentro q receb era a soma toal e desestruturei o outro q seria um objeto e estou utilizando apenas as chaves deles, e o operador de coalescência esta sendo usado para adicionar um valor padrão, caso o usuario n insira nenhum
    const sum = ponderada.reduce((all, { weight, n }) => all + (n * (weight ?? 1)), 0);
    //Os pesos estão sendo somados, estou buscando dentro do obj a propriedade weight que foi criada
    const weightAll = ponderada.reduce((all, w) => all + (w.weight ?? 1), 0);

    return sum / weightAll
}

console.log(ponderada({ n: 5, weight: 5 }))

const median = (...median) => {
    //Estou criando uma cópia do array median, pois irei utilizar o método sort para fazer com que os números que o usuário colocar fiquei em ordem crescente
    const ordened = [...median].sort((a, b) => a - b)
    //Dessa forma, usando o método floor q faz a busca pelo maior número inteiro, mas caso o número seja decimal ex: 3.5, o floor pegara o 3, ele irá arredondar para baixo então com ele consigo coletar a posição q o número do meio esta
    const middle = Math.floor(ordened.length / 2)
    //Caso o resto da divisão seja diferente de 0, no caso a sequencia é impar será retornado o valor na posição middle q no caso seria o número que se encontra no centro
    if (ordened.length % 2 !== 0) {
        return ordened[middle]
    }
    //Quando a sequencia de números for par, ele terá dois numbers no meio, por conta disso tenho que coletar os dois e fazer a média, usando a const middle consigo coletar o segundo elemento do meio, para buscar o primeiro preciso apenas subtrair por 1
    const ElementOne = ordened[middle - 1];
    const ElementTwo = ordened[middle]

    return aritmetica(ElementOne, ElementTwo)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

const mode = (...numbers) => {
    //O map será usado para modificar o array numbers
    const quantities = numbers.map((n) => [
        n,
        //Dessa maneira, se o n for igual ao numbers, será armazenado e usando o length será possivel adquirir a quantidade, então essa função irá coletar a quantidade de x q determinado número aparece.
        numbers.filter((numbers) => n === numbers).length
    ])
    //Dessa forma, estou ordenanndo os arrays de forma decrescente, estou usando o [1] pois não são números, no caso é um array bidimensional então preciso usar as posições para definir qual elemento quero na frente, nesse exemplo eu quero q a quantidade fique na frente
    quantities.sort((a, b) => b[1] - a[1])

    //Com isso, estou retornando o primeiro elemento q esta no array, pois ele é aquele que foi repetido mais vezes
    return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)