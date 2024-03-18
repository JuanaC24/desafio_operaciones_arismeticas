// Pedir al usuario que ingrese dos números
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Verificar si los números son diferentes y mayores a cero
if (numero1 <= 0 || numero2 <= 0 || numero1 === numero2) {
    console.log("Por favor ingrese dos números diferentes y mayores a cero.");
} else {
    // Realizar operaciones con los números ingresados
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let division = numero1 / numero2;
    let multiplicacion = numero1 * numero2;
    let modulo = numero1 % numero2;

    // Mostrar los resultados
    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("División:", division);
    console.log("Multiplicación:", multiplicacion);
    console.log("Módulo:", modulo);
}


// Pedir al usuario que ingrese la temperatura en grados Celsius
let temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

// Calcular la temperatura en grados Kelvin
let temperaturaKelvin = temperaturaCelsius + 273.15;

// Calcular la temperatura en grados Fahrenheit
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

// Mostrar los resultados
console.log("Temperatura en grados Celsius:", temperaturaCelsius);
console.log("Temperatura en grados Kelvin:", temperaturaKelvin);
console.log("Temperatura en grados Fahrenheit:", temperaturaFahrenheit);


// Pedir al usuario que ingrese la cantidad de días
let cantidadDias = parseInt(prompt("Ingrese la cantidad de días:"));

// Calcular el equivalente en años, semanas y días
let años = Math.floor(cantidadDias / 365);
let semanas = Math.floor((cantidadDias % 365) / 7);
let diasRestantes = cantidadDias % 365 % 7;

// Mostrar el resultado al usuario
console.log(cantidadDias + " días equivalen a:");
console.log(años + " años,");
console.log(semanas + " semanas,");
console.log(diasRestantes + " días.");


// Pedir al usuario que ingrese 5 números
let numeros = [];
for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt("Ingrese el número " + i + ":"));
    numeros.push(numero);
}

// Calcular la suma de todos los números
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

// Calcular el promedio de los números
let promedio = suma / numeros.length;

// Mostrar los resultados
console.log("La suma de todos los números es: " + suma);
console.log("El promedio de los números ingresados es: " + promedio);

