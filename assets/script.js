const formulario = document.getElementById('task-form')
const listaTarefas = document.getElementById('tasks')

formulario.onsubmit = function (e) {
    e.preventDefault()
    const campoDeInput = document.getElementById ('task-input')
    adcionarTarefa(campoDeInput.value)
    formulario.reset()
}

function adcionarTarefa(descricao) {
    const containerTarefa = document.createElement('div')
    const novaTarefa = document.createElement('input')
    const labelTarefa = document.createElement('label')
    const descricaoTarefaNode = document.createTextNode(descricao)

    novaTarefa.setAttribute('type', 'checkbox')
    novaTarefa.setAttribute('name', descricao)
    novaTarefa.setAttribute('id', descricao)

    labelTarefa.setAttribute('type', 'checkbox')
    labelTarefa.appendChild(descricaoTarefaNode)

    containerTarefa.classList.add('task-item')
    containerTarefa.appendChild(novaTarefa)
    containerTarefa.appendChild(labelTarefa)

    listaTarefas.appendChild(containerTarefa)
}