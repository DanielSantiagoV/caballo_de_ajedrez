/**
 * ♞ Calculadora de Movimientos del Caballo de Ajedrez
 * 
 * Este módulo implementa una aplicación completa para calcular y visualizar
 * todos los movimientos posibles de un caballo en un tablero de ajedrez.
 * 
 * @author Daniel Santiago Vinasco
 * @version 2.0
 */

class ChessKnightCalculator {
    constructor() {
        this.boardSize = 8;
        this.currentPosition = { row: 4, col: 4 };
        this.possibleMoves = [];
        this.board = null;
        this.isInitialized = false;
    }

    /**
     * Inicializa la aplicación
     */
    init() {
        console.log('Inicializando Calculadora de Caballo de Ajedrez...');
        
        // Primero crear el tablero
        this.createChessboard();
        
        // Luego configurar los event listeners
        this.setupEventListeners();
        
        // Finalmente actualizar la visualización
        this.updateDisplay();
        
        this.isInitialized = true;
        console.log('Aplicación inicializada correctamente');
    }

    /**
     * Configura los event listeners
     */
    setupEventListeners() {
        console.log('Configurando event listeners...');
        
        const calculateBtn = document.getElementById('btn-calcular');
        const clearBtn = document.getElementById('btn-limpiar');
        const rowInput = document.getElementById('input-fila');
        const colInput = document.getElementById('input-columna');

        if (!calculateBtn || !clearBtn || !rowInput || !colInput) {
            console.error('No se encontraron algunos elementos del DOM');
            return;
        }

        calculateBtn.addEventListener('click', () => {
            console.log('Botón calcular clickeado');
            this.calculateMoves();
        });
        
        clearBtn.addEventListener('click', () => {
            console.log('Botón limpiar clickeado');
            this.clearBoard();
        });
        
        // Event listeners para inputs
        [rowInput, colInput].forEach(input => {
            input.addEventListener('input', (e) => this.handleInputChange(e));
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    console.log('Enter presionado');
                    this.calculateMoves();
                }
            });
        });

        // Event listener para clics en el tablero (solo si el tablero existe)
        if (this.board) {
            this.board.addEventListener('click', (e) => {
                console.log('Clic en el tablero');
                this.handleBoardClick(e);
            });
        }
        
        console.log('Event listeners configurados correctamente');
    }

    /**
     * Maneja cambios en los inputs
     */
    handleInputChange(event) {
        const value = parseInt(event.target.value);
        const max = this.boardSize;
        
        if (value > max) {
            event.target.value = max;
        } else if (value < 1 && event.target.value !== '') {
            event.target.value = 1;
        }
    }

    /**
     * Maneja clics en el tablero
     */
    handleBoardClick(event) {
        const cell = event.target.closest('.celda');
        if (!cell) return;

        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        
        console.log(`Clic en casilla: ${row}, ${col}`);
        
        this.currentPosition = { row, col };
        this.updateInputs();
        this.calculateMoves();
    }

    /**
     * Actualiza los inputs con la posición actual
     */
    updateInputs() {
        const rowInput = document.getElementById('input-fila');
        const colInput = document.getElementById('input-columna');
        
        if (rowInput && colInput) {
            rowInput.value = this.currentPosition.row;
            colInput.value = this.currentPosition.col;
        }
    }

    /**
     * Crea el tablero de ajedrez
     */
    createChessboard() {
        console.log('Creando tablero de ajedrez...');
        
        this.board = document.getElementById('tablero-ajedrez');
        
        if (!this.board) {
            console.error('No se encontró el elemento tablero-ajedrez');
            return;
        }
        
        this.board.innerHTML = '';

        for (let row = 1; row <= this.boardSize; row++) {
            for (let col = 1; col <= this.boardSize; col++) {
                const cell = document.createElement('div');
                cell.className = `celda ${this.isLightSquare(row, col) ? 'celda-clara' : 'celda-oscura'}`;
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.textContent = `${row},${col}`;
                
                this.board.appendChild(cell);
            }
        }
        
        console.log('Tablero creado correctamente');
    }

    /**
     * Determina si una casilla es clara
     */
    isLightSquare(row, col) {
        return (row + col) % 2 === 0;
    }

    /**
     * Valida si una coordenada está dentro del tablero
     */
    isValidCoordinate(row, col) {
        return row >= 1 && row <= this.boardSize && col >= 1 && col <= this.boardSize;
    }

    /**
     * Calcula todos los movimientos posibles del caballo
     */
    calculateMoves() {
        console.log('Calculando movimientos...');
        
        const rowInput = document.getElementById('input-fila');
        const colInput = document.getElementById('input-columna');

        if (!rowInput || !colInput) {
            console.error('No se encontraron los inputs');
            return;
        }

        // Validar inputs
        const row = parseInt(rowInput.value);
        const col = parseInt(colInput.value);

        console.log(`Posición ingresada: ${row}, ${col}`);

        if (!this.validateInputs(row, col)) {
            return;
        }

        this.currentPosition = { row, col };
        this.possibleMoves = this.getKnightMoves(row, col);
        
        console.log(`Movimientos encontrados: ${this.possibleMoves.length}`);
        
        this.updateDisplay();
        this.showResults();
    }

    /**
     * Valida los inputs del usuario
     */
    validateInputs(row, col) {
        if (isNaN(row) || isNaN(col)) {
            this.showError('Por favor, ingresa números válidos para la fila y la columna.');
            return false;
        }

        if (!this.isValidCoordinate(row, col)) {
            this.showError('Las coordenadas deben ser números entre 1 y 8.');
            return false;
        }

        return true;
    }

    /**
     * Obtiene todos los movimientos posibles del caballo
     */
    getKnightMoves(row, col) {
        const moves = [];
        const knightMoves = [
            [-2, -1], [-2, 1], [-1, -2], [-1, 2],
            [1, -2], [1, 2], [2, -1], [2, 1]
        ];

        for (const [rowOffset, colOffset] of knightMoves) {
            const newRow = row + rowOffset;
            const newCol = col + colOffset;

            if (this.isValidCoordinate(newRow, newCol)) {
                moves.push({ row: newRow, col: newCol });
            }
        }

        return moves;
    }

    /**
     * Actualiza la visualización del tablero
     */
    updateDisplay() {
        console.log('Actualizando visualización...');
        
        this.clearBoardVisual();
        this.highlightKnight();
        this.highlightPossibleMoves();
        this.updateMoveCounter();
    }

    /**
     * Limpia la visualización del tablero
     */
    clearBoardVisual() {
        if (!this.board) return;
        
        const cells = this.board.querySelectorAll('.celda');
        cells.forEach(cell => {
            cell.classList.remove('caballo', 'movimiento-posible');
            cell.textContent = `${cell.dataset.row},${cell.dataset.col}`;
        });
    }

    /**
     * Resalta la posición del caballo
     */
    highlightKnight() {
        if (!this.board) return;
        
        const knightCell = this.board.querySelector(
            `[data-row="${this.currentPosition.row}"][data-col="${this.currentPosition.col}"]`
        );
        
        if (knightCell) {
            knightCell.classList.add('caballo');
            knightCell.textContent = '♞';
        }
    }

    /**
     * Resalta los movimientos posibles
     */
    highlightPossibleMoves() {
        if (!this.board) return;
        
        this.possibleMoves.forEach(move => {
            const cell = this.board.querySelector(
                `[data-row="${move.row}"][data-col="${move.col}"]`
            );
            
            if (cell) {
                cell.classList.add('movimiento-posible');
                cell.textContent = `${move.row},${move.col}`;
            }
        });
    }

    /**
     * Actualiza el contador de movimientos
     */
    updateMoveCounter() {
        const counter = document.getElementById('contador-movimientos');
        if (counter) {
            counter.textContent = this.possibleMoves.length;
        }
    }

    /**
     * Muestra los resultados
     */
    showResults() {
        const resultsDiv = document.getElementById('resultados-movimientos');
        if (!resultsDiv) {
            console.error('No se encontró el div de resultados');
            return;
        }
        
        const resultsContent = resultsDiv.querySelector('.results-content');
        if (!resultsContent) {
            console.error('No se encontró el contenido de resultados');
            return;
        }
        
        resultsContent.innerHTML = '';

        if (this.possibleMoves.length === 0) {
            resultsContent.innerHTML = `
                <div class="success-message">
                    <p>El caballo en la posición (${this.currentPosition.row}, ${this.currentPosition.col}) no tiene movimientos válidos.</p>
                </div>
            `;
        } else {
            const movesList = document.createElement('div');
            movesList.className = 'movimientos-lista';
            
            this.possibleMoves.forEach(move => {
                const moveItem = document.createElement('div');
                moveItem.className = 'movimiento-item';
                moveItem.textContent = `(${move.row}, ${move.col})`;
                moveItem.addEventListener('click', () => this.moveToPosition(move.row, move.col));
                movesList.appendChild(moveItem);
            });

            resultsContent.innerHTML = `
                <div class="success-message">
                    <p>El caballo puede moverse desde (${this.currentPosition.row}, ${this.currentPosition.col}) a ${this.possibleMoves.length} posiciones:</p>
                </div>
            `;
            resultsContent.appendChild(movesList);
        }
    }

    /**
     * Mueve el caballo a una nueva posición
     */
    moveToPosition(row, col) {
        this.currentPosition = { row, col };
        this.updateInputs();
        this.calculateMoves();
    }

    /**
     * Muestra un mensaje de error
     */
    showError(message) {
        const resultsDiv = document.getElementById('resultados-movimientos');
        if (!resultsDiv) return;
        
        const resultsContent = resultsDiv.querySelector('.results-content');
        if (!resultsContent) return;
        
        resultsContent.innerHTML = `
            <div class="error-message">
                <p>${message}</p>
            </div>
        `;
    }

    /**
     * Limpia el tablero
     */
    clearBoard() {
        this.currentPosition = { row: 4, col: 4 };
        this.possibleMoves = [];
        this.updateInputs();
        this.updateDisplay();
        
        const resultsDiv = document.getElementById('resultados-movimientos');
        if (!resultsDiv) return;
        
        const resultsContent = resultsDiv.querySelector('.results-content');
        if (!resultsContent) return;
        
        resultsContent.innerHTML = `
            <p class="placeholder-text">Ingresa las coordenadas y haz clic en "Calcular Movimientos" para ver los resultados.</p>
        `;
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, iniciando aplicación...');
    
    // Crear instancia de la calculadora
    window.chessCalculator = new ChessKnightCalculator();
    
    // Inicializar la aplicación
    window.chessCalculator.init();
    
    // Agregar información de versión al console
    console.log('♞ Calculadora de Movimientos del Caballo de Ajedrez v2.0');
    console.log('Desarrollado por Daniel Santiago Vinasco');
    
    // Agregar shortcuts de teclado
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'r') {
            e.preventDefault();
            window.chessCalculator.clearBoard();
        }
    });
});
