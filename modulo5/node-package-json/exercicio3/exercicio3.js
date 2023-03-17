const tarefas = ["Lavar louça"]

function adicionaTarefa() {
    const novaTarefa = process.argv[2]
    tarefas.push(novaTarefa)
    return tarefas
}

console.log(adicionaTarefa())