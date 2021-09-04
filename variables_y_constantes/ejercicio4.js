let noMbre;
let año;
let año_nacido;
noMbre = prompt("¿Cual es tu nombre?");
año = parseInt(prompt("Escribe el año actual"));
año_nacido = parseInt(prompt("¿En que año naciste?"));
let edad = año - año_nacido;
console.log("Tienes" + edad + "años");