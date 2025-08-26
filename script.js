function adicionar(valor) {
    document.getElementById("display").value += valor;
}

function limpar() {
    document.getElementById("display").value = "";
}

function calcular() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        alert("Expressão inválida");
    }
}

function calcularRaiz() {
    let display = document.getElementById("display");
    let valor = parseFloat(display.value);
    if (isNaN(valor) || valor < 0) {
        alert("Número inválido para raiz quadrada");
        return;
    }
    display.value = Math.sqrt(valor);
}

function calcularPorcentagem() {
    let display = document.getElementById("display");
    let valor = parseFloat(display.value);
    if (isNaN(valor)) {
        alert("Digite um número válido");
        return;
    }
    display.value = valor / 100;
}

function deletar() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

