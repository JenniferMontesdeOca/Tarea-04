// Problema 1: Verificación del creador de JavaScript
function verificarCreador() {
    const nombreCreador = prompt("¿Cuál es el nombre del 'creador' de JavaScript?");
    if (nombreCreador === "Brendan Eich") {
        alert("¡Correcto!");
    } else {
        alert("¿No lo sabes? ¡Brendan Eich!");
    }
}

// Problema 2: Verificación del valor numérico
function verificarNumero() {
    const numero = Number(prompt("Ingresa un número:"));

    if (numero === 0) {
        alert(0);
    } else if (numero > 0) {
        alert(1);
    } else {
        alert(-1);
    }
}

// Problema 3: Mensaje utilizando operadores ternarios múltiples
function mostrarMensaje(login) {
    let message = (login == 'trabajador') ? 'Hola' :
                  (login == 'dueño') ? 'Felicidades' :
                  (login == '') ? 'Sin sesión' : '';
    alert(message);
}


// Problema 4: Verificación de usuario y contraseña
function verificarUsuario() {
    const usuario = prompt("Ingresa tu nombre de usuario:");

    if (usuario === "Admin") {
        const contrasena = prompt("Ingresa tu contraseña:");

        if (contrasena === "Jedi") {
            alert("¡Que la fuerza te acompañe!");
        } else if (contrasena === "" || contrasena === null) {
            alert("Cancelado");
        } else {
            alert("Contraseña incorrecta");
        }
    } else if (usuario === "" || usuario === null) {
        alert("Cancelado");
    } else {
        alert("No te conozco");
    }
}

// Problema 5: Cálculo de factura con impuesto
function calcularFactura() {
    const precio1 = parseFloat(prompt("Ingresa el precio del primer plato:"));
    const precio2 = parseFloat(prompt("Ingresa el precio del segundo plato:"));
    const precio3 = parseFloat(prompt("Ingresa el precio del tercer plato:"));
    const impuesto = parseFloat(prompt("Ingresa el impuesto (%):")) / 100;

    const subtotal = precio1 + precio2 + precio3;
    const total = subtotal + (subtotal * impuesto);

    alert(`El monto total de la factura es: ${total.toFixed(2)}`);
}

// Problema 6: Encontrar el número más pequeño y más grande en un array
function encontrarMinMax() {
    const cantidadNumeros = parseInt(prompt("¿Cuántos números quieres ingresar al array?"));
    const numeros = [];

    for (let i = 0; i < cantidadNumeros; i++) {
        numeros.push(parseFloat(prompt(`Ingresa el número ${i + 1}:`)));
    }

    let numeroMin = numeros[0];
    let numeroMax = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeroMin) {
            numeroMin = numeros[i];
        }
        if (numeros[i] > numeroMax) {
            numeroMax = numeros[i];
        }
    }

    alert(`El número más pequeño es: ${numeroMin}`);
    alert(`El número más grande es: ${numeroMax}`);
}

