function esCoordenadaValida(coord) {
    return coord >= 1 && coord <= 8;
}

function calcularMovimientosCaballo(filaInicial, colInicial) {
    const posiblesMovimientos = [];
    const movimientosL = [
        [-2, -1], [-2, 1],
        [-1, -2], [-1, 2],
        [1, -2], [1, 2],
        [2, -1], [2, 1]
    ];

    for (const movimiento of movimientosL) {
        const nuevaFila = filaInicial + movimiento[0];
        const nuevaColumna = colInicial + movimiento[1];

        if (esCoordenadaValida(nuevaFila) && esCoordenadaValida(nuevaColumna)) {
            posiblesMovimientos.push(`${nuevaFila},${nuevaColumna}`);
        }
    }
    return posiblesMovimientos;
}

function mostrarResultados(movimientos, filaInicial, colInicial) {
    const resultadosDiv = document.getElementById('resultados-movimientos');
    resultadosDiv.classList.remove('error-message');
    resultadosDiv.innerHTML = '';

    if (movimientos.length === 0) {
        resultadosDiv.innerHTML = `<p>El caballo desde ${filaInicial} ${colInicial} no tiene movimientos válidos.</p>`;
    } else {
        let textoResultados = `<p>El caballo puede saltar de ${filaInicial} ${colInicial} a:</p>`;
        movimientos.forEach(mov => {
            const [filaDestino, colDestino] = mov.split(',');
            textoResultados += `<p>${filaDestino} ${colDestino}</p>`;
        });
        resultadosDiv.innerHTML = textoResultados;
    }
}

function mostrarError(mensaje) {
    const resultadosDiv = document.getElementById('resultados-movimientos');
    resultadosDiv.classList.add('error-message');
    resultadosDiv.innerHTML = `<p>${mensaje}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    const botonCalcular = document.getElementById('btn-calcular');
    const inputFila = document.getElementById('input-fila');
    const inputColumna = document.getElementById('input-columna');

    botonCalcular.addEventListener('click', () => {
        const filaTexto = inputFila.value.trim();
        const colTexto = inputColumna.value.trim();

        const fila = parseInt(filaTexto);
        const columna = parseInt(colTexto);

        if (filaTexto === '' || colTexto === '' || isNaN(fila) || isNaN(columna)) {
            mostrarError('Por favor, ingresa números válidos para la fila y la columna.');
            return;
        }

        if (!esCoordenadaValida(fila) || !esCoordenadaValida(columna)) {
            mostrarError('Las coordenadas deben ser números entre 1 y 8.');
            return;
        }

        const movimientos = calcularMovimientosCaballo(fila, columna);
        mostrarResultados(movimientos, fila, columna);
    });
});
