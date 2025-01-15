/* 1. Pregunta al usuario qué día de la semana es.
Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".

2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

3. Crea un sistema de puntuación para un juego. 
Si la puntuación es mayor o igual a 100, muestra "¡Enhorabuena, has ganado!". En caso contrario, muestra "Inténtalo de nuevo para ganar."

4. Crea un mensaje que informe al usuario sobre el saldo de la cuenta, utilizando un template string para incluir el valor del saldo.

5. Pide al usuario que ingrese su nombre usando prompt. Luego, muestra una alerta de bienvenida utilizando ese nombre. */

// 1- Pregunta al usuario qué día de la semana es.
let diaDeLaSemana = prompt("Que dia de la semana es?");
if (diaDeLaSemana=="sabado" || diaDeLaSemana == "domingo"){
    alert ("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!")
}

//2- Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.


let numeroIngresado =prompt("Ingresa un numero por favor:");
if (numeroIngresado>0) {
    alert("el numero es positivo");
    
} else if (numeroIngresado <0) {
    alert ("El numero es negativo");
} else {
    alert("El numero es cero");
}

//3- Crea un sistema de puntuación para un juego. 
//Si la puntuación es mayor o igual a 100, muestra "¡Enhorabuena, has ganado!". En caso contrario, muestra "Inténtalo de nuevo para ganar."

let puntuacion=120; //Aqui estoy dandole el valor a la variable puntuacion de 120.
if (puntuacion>=100) {  
    console.log("¡Enhorabuena, has ganado!");
} else{
    console.log("Inténtalo de nuevo para ganar.");
}


//4- Crea un mensaje que informe al usuario sobre el saldo de la cuenta, utilizando un template string para incluir el valor del saldo.

let saldoCuenta = 500;
alert(`tu saldo es de ${saldoCuenta}`);


//5. Pide al usuario que ingrese su nombre usando prompt. Luego, muestra una alerta de bienvenida utilizando ese nombre.

let nombre;
nombre= prompt("Ingresa tu nombre por favor:");
alert(`Bienvenido, ${nombre}`);