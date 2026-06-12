
function calcularEconomia() {

    let consumo =
        parseFloat(document.getElementById("consumo").value);

    if (isNaN(consumo) || consumo <= 0) {

        document.getElementById("resultado").innerHTML =
        "Digite um valor válido.";

        return;
    }

    let economia = consumo * 0.30;

    document.getElementById("resultado").innerHTML =
    "Com tecnologias sustentáveis, a economia estimada é de aproximadamente " +
    economia.toFixed(0) +
    " litros de água por mês.";
}
