document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("button");
    input.addEventListener("click", initial);
});

function initial() {
    let select = document.getElementById("operacoes");
    let input1 = document.getElementById("num1");
    let input2 = document.getElementById("num2");

    let num1 = +input1.value;
    let num2 = +input2.value;

    if (num1 == '' || num2 == '') {
        input1.style.boxShadow = "0px 0px 7px 0px red";
        input2.style.boxShadow = "0px 0px 7px 0px red";
        document.getElementById("num1").value = ""
        document.getElementById("num2").value = "";
        document.getElementById("resultado").innerText = "Preencha todos os campos";
    } else {
        input1.style.boxShadow = "none";
        input2.style.boxShadow = "none";
        document.getElementById("num1").value = ""
        document.getElementById("num2").value = "";
        menu(select, num1, num2)

    }
}

function menu(select, num1, num2) {
    let result;
    switch (select.value) {
        case "adicao":
            result = adicao(num1, num2);
            break;
        case "subtracao":
            result = subtracao(num1, num2);
            break;
        case "multplicacao":
            result = multplicacao(num1, num2);
            break;
        case "divisao":
            result = divisao(num1, num2);
            break;
    }
    document.getElementById("resultado").innerText = "Resultado: " + result;
}

function adicao(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    return num1 / num2;
}
