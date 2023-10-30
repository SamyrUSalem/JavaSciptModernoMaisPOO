import { inline } from "./inline.js";
//Não preciso usar as chaves para importar um modulo que foi exportador atraves do metodo exportDefault, é possível usar o nome que quiser no lugar do "defaultInline", seria possivel utilizar qualquer nome
import defaultInline from "./inline.js"
import exportDefault, { group, a, b, c, d } from "./non-inline.js";

inline()

defaultInline()

group()

exportDefault()