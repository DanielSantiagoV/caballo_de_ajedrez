// Variables globales para almacenar las coordenadas del caballo actual
let filaCaballoActual = -1; // Inicializadas en -1 para indicar que no hay caballo al inicio
let columnaCaballoActual = -1;

/**
 * Función para validar si una coordenada (fila o columna) está dentro del tablero (1-8).
 * @param {number} coord - La coordenada a validar.
 * @returns {boolean} - True si la coordenada es válida, false de lo contrario.
 */

function esCoordenadaValida(coord) {
    return coord >= 1 && coord <= 8;
}

/**
 * Calcula todos los posibles movimientos de un caballo desde una posición dada.
 * Filtra los movimientos que están fuera del tablero.
 * @param {number} filaInicial - La fila actual del caballo (1-8).
 * @param {number} colInicial - La columna actual del caballo (1-8).
 * @returns {Array<string>} - Un array de strings, donde cada string es una coordenada de destino (ej. "2,3").
 */
function calcularMovimientosCaballo(filaInicial, colInicial) {
    const posiblesMovimientos = [];
    
    const movimientosL = [
        [-2, -1], [-2, 1], // 2 arriba, 1 izquierda/derecha
        [-1, -2], [-1, 2], // 1 arriba, 2 izquierda/derecha
        [1, -2], [1, 2],   // 1 abajo, 2 izquierda/derecha
        [2, -1], [2, 1]    // 2 abajo, 1 izquierda/derecha
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

/**
 * Actualiza la interfaz con los resultados de los movimientos del caballo,
 * siguiendo el formato de la imagen de "Resultado Esperado".
 * @param {Array<string>} movimientos - Array de movimientos válidos del caballo (ej. ["2,3", "3,2"]).
 * @param {number} filaInicial - La fila desde la que se calculan los movimientos.
 * @param {number} colInicial - La columna desde la que se calculan los movimientos.
 */
function mostrarResultados(movimientos, filaInicial, colInicial) {
    const resultadosDiv = document.getElementById('resultados-movimientos');
    resultadosDiv.classList.remove('error-message'); 
    resultadosDiv.innerHTML = ''; 

    if (movimientos.length === 0) {
        // En un tablero 8x8, un caballo siempre tiene al menos 2 movimientos desde cualquier casilla válida.
        // Este caso es más para robustez o si las reglas fueran diferentes.
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

/**
 * Muestra mensajes de error en la interfaz, con un estilo específico.
 * @param {string} mensaje - El mensaje de error a mostrar.
 */
function mostrarError(mensaje) {
    const resultadosDiv = document.getElementById('resultados-movimientos');
    resultadosDiv.classList.add('error-message'); // Añadimos clase para el estilo de error
    resultadosDiv.innerHTML = `<p>${mensaje}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
  
    const botonCalcular = document.getElementById('btn-calcular');
    const inputFila = document.getElementById('input-fila');
    const inputColumna = document.getElementById('input-columna');

    
    dibujarTablero();

    
    botonCalcular.addEventListener('click', () => {
        
        const filaTexto = inputFila.value.trim();
        const colTexto = inputColumna.value.trim();

        
        const fila = parseInt(filaTexto);
        const columna = parseInt(colTexto);

        
        if (filaTexto === '' || colTexto === '' || isNaN(fila) || isNaN(columna)) {
            mostrarError('Por favor, ingresa números válidos para la fila y la columna.');
            
            filaCaballoActual = -1;
            columnaCaballoActual = -1;
            dibujarTablero();
            return; 
        }

   
        if (!esCoordenadaValida(fila) || !esCoordenadaValida(columna)) {
            mostrarError('Las coordenadas deben ser números entre 1 y 8.');
            
            filaCaballoActual = -1;
            columnaCaballoActual = -1;
            dibujarTablero();
            return; 
        }

        
        filaCaballoActual = fila;
        columnaCaballoActual = columna;

      
        const movimientos = calcularMovimientosCaballo(fila, columna);

      
        mostrarResultados(movimientos, fila, columna);

        
        dibujarTablero();
    });
});

