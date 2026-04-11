// ==========================
// NIVEL 1 (CON VALIDACIONES)
// ==========================

function ejercicio1() {
    let edad = prompt("Ingrese su edad");

    if (!edad || isNaN(edad)) {
        alert("Debe ingresar un número válido");
        return;
    }

    edad = Number(edad);

    if (edad < 18) {
        alert("Acceso denegado");
    } else {
        alert("Bienvenido");
    }
}

function ejercicio2() {
    let precio = 5;
    let topping = prompt("Oreo, KitKat o Brownie");

    if (!topping) {
        alert("Campo vacío");
        return;
    }

    topping = topping.toLowerCase();

    switch (topping) {
        case "oreo":
            precio += 2;
            break;
        case "kitkat":
            precio += 3;
            break;
        case "brownie":
            precio += 4;
            break;
        default:
            alert("Topping no válido");
            return;
    }

    alert("Precio final: " + precio);
}

function ejercicio3() {
    let num = prompt("Ingrese un número");

    if (!num || isNaN(num)) {
        alert("Debe ingresar un número válido");
        return;
    }

    num = Number(num);

    alert(num % 2 === 0 ? "Es par" : "Es impar");
}

function ejercicio4() {
    let dia = prompt("Ingrese número del 1 al 7");

    if (!dia || isNaN(dia)) {
        alert("Número inválido");
        return;
    }

    dia = Number(dia);

    switch (dia) {
        case 1: alert("Lunes"); break;
        case 2: alert("Martes"); break;
        case 3: alert("Miércoles"); break;
        case 4: alert("Jueves"); break;
        case 5: alert("Viernes"); break;
        case 6: alert("Sábado"); break;
        case 7: alert("Domingo"); break;
        default: alert("Número fuera de rango");
    }
}

function ejercicio5() {
    let n1 = prompt("Número 1");
    let n2 = prompt("Número 2");
    let op = prompt("suma, resta, mult, div");

    if (!n1 || !n2 || isNaN(n1) || isNaN(n2)) {
        alert("Ingrese números válidos");
        return;
    }

    if (!op) {
        alert("Operación vacía");
        return;
    }

    n1 = Number(n1);
    n2 = Number(n2);
    op = op.toLowerCase();

    let resultado;

    switch (op) {
        case "suma": resultado = n1 + n2; break;
        case "resta": resultado = n1 - n2; break;
        case "mult": resultado = n1 * n2; break;
        case "div":
            if (n2 === 0) {
                alert("No se puede dividir por 0");
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            alert("Operación inválida");
            return;
    }

    alert("Resultado: " + resultado);
}

function ejercicio6() {
    let n1 = prompt("Nota 1");
    let n2 = prompt("Nota 2");
    let n3 = prompt("Nota 3");

    if (!n1 || !n2 || !n3 || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Ingrese notas válidas");
        return;
    }

    let promedio = (Number(n1) + Number(n2) + Number(n3)) / 3;

    alert(promedio >= 6 ? "Aprobado" : "Reprobado");
}

function ejercicio7() {
    let dolares = prompt("Ingrese dólares");
    let moneda = prompt("euros, pesos o soles");

    if (!dolares || isNaN(dolares)) {
        alert("Valor inválido");
        return;
    }

    if (!moneda) {
        alert("Campo vacío");
        return;
    }

    dolares = Number(dolares);
    moneda = moneda.toLowerCase();

    let resultado;

    switch (moneda) {
        case "euros": resultado = dolares * 0.9; break;
        case "pesos": resultado = dolares * 4000; break;
        case "soles": resultado = dolares * 3.7; break;
        default:
            alert("Moneda inválida");
            return;
    }

    alert("Resultado: " + resultado);
}

// ==========================
// NIVEL 2
// ==========================

function ejercicio8() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

function ejercicio9() {
    let n = prompt("Ingrese un número");

    if (!n || isNaN(n)) {
        alert("Número inválido");
        return;
    }

    n = Number(n);
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    alert("Suma: " + suma);
}

function ejercicio10() {
    for (let i = 1; i <= 50; i++) {
        if (i % 5 === 0) console.log(i);
    }
}

function ejercicio11() {
    let clave;

    while (clave !== "SESAMO123") {
        clave = prompt("Ingrese la contraseña");
    }

    alert("Acceso concedido");
}

function ejercicio12() {
    let num = prompt("Ingrese número");

    if (!num || isNaN(num)) {
        alert("Número inválido");
        return;
    }

    num = Number(num);

    for (let i = 1; i <= 5; i++) {
        console.log(num ** i);
    }
}

function ejercicio13() {
    let num;

    do {
        num = prompt("Número (negativo para salir)");

        if (!num || isNaN(num)) {
            alert("Número inválido");
            continue;
        }

        num = Number(num);

    } while (num >= 0);

    alert("Fin");
}

// ==========================
// NIVEL 3
// ==========================

function ejercicio14() {
    let productos = [];

    for (let i = 0; i < 5; i++) {
        let p = prompt("Producto " + (i + 1));

        if (!p) {
            alert("Campo vacío");
            i--;
        } else {
            productos.push(p);
        }
    }

    console.log(productos);
}

function ejercicio15() {
    let nombres = ["ana", "luis", "pedro", "sofia", "carlos"];
    let buscar = prompt("Nombre");

    if (!buscar) {
        alert("Campo vacío");
        return;
    }

    buscar = buscar.toLowerCase();

    let encontrado = nombres.includes(buscar);

    alert(encontrado ? "Existe" : "No existe");
}

function ejercicio16() {
    let auto = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2020
    };

    let nuevo = prompt("Nuevo año");

    if (!nuevo || isNaN(nuevo)) {
        alert("Año inválido");
        return;
    }

    auto.año = Number(nuevo);

    console.log(auto);
}

function ejercicio17() {
    let estudiantes = [];

    for (let i = 0; i < 3; i++) {
        let nombre = prompt("Nombre");
        let nota = prompt("Nota");

        if (!nombre || !nota || isNaN(nota)) {
            alert("Datos inválidos");
            i--;
        } else {
            estudiantes.push({ nombre, nota: Number(nota) });
        }
    }

    console.log(estudiantes);
}

function ejercicio18() {
    let total = 0;
    let precio;

    do {
        precio = prompt("Precio (0 para terminar)");

        if (!precio || isNaN(precio)) {
            alert("Valor inválido");
            continue;
        }

        precio = Number(precio);
        total += precio;

    } while (precio !== 0);

    if (total > 100) total *= 0.9;

    alert("Total: " + total);
}

function ejercicio19() {
    let opcion;

    do {
        opcion = prompt("1.Saludar 2.Despedirse 3.Salir");

        switch (opcion) {
            case "1": alert("Hola"); break;
            case "2": alert("Adiós"); break;
        }

    } while (opcion !== "3");
}

function ejercicio20() {
    let numeros = [1, 2, 3, 4, 5];

    let valor = prompt("Nuevo valor");
    let pos = prompt("Posición (0-4)");

    if (!valor || !pos || isNaN(pos)) {
        alert("Datos inválidos");
        return;
    }

    pos = Number(pos);

    if (pos < 0 || pos > 4) {
        alert("Posición fuera de rango");
        return;
    }

    numeros[pos] = valor;

    console.log(numeros);
}

// ==========================
// EJECUTA SOLO UNO
// ==========================

// ejercicio1();