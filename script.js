// =========================
// EJERCICIO 1 - EDAD
// =========================
// let edad = prompt("Ingrese su edad");
// if (isNaN(edad)) {
//   alert("Por favor ingrese un número válido");
// } else if (edad < 18) {
//   alert("Acceso denegado");
// } else {
//   alert("Bienvenido");
// }


// =========================
// EJERCICIO 2 - HELADOS
// =========================
// let topping = prompt("Oreo, KitKat o Brownie");
// let precio = 5;

// switch (topping.toLowerCase()) {
//   case "oreo": precio += 2; break;
//   case "kitkat": precio += 3; break;
//   case "brownie": precio += 4; break;
//   default: alert("Topping no válido");
// }

// alert("Precio final: $" + precio);


// =========================
// EJERCICIO 3 - PAR O IMPAR
// =========================
// let num = prompt("Ingrese número");
// if (num % 2 == 0) {
//   alert("Es par");
// } else {
//   alert("Es impar");
// }


// =========================
// EJERCICIO 4 - DÍA SEMANA
// =========================
// let dia = parseInt(prompt("1 a 7"));

// switch (dia) {
//   case 1: alert("Lunes"); break;
//   case 2: alert("Martes"); break;
//   case 3: alert("Miércoles"); break;
//   case 4: alert("Jueves"); break;
//   case 5: alert("Viernes"); break;
//   case 6: alert("Sábado"); break;
//   case 7: alert("Domingo"); break;
//   default: alert("Error");
// }


// =========================
// EJERCICIO 5 - CALCULADORA
// =========================
// let n1 = parseFloat(prompt("Número 1"));
// let n2 = parseFloat(prompt("Número 2"));
// let op = prompt("suma, resta, mult, div");

// switch (op) {
//   case "suma": alert(n1 + n2); break;
//   case "resta": alert(n1 - n2); break;
//   case "mult": alert(n1 * n2); break;
//   case "div": alert(n1 / n2); break;
// }


// =========================
// EJERCICIO 6 - PROMEDIO
// =========================
// let n1 = parseFloat(prompt("Nota 1"));
// let n2 = parseFloat(prompt("Nota 2"));
// let n3 = parseFloat(prompt("Nota 3"));

// let promedio = (n1 + n2 + n3) / 3;

// if (promedio >= 6) {
//   alert("Aprobado");
// } else {
//   alert("Reprobado");
// }


// =========================
// EJERCICIO 7 - MONEDA
// =========================
// let dolares = parseFloat(prompt("Dólares"));
// let moneda = prompt("euros, pesos, soles");

// let resultado;

// switch (moneda.toLowerCase()) {
//   case "euros": resultado = dolares * 0.9; break;
//   case "pesos": resultado = dolares * 4000; break;
//   case "soles": resultado = dolares * 3.7; break;
// }

// alert(resultado);


// =========================
// EJERCICIO 8 - CUENTA REGRESIVA
// =========================
// for (let i = 10; i >= 1; i--) {
//   document.write(i + "<br>");
// }


// =========================
// EJERCICIO 9 - SUMA
// =========================
// let n = parseInt(prompt("Número"));
// let suma = 0;

// for (let i = 1; i <= n; i++) {
//   suma += i;
// }

// alert(suma);


// =========================
// EJERCICIO 10 - MÚLTIPLOS
// =========================
// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0) {
//     document.write(i + "<br>");
//   }
// }


// =========================
// EJERCICIO 11 - CLAVE
// =========================
// let clave;
// while (clave !== "SESAMO123") {
//   clave = prompt("Clave");
// }
// alert("Correcta");


// =========================
// EJERCICIO 12 - POTENCIAS
// =========================
// let num = parseInt(prompt("Número"));
// for (let i = 1; i <= 5; i++) {
//   document.write(num ** i + "<br>");
// }


// =========================
// EJERCICIO 13 - POSITIVOS
// =========================
// let num;
// do {
//   num = parseInt(prompt("Número"));
// } while (num >= 0);


// =========================
// EJERCICIO 14 - ARRAY
// =========================
// let productos = [];
// for (let i = 0; i < 5; i++) {
//   productos.push(prompt("Producto"));
// }
// document.write(productos);


// =========================
// EJERCICIO 15 - BUSCAR
// =========================
// let nombres = ["Ana", "Luis", "Carlos", "Marta", "Sofia"];
// let buscar = prompt("Nombre");
// let encontrado = false;

// for (let i = 0; i < nombres.length; i++) {
//   if (nombres[i].toLowerCase() === buscar.toLowerCase()) {
//     encontrado = true;
//   }
// }

// alert(encontrado ? "Existe" : "No existe");


// =========================
// EJERCICIO 16 - OBJETO
// =========================
// let auto = {
//   marca: "Toyota",
//   modelo: "Corolla",
//   año: 2020
// };

// auto.año = prompt("Nuevo año");
// console.log(auto);


// =========================
// EJERCICIO 17 - ESTUDIANTES
// =========================
// let estudiantes = [];
// for (let i = 0; i < 3; i++) {
//   let nombre = prompt("Nombre");
//   let nota = prompt("Nota");
//   estudiantes.push({ nombre, nota });
// }
// console.log(estudiantes);


// =========================
// EJERCICIO 18 - CARRITO
// =========================
// let total = 0;
// let precio;

// do {
//   precio = parseFloat(prompt("Precio"));
//   total += precio;
// } while (precio !== 0);

// if (total > 100) {
//   total *= 0.9;
// }

// alert(total);


// =========================
// EJERCICIO 19 - MENÚ
// =========================
// let opcion;
// do {
//   opcion = prompt("1.Saludar 2.Despedir 3.Salir");

//   switch (opcion) {
//     case "1": alert("Hola"); break;
//     case "2": alert("Adiós"); break;
//   }

// } while (opcion !== "3");


// =========================
// EJERCICIO 20 - REEMPLAZO
// =========================
// let numeros = [1, 2, 3, 4, 5];

// let pos = parseInt(prompt("Posición"));
// let nuevo = prompt("Nuevo valor");

// numeros[pos] = nuevo;

// console.log(numeros);