
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

