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