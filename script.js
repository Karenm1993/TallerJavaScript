// ======================================================
// TALLER JAVASCRIPT - ENTREGA FINAL
// Todos los ejercicios están comentados para evitar errores
// Descomentar uno a la vez para probar
// ======================================================


// =============================
// EJERCICIO 1: VALIDADOR DE EDAD
// =============================

// let entrada = prompt("Ingresa tu edad");

// if (!entrada || entrada.trim() === "") {
//     alert("Error: campo vacío");
// } else {
//     let edad = parseInt(entrada);

//     if (isNaN(edad)) {
//         alert("Error: solo números");
//     } else if (edad < 18) {
//         alert("Acceso denegado");
//     } else {
//         alert("Bienvenido");
//     }
// }


// =============================
// EJERCICIO 2: HELADOS
// =============================

// let precio = 5;
// let topping = prompt("Elige topping: Oreo, KitKat o Brownie");

// if (!topping || topping.trim() === "") {
//     alert("Error: campo vacío");
// } else {
//     topping = topping.toLowerCase();

//     switch (topping) {
//         case "oreo":
//             precio += 2;
//             break;
//         case "kitkat":
//             precio += 3;
//             break;
//         case "brownie":
//             precio += 4;
//             break;
//         default:
//             alert("Topping no válido");
//             precio = null;
//     }

//     if (precio !== null) {
//         alert("Total: $" + precio);
//     }
// }


// =============================
// EJERCICIO 3: PAR O IMPAR
// =============================

// let numero = prompt("Ingresa un número");

// if (!numero || numero.trim() === "") {
//     alert("Error: vacío");
// } else {
//     numero = parseInt(numero);

//     if (isNaN(numero)) {
//         alert("Error: solo números");
//     } else {
//         if (numero % 2 === 0) {
//             alert("Es par");
//         } else {
//             alert("Es impar");
//         }
//     }
// }


// =============================
// EJERCICIO 4: DÍA DE LA SEMANA
// =============================

// let dia = prompt("Ingresa número del 1 al 7");

// if (!dia || dia.trim() === "") {
//     alert("Error: vacío");
// } else {
//     dia = parseInt(dia);

//     if (isNaN(dia)) {
//         alert("Error: solo números");
//     } else {
//         switch (dia) {
//             case 1: alert("Lunes"); break;
//             case 2: alert("Martes"); break;
//             case 3: alert("Miércoles"); break;
//             case 4: alert("Jueves"); break;
//             case 5: alert("Viernes"); break;
//             case 6: alert("Sábado"); break;
//             case 7: alert("Domingo"); break;
//             default: alert("Número inválido");
//         }
//     }
// }


// =============================
// EJERCICIO 5: CALCULADORA
// =============================

// let n1 = prompt("Número 1");
// let n2 = prompt("Número 2");
// let op = prompt("Operación: suma, resta, mult, div");

// if (!n1 || !n2 || !op) {
//     alert("Error: datos incompletos");
// } else {
//     n1 = parseFloat(n1);
//     n2 = parseFloat(n2);
//     op = op.toLowerCase();

//     if (isNaN(n1) || isNaN(n2)) {
//         alert("Error: números inválidos");
//     } else {
//         let resultado;

//         switch (op) {
//             case "suma":
//                 resultado = n1 + n2;
//                 break;
//             case "resta":
//                 resultado = n1 - n2;
//                 break;
//             case "mult":
//                 resultado = n1 * n2;
//                 break;
//             case "div":
//                 resultado = n2 !== 0 ? n1 / n2 : "Error: división por 0";
//                 break;
//             default:
//                 resultado = "Operación inválida";
//         }

//         alert(resultado);
//     }
// }


// =============================
// EJERCICIO 6: PROMEDIO
// =============================

// let a = prompt("Nota 1");
// let b = prompt("Nota 2");
// let c = prompt("Nota 3");

// if (!a || !b || !c) {
//     alert("Error: datos incompletos");
// } else {
//     a = parseFloat(a);
//     b = parseFloat(b);
//     c = parseFloat(c);

//     if (isNaN(a) || isNaN(b) || isNaN(c)) {
//         alert("Error en las notas");
//     } else {
//         let promedio = (a + b + c) / 3;
//         alert(promedio >= 6 ? "Aprobado" : "Reprobado");
//     }
// }


// =============================
// EJERCICIO 7: CONVERSOR
// =============================

// let dolares = prompt("Cantidad en dólares");
// let moneda = prompt("Convertir a: euros, pesos, soles");

// if (!dolares || !moneda) {
//     alert("Error: datos incompletos");
// } else {
//     dolares = parseFloat(dolares);
//     moneda = moneda.toLowerCase();

