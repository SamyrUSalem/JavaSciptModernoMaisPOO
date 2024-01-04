function renderArticle(articleData) {
    const article = document.createElement('article')
    article.classList.add('article')
    article.id = `article-${articleData.id}`

    const title = document.createElement("h2")
    title.textContent = articleData.title

    const content = document.createElement("div")
    content.innerHTML = articleData.content

    const author = document.createElement("div")
    author.textContent = articleData.author

    article.append(title, content, author)

    document.querySelector("#articles").appendChild(article)
}

async function fetchArticle() {
    const article = await fetch("http://localhost:3000/articles").then(res => res.json()) //Com essa função do then, estou convertendo a Promise que será criado em json
    article.forEach(renderArticle)
}

document.addEventListener("DOMContentLoaded", () => { //Assim que o conteudo do DOM for carregado, essa função sera chamada
    fetchArticle()
})

const form = document.querySelector("form")

form.addEventListener("submit", async (ev) => {
    ev.preventDefault()

    const articleData = { //Através desse objeto, estou coletando os valores q estarão em cada campo
        title: document.querySelector("#title").value,
        author: document.querySelector("#author").value,
        content: document.querySelector("#content").value
    }

    const response = await fetch("http://localhost:3000/articles", {
        method: "POST", //por padrãoo o fetch utiliza o metodo get, dessa forma estou trocando
        headers: {//Estou dizendo o tipo de dado q estara sendo utilizado
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleData)
    })

    const savedArticle = await response.json()
    form.reset() //Utilizado para limpar o form
    renderArticle(savedArticle)
})