const Author = require("./Author");

const kakashi = new Author("Kakashi Hatake")

const post = kakashi.writePosts("Vila da Folha", "Ninja dos 1000 jutsus")

post.addComments("Rin", "Vc é muito bom!")
post.addComments("Obito", "Vc é muito chato!")

console.log(kakashi)
console.log(post)