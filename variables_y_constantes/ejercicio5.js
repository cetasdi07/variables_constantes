let peso;
let estatura;
peso = parseInt(prompt("Ingresa tu peso en Kg por favor"));
estatura = parseInt(prompt("Ingresa tu estatura por favor"));
let imc = peso / (estatura * estatura);
console.log("Tu IMC es de" + imc);