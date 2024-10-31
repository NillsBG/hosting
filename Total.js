function calcularTotal() {
    const cantidad = document.getElementById("cantidad").value;
    const medicamento = document.getElementById("medicamento").value;
    const entregaDomicilio = document.getElementById("entregaDomicilio").checked;
    const totalCompra = document.getElementById("totalCompra");

    // Validación de datos con estructura for
    const campos = [cantidad, medicamento];
    for (let i = 0; i < campos.length; i++) {
        if (campos[i] === "" || campos[i] <= 0) {
            alert("Por favor, revisa los datos ingresados.");
            return;
        }
    }

    // Obtener el precio del medicamento y calcular el total
    const precioMedicamento = obtenerPrecioMedicamento(medicamento);
    let total = precioMedicamento * cantidad;

    // Añadir costo de entrega si está seleccionado
    if (entregaDomicilio) {
        total += 3; // Cargo adicional de Q3 por entrega a domicilio
    }

    totalCompra.textContent = "Total: Q" + total.toFixed(2);
}
