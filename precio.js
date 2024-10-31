function obtenerPrecioMedicamento(medicamento) {
    let precio = 0;
    if (medicamento === "paracetamol") {
        precio = 5;
    } else if (medicamento === "ibuprofeno") {
        precio = 8;
    } else if (medicamento === "amoxicilina") {
        precio = 12;
    }
    return precio;
}
