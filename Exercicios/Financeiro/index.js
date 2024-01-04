let transactions = []

function transactionContainer(id) { //Irei usar essa function para agrupar as transações dentro de um container
    const container = document.createElement("div")
    container.classList.add("transaction")
    container.id = `transaction-${id}`
    return container
}

function transactionTitle(name) {
    const title = document.createElement("span")
    title.classList.add("transaction-title")
    title.textContent = name
    return title
}

function transactionAmount(amount) {
    const span = document.createElement("span")

    const formater = Intl.NumberFormat("pt-BR", {//O Intl é usado para realizar algumas formatoções, como o ex agora q irei usar para adequar para o formato brasileiro os valores fornecidos q no caso serão números
        compactDisplay: "long", //para n haver abreviações na hora de formatar o valor
        currency: "BRL", //Qual moeda quero
        style: "currency" //O estilo da moeda q desejo
    })

    const formatedAmount = formater.format(amount) //Dessa maneira, o valor sera formatado de acordo com oq foi definido acima

    if (amount > 0) {
        span.textContent = `${formatedAmount} C`
        span.classList.add("transaction-amount", "credit")
    } else {
        span.textContent = `${formatedAmount} D`
        span.classList.add("transaction-amount", "debit")
    }

    return span
}

function editTransaction(transaction) {
    const btnEdit = document.createElement("button")
    btnEdit.classList.add("edit-btn")
    btnEdit.textContent = "Editar"
    btnEdit.addEventListener("click", () => {
        document.querySelector("#id").value = transaction.id
        document.querySelector("#name").value = transaction.name
        document.querySelector("#amount").value = transaction.amount
    })
    return btnEdit
}

function deleteTransaction(id) {
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.textContent = "Apagar"
    deleteBtn.addEventListener("click", async () => {
        await fetch(`http://localhost:3000/transactions/${id}`, { method: "DELETE" })
        deleteBtn.parentElement.remove()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1)
        balance()
    })
    return deleteBtn
}

function renderTransaction(transaction) {
    const container = transactionContainer(transaction.id)
    const title = transactionTitle(transaction.name)
    const amount = transactionAmount(transaction.amount)
    const editBtn = editTransaction(transaction)
    const deleteBtn = deleteTransaction(transaction.id)

    container.append(title, amount, editBtn, deleteBtn)

    document.querySelector("#transactions").append(container)
}

async function saveTransaction(ev) {
    ev.preventDefault()

    const name = document.querySelector("#name").value
    const amount = parseFloat(document.querySelector("#amount").value)
    const id = document.querySelector("#id").value

    if (id) {
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: "PUT",
            body: JSON.stringify({ name, amount }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const transaction = await response.json()
        //Estou verificando se o index é igual aquele q esta sendo referenciado, para poder apaga-lo e substitui-lo pela nova transação
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1, transaction)
        document.querySelector(`#transaction-${id}`).remove()
        renderTransaction(transaction)
    } else {//Caso n possua o Id, uma nova transação sera criada
        const response = await fetch("http://localhost:3000/transactions", {
            method: "POST",
            body: JSON.stringify({ name, amount }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const transaction = await response.json()

        transactions.push(transaction)
        renderTransaction(transaction)
    }
    ev.target.reset()
    balance()
}

async function transactionFetch() {
    return await fetch("http://localhost:3000/transactions").then(res => res.json())
}

function balance() {
    const spanBalance = document.querySelector("#balance")
    const balance = transactions.reduce((sum, transactions) => sum + transactions.amount, 0) // Dessma maneira, irei conseguir o valor total
    const formater = Intl.NumberFormat("pt-BR", {
        compactDisplay: "long",
        currency: "BRL",
        style: "currency"
    })

    spanBalance.textContent = formater.format(balance)
}

async function setup() {
    const results = await transactionFetch()
    transactions.push(...results) //Para evitar de ficar utilizado fetch toda vez que alguem alterar, excluir ou adicionar algo no sistema, foi criado uma variavel global para refletir o valor que esta no db.json
    transactions.forEach(renderTransaction)
    balance()
}

document.addEventListener("DOMContentLoaded", setup)
document.querySelector("form").addEventListener("submit", saveTransaction)