// =============================
// EJERCICIO 1: VALIDADOR DE EDAD
// =============================

// let entrada = prompt("Introduce tu edad");
// let edad = parseInt(entrada);

// if (isNaN(edad)) {
//     alert("Error: solo números");
// } else {
//     if (edad < 18) {
//         alert("Acceso denegado");
//     } else {
//         alert("Bienvenido");
//     }
// }


// =============================
// EJERCICIO 2: HELADOS
// =============================

// let precio = 5;
// let topping = prompt("Elige topping: Oreo, KitKat o Brownie").toLowerCase();

// switch (topping) {
//     case "oreo":
//         precio += 2;
//         break;
//     case "kitkat":
//         precio += 3;
//         break;
//     case "brownie":
//         precio += 4;
//         break;
//     default:
//         alert("Topping no válido");
// }

// alert("Total a pagar: $" + precio);


// =============================
// EJERCICIO 3: PAR O IMPAR
// =============================

// let numero = parseInt(prompt("Ingresa un número"));

// if (isNaN(numero)) {
//     alert("Error");
// } else {
//     if (numero % 2 === 0) {
//         alert("Es par");
//     } else {
//         alert("Es impar");
//     }
// }


// =============================
// EJERCICIO 4: DÍA DE LA SEMANA
// =============================

// let dia = parseInt(prompt("Ingresa un número del 1 al 7"));

// switch (dia) {
//     case 1: alert("Lunes"); break;
//     case 2: alert("Martes"); break;
//     case 3: alert("Miércoles"); break;
//     case 4: alert("Jueves"); break;
//     case 5: alert("Viernes"); break;
//     case 6: alert("Sábado"); break;
//     case 7: alert("Domingo"); break;
//     default: alert("Número inválido");
// }


// =============================
// EJERCICIO 5: CALCULADORA
// =============================

// let n1 = parseFloat(prompt("Número 1"));
// let n2 = parseFloat(prompt("Número 2"));
// let op = prompt("Operación: suma, resta, mult, div").toLowerCase();

// let resultado;

// switch (op) {
//     case "suma":
//         resultado = n1 + n2;
//         break;
//     case "resta":
//         resultado = n1 - n2;
//         break;
//     case "mult":
//         resultado = n1 * n2;
//         break;
//     case "div":
//         resultado = n2 !== 0 ? n1 / n2 : "Error división por 0";
//         break;
//     default:
//         resultado = "Operación inválida";
// }

// alert(resultado);


// =============================
// EJERCICIO 6: PROMEDIO
// =============================

// let a = parseFloat(prompt("Nota 1"));
// let b = parseFloat(prompt("Nota 2"));
// let c = parseFloat(prompt("Nota 3"));

// let promedio = (a + b + c) / 3;

// alert(promedio >= 6 ? "Aprobado" : "Reprobado");


// =============================
// EJERCICIO 7: CONVERSOR
// =============================

// let dolares = parseFloat(prompt("Cantidad en dólares"));
// let moneda = prompt("Convertir a: euros, pesos, soles").toLowerCase();

// let total;

// switch (moneda) {
//     case "euros":
//         total = dolares * 0.9;
//         break;
//     case "pesos":
//         total = dolares * 4000;
//         break;
//     case "soles":
//         total = dolares * 3.7;
//         break;
//     default:
//         total = "Moneda inválida";
// }

// alert(total);


// =============================
// EJERCICIO 8: CUENTA REGRESIVA
// =============================

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


// =============================
// EJERCICIO 9: SUMA ACUMULATIVA
// =============================

// let n = parseInt(prompt("Ingresa un número"));
// let suma = 0;

// for (let i = 1; i <= n; i++) {
//     suma += i;
// }

// alert(suma);


// =============================
// EJERCICIO 10: MÚLTIPLOS DE 5
// =============================

// for (let i = 1; i <= 50; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }


// =============================
// EJERCICIO 11: CLAVE
// =============================

// let clave;

// while (clave !== "SESAMO123") {
//     clave = prompt("Ingresa la clave");
// }

// alert("Acceso correcto");


// =============================
// EJERCICIO 12: POTENCIAS
// =============================

// let num = parseInt(prompt("Número"));

// for (let i = 1; i <= 5; i++) {
//     console.log(num ** i);
// }


// =============================
// EJERCICIO 13: POSITIVOS
// =============================

// let numero2;

// do {
//     numero2 = parseInt(prompt("Número"));
// } while (numero2 >= 0);


// =============================
// EJERCICIO 14: ARRAY COMPRAS
// =============================

// let productos = [];

// for (let i = 0; i < 5; i++) {
//     productos.push(prompt("Producto"));
// }

// console.log(productos);


// =============================
// EJERCICIO 15: BUSCAR NOMBRE
// =============================

// let nombres = ["Ana", "Luis", "Carlos", "Marta", "Sofia"];
// let buscar = prompt("Nombre").toLowerCase();

// let encontrado = false;

// for (let i = 0; i < nombres.length; i++) {
//     if (nombres[i].toLowerCase() === buscar) {
//         encontrado = true;
//     }
// }

// alert(encontrado ? "Existe" : "No existe");


// =============================
// EJERCICIO 16: OBJETO AUTO
// =============================

// let auto = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     año: 2020
// };

// auto.año = prompt("Nuevo año");

// console.log(auto);


// =============================
// EJERCICIO 17: ESTUDIANTES
// =============================

// let estudiantes = [];

// for (let i = 0; i < 3; i++) {
//     let nombre = prompt("Nombre");
//     let nota = parseFloat(prompt("Nota"));

//     estudiantes.push({ nombre, nota });
// }

// console.log(estudiantes);


// =============================
// EJERCICIO 18: DESCUENTO
// =============================

// let totalCompra = 0;
// let precio2;

// do {
//     precio2 = parseFloat(prompt("Precio (0 para terminar)"));
//     totalCompra += precio2;
// } while (precio2 !== 0);

// if (totalCompra > 100) {
//     totalCompra *= 0.9;
// }

// alert(totalCompra);


// =============================
// EJERCICIO 19: MENÚ
// =============================

// let opcion;

// do {
//     opcion = prompt("1. Saludar 2. Despedirse 3. Salir");

//     switch (opcion) {
//         case "1":
//             alert("Hola");
//             break;
//         case "2":
//             alert("Adiós");
//             break;
//     }

// } while (opcion !== "3");


// =============================
// EJERCICIO 20: REEMPLAZO
// =============================

// let numeros = [1, 2, 3, 4, 5];

// let nuevo = parseInt(prompt("Nuevo número"));
// let posicion = parseInt(prompt("Posición 0-4"));

// numeros[posicion] = nuevo;

// console.log(numeros);