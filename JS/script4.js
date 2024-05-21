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