//     if (isNaN(dolares)) {
//         alert("Error: valor inválido");
//     } else {
//         let total;

//         switch (moneda) {
//             case "euros":
//                 total = dolares * 0.9;
//                 break;
//             case "pesos":
//                 total = dolares * 4000;
//                 break;
//             case "soles":
//                 total = dolares * 3.7;
//                 break;
//             default:
//                 total = "Moneda inválida";
//         }

//         alert(total);
//     }
// }


// =============================
// EJERCICIO 8: CUENTA REGRESIVA
// =============================

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


// =============================
// EJERCICIO 9: SUMA ACUMULATIVA
// =============================

// let n = prompt("Ingresa un número");

// if (!n || n.trim() === "") {
//     alert("Error");
// } else {
//     n = parseInt(n);

//     if (isNaN(n)) {
//         alert("Error");
//     } else {
//         let suma = 0;

//         for (let i = 1; i <= n; i++) {
//             suma += i;
//         }

//         alert(suma);
//     }
// }


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

// do {
//     clave = prompt("Ingresa la contraseña");
// } while (clave !== "SESAMO123");

// alert("Acceso correcto");


// =============================
// EJERCICIO 12: POTENCIAS
// =============================

// let num = prompt("Número");

// if (!num || num.trim() === "") {
//     alert("Error");
// } else {
//     num = parseInt(num);

//     if (isNaN(num)) {
//         alert("Error");
//     } else {
//         for (let i = 1; i <= 5; i++) {
//             console.log(num ** i);
//         }
//     }
// }


// =============================
// EJERCICIO 13: POSITIVOS
// =============================

// let numero2;

// do {
//     numero2 = prompt("Número");

//     if (numero2 === null || numero2.trim() === "") {
//         break;
//     }

//     numero2 = parseInt(numero2);

// } while (numero2 >= 0);


// =============================
// EJERCICIO 14: ARRAY
// =============================

// let productos = [];

// for (let i = 0; i < 5; i++) {
//     let prod = prompt("Producto");

//     if (!prod || prod.trim() === "") {
//         alert("Vacío");
//         i--;
//     } else {
//         productos.push(prod);
//     }
// }

// console.log(productos);


// =============================
// EJERCICIO 15: BUSCAR NOMBRE
// =============================

// let nombres = ["Ana", "Luis", "Carlos", "Marta", "Sofia"];
// let buscar = prompt("Nombre");

// if (!buscar || buscar.trim() === "") {
//     alert("Vacío");
// } else {
//     buscar = buscar.toLowerCase();

//     let encontrado = false;

//     for (let i = 0; i < nombres.length; i++) {
//         if (nombres[i].toLowerCase() === buscar) {
//             encontrado = true;
//         }
//     }

//     alert(encontrado ? "Existe" : "No existe");
// }


// =============================
// EJERCICIO 16: OBJETO AUTO
// =============================

// let auto = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     año: 2020
// };

// let nuevo = prompt("Nuevo año");

// if (!nuevo || nuevo.trim() === "") {
//     alert("Vacío");
// } else {
//     auto.año = nuevo;
//     console.log(auto);
// }


// =============================
// EJERCICIO 17: ESTUDIANTES
// =============================

// let estudiantes = [];

// for (let i = 0; i < 3; i++) {
//     let nombre = prompt("Nombre");
//     let nota = prompt("Nota");

//     if (!nombre || !nota) {
//         alert("Datos incompletos");
//         i--;
//     } else {
//         estudiantes.push({ nombre, nota });
//     }
// }

// console.log(estudiantes);


// =============================
// EJERCICIO 18: DESCUENTO
// =============================

// let totalCompra = 0;
// let precio2;

// do {
//     precio2 = prompt("Precio (0 para terminar)");

//     if (!precio2) break;

//     precio2 = parseFloat(precio2);

//     if (!isNaN(precio2)) {
//         totalCompra += precio2;
//     }

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
//     opcion = prompt("1.Saludar 2.Despedir 3.Salir");

//     if (opcion === "1") alert("Hola");
//     else if (opcion === "2") alert("Adiós");

// } while (opcion !== "3");


// =============================
// EJERCICIO 20: REEMPLAZO
// =============================

// let numeros = [1, 2, 3, 4, 5];

// let pos = prompt("Posición 0-4");
// let valor = prompt("Nuevo valor");

// if (!pos || !valor) {
//     alert("Datos incompletos");
// } else {
//     pos = parseInt(pos);
//     valor = parseInt(valor);

//     if (isNaN(pos) || isNaN(valor)) {
//         alert("Error");
//     } else {
//         numeros[pos] = valor;
//         console.log(numeros);
//     }
// }