
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