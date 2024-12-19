function saludar() {
    alert("Te deseo una feliz navidad");
}

const nombre = "Jaime";

function saludarNombre() {
    alert("Hola " + nombre)
}

function calcular() {
    var num1 = document.getElementById("num1").value.trim();
    var num2 = document.getElementById("num2").value.trim();
    var operacion = document.getElementById("operacion").value;
    var resultado;
}


num1 = parseInt(num1);
num2 = parseInt(num2);

switch (operacion) {
    case "suma":
        resultado = num1 + num2;
    case "resta":
        resultado = num1 - num2;
    case "multiplicacion":
        resultado = num1 * num2;
    case "division":
        resultado = num1 / num2;
}

