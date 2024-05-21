// Problema 3: Mensaje utilizando operadores ternarios múltiples
function mostrarMensaje(login) {
    let message = (login == 'trabajador') ? 'Hola' :
                  (login == 'dueño') ? 'Felicidades' :
                  (login == '') ? 'Sin sesión' : '';
    alert(message);
}