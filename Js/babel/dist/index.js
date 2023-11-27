"use strict";

var aritmetica = function aritmetica() {
  for (var _len = arguments.length, media = new Array(_len), _key = 0; _key < _len; _key++) {
    media[_key] = arguments[_key];
  }
  var value = media.reduce(function (acumulador, atual) {
    return acumulador + atual;
  }, 0);
  return value / media.length;
};
console.log("O valor da m\xE9dia \xE9 ".concat(aritmetica(2, 2, 2, 22, 2, 2)));
var ponderada = function ponderada() {
  for (var _len2 = arguments.length, ponderada = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    ponderada[_key2] = arguments[_key2];
  }
  //Estou realizando a ponderação, coloquei um paramentro q receb era a soma toal e desestruturei o outro q seria um objeto e estou utilizando apenas as chaves deles, e o operador de coalescência esta sendo usado para adicionar um valor padrão, caso o usuario n insira nenhum
  var sum = ponderada.reduce(function (all, _ref) {
    var weight = _ref.weight,
      n = _ref.n;
    return all + n * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  //Os pesos estão sendo somados, estou buscando dentro do obj a propriedade weight que foi criada
  var weightAll = ponderada.reduce(function (all, w) {
    var _w$weight;
    return all + ((_w$weight = w.weight) !== null && _w$weight !== void 0 ? _w$weight : 1);
  }, 0);
  return sum / weightAll;
};
console.log(ponderada({
  n: 5,
  weight: 5
}));
var median = function median() {
  for (var _len3 = arguments.length, median = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    median[_key3] = arguments[_key3];
  }
  //Estou criando uma cópia do array median, pois irei utilizar o método sort para fazer com que os números que o usuário colocar fiquei em ordem crescente
  var ordened = [].concat(median).sort(function (a, b) {
    return a - b;
  });
  //Dessa forma, usando o método floor q faz a busca pelo maior número inteiro, mas caso o número seja decimal ex: 3.5, o floor pegara o 3, ele irá arredondar para baixo então com ele consigo coletar a posição q o número do meio esta
  var middle = Math.floor(ordened.length / 2);
  //Caso o resto da divisão seja diferente de 0, no caso a sequencia é impar será retornado o valor na posição middle q no caso seria o número que se encontra no centro
  if (ordened.length % 2 !== 0) {
    return ordened[middle];
  }
  //Quando a sequencia de números for par, ele terá dois numbers no meio, por conta disso tenho que coletar os dois e fazer a média, usando a const middle consigo coletar o segundo elemento do meio, para buscar o primeiro preciso apenas subtrair por 1
  var ElementOne = ordened[middle - 1];
  var ElementTwo = ordened[middle];
  return aritmetica(ElementOne, ElementTwo);
};
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3)));
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  //O map será usado para modificar o array numbers
  var quantities = numbers.map(function (n) {
    return [n,
    //Dessa maneira, se o n for igual ao numbers, será armazenado e usando o length será possivel adquirir a quantidade, então essa função irá coletar a quantidade de x q determinado número aparece.
    numbers.filter(function (numbers) {
      return n === numbers;
    }).length];
  });
  //Dessa forma, estou ordenanndo os arrays de forma decrescente, estou usando o [1] pois não são números, no caso é um array bidimensional então preciso usar as posições para definir qual elemento quero na frente, nesse exemplo eu quero q a quantidade fique na frente
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });

  //Com isso, estou retornando o primeiro elemento q esta no array, pois ele é aquele que foi repetido mais vezes
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));