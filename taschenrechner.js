function appendOperation(operation) {
    document.getElementById('result-area').innerHTML += operation
}

function calculateResult() {
    let container = document.getElementById('result-area')
    let result = eval(container.innerHTML)
    container.innerHTML = result
}

function deleteLast() {
    let container = document.getElementById('result-area')

    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1)
    }
}