# ♞ Calculadora de Movimientos del Caballo de Ajedrez

<p align="center"> 
  <img src="https://media1.tenor.com/m/wIRJdGr7mUgAAAAC/pepe-dab-pepe.gif" width="300"/> 
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="MIT License">
</p>

---

## 📝 Descripción del Proyecto

Este proyecto implementa una aplicación web moderna e interactiva diseñada para calcular y visualizar todos los movimientos posibles de un caballo de ajedrez desde una posición dada en un tablero de 8x8 casillas. Desarrollado con HTML5, CSS3 y JavaScript ES6+, la aplicación ofrece una experiencia de usuario intuitiva y visualmente atractiva con un tablero de ajedrez interactivo.

### ✨ Características Principales

- **🎯 Tablero Visual Interactivo**: Tablero de ajedrez 8x8 con colores tradicionales
- **♞ Visualización de Movimientos**: Resalta automáticamente todos los movimientos posibles
- **📱 Diseño Responsive**: Adaptable a dispositivos móviles y de escritorio
- **🎨 Interfaz Moderna**: Diseño elegante con gradientes y animaciones suaves
- **⚡ Interactividad Completa**: Clic en casillas para cambiar posición del caballo
- **📊 Contador de Movimientos**: Muestra en tiempo real el número de movimientos posibles
- **🔄 Funcionalidad de Limpieza**: Botón para reiniciar el tablero
- **⌨️ Atajos de Teclado**: Soporte para Enter y Ctrl+R

---

## 🚀 Funcionalidades Implementadas

### Core Features
- ✅ Cálculo preciso de movimientos del caballo en forma de "L"
- ✅ Validación robusta de coordenadas de entrada
- ✅ Visualización en tiempo real en el tablero
- ✅ Interfaz gráfica intuitiva y moderna
- ✅ Diseño responsive para todos los dispositivos

### Advanced Features
- ✅ **Programación Orientada a Objetos**: Código estructurado en clases
- ✅ **Event Handling Avanzado**: Manejo completo de eventos del DOM
- ✅ **Animaciones CSS**: Efectos visuales suaves y atractivos
- ✅ **Gestión de Estado**: Control centralizado del estado de la aplicación
- ✅ **Error Handling**: Manejo elegante de errores de usuario
- ✅ **Accesibilidad**: Interfaz accesible y fácil de usar

---

## 🔧 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y moderna
- **CSS3**: 
  - Grid y Flexbox para layouts
  - Variables CSS (Custom Properties)
  - Animaciones y transiciones
  - Diseño responsive con media queries
- **JavaScript ES6+**:
  - Clases y programación orientada a objetos
  - Arrow functions y destructuring
  - Event handling avanzado
  - DOM manipulation moderna

### Herramientas de Desarrollo
- **Git y GitHub**: Control de versiones y despliegue
- **Google Fonts**: Tipografía Poppins para mejor legibilidad

---

## 🗂️ Estructura del Proyecto

```
caballo_de_ajedrez/
│
├── 📄 index.html          # Archivo HTML principal
├── 📁 css/
│   └── 📄 style.css       # Estilos CSS modernos y responsivos
├── 📁 js/
│   └── 📄 script.js       # Lógica JavaScript en clases
├── 📁 img/
│   └── 📄 caballoajedrez.png  # Icono del proyecto
├── 📄 README.md           # Documentación en español
├── 📄 README_EN.md        # Documentación en inglés
└── 📄 LICENSE             # Licencia MIT
```

---

## 🎮 Cómo Usar la Aplicación

### Método 1: Inputs Numéricos
1. Ingresa la fila (1-8) en el campo "Fila"
2. Ingresa la columna (1-8) en el campo "Columna"
3. Haz clic en "♞ Calcular Movimientos"
4. Observa los resultados en el tablero y en la lista

### Método 2: Clic Directo en el Tablero
1. Haz clic directamente en cualquier casilla del tablero
2. La posición se actualiza automáticamente
3. Los movimientos se calculan y muestran instantáneamente

### Funciones Adicionales
- **🔄 Limpiar**: Reinicia el tablero a la posición central (4,4)
- **⌨️ Enter**: Presiona Enter en cualquier input para calcular
- **⌨️ Ctrl+R**: Atajo de teclado para limpiar el tablero

---

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: #2c3e50 (Azul oscuro)
- **Secundario**: #3498db (Azul claro)
- **Acento**: #e74c3c (Rojo)
- **Éxito**: #27ae60 (Verde)
- **Fondo**: Gradiente púrpura-azul

### Características de Diseño
- **🎯 Mobile-First**: Diseño optimizado para móviles
- **🎨 Animaciones Suaves**: Transiciones de 0.3s en todos los elementos
- **📱 Responsive Grid**: Layout adaptativo con CSS Grid
- **🎭 Efectos Hover**: Interacciones visuales en botones y casillas
- **♿ Accesibilidad**: Contraste adecuado y navegación por teclado

---

## 💻 Arquitectura del Código

### Clase Principal: `ChessKnightCalculator`
```javascript
class ChessKnightCalculator {
    constructor() {
        this.boardSize = 8;
        this.currentPosition = { row: 4, col: 4 };
        this.possibleMoves = [];
        this.board = null;
    }
    
    // Métodos principales:
    - init()                    // Inicialización
    - calculateMoves()          // Cálculo de movimientos
    - createChessboard()        // Generación del tablero
    - updateDisplay()           // Actualización visual
    - handleBoardClick()        // Manejo de clics
}
```

### Características del Código
- **🔧 Modular**: Código organizado en métodos específicos
- **🛡️ Robusto**: Validación completa de inputs
- **⚡ Eficiente**: Algoritmo optimizado para cálculos
- **📖 Legible**: Comentarios detallados y nombres descriptivos
- **🔄 Mantenible**: Estructura clara y extensible

---

## 🌐 Publicación en GitHub Pages

El proyecto está disponible en línea para ser probado desde cualquier dispositivo:

🔗 **[Ver Aplicación en Vivo](https://danielsantiagov.github.io/caballo_de_ajedrez/)**

---

## 👨‍💻 Autor del Proyecto

| Nombre        | Info                                |
|---------------|-------------------------------------|
| 🧑 Daniel Santiago | Estudiante de Campuslands |
| 🎓 Formación      | Desarrollo Web Full Stack |
| 💻 Enfoque        | JavaScript, React, Node.js |
| 📍 Ubicación      | Piedecuesta, Santander - Colombia |

---

## 🧪 CÓDIGO DESTACADO

### CSS Moderno con Variables
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

.chessboard {
    display: grid;
    grid-template-columns: repeat(8, 60px);
    grid-template-rows: repeat(8, 60px);
    border: 3px solid var(--primary-color);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--shadow-hover);
}
```

### JavaScript Orientado a Objetos
```javascript
class ChessKnightCalculator {
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
}
```

---

## 💬 Conclusión

Este proyecto representa una evolución significativa en el desarrollo web frontend, demostrando la capacidad de crear aplicaciones interactivas y visualmente atractivas utilizando tecnologías web estándar. La implementación de un tablero de ajedrez visual con cálculo de movimientos en tiempo real muestra el potencial de JavaScript moderno para crear experiencias de usuario ricas y educativas.

### Logros Técnicos
- ✅ **Arquitectura Sólida**: Código bien estructurado y mantenible
- ✅ **UX Excepcional**: Interfaz intuitiva y visualmente atractiva
- ✅ **Performance Optimizada**: Cálculos eficientes y renderizado rápido
- ✅ **Responsive Design**: Funciona perfectamente en todos los dispositivos
- ✅ **Accesibilidad**: Interfaz accesible para todos los usuarios

### Aprendizajes Clave
- Programación orientada a objetos en JavaScript
- Manipulación avanzada del DOM
- Diseño responsive con CSS Grid y Flexbox
- Gestión de estado en aplicaciones web
- Implementación de animaciones y efectos visuales
- Validación robusta de datos de usuario

El proyecto no solo cumple con los requisitos funcionales, sino que también establece un estándar de calidad en términos de diseño, usabilidad y experiencia de usuario, preparando el camino para desarrollos más complejos en el futuro.

---

## 🎯 Entregable Final

Repositorio: [GitHub – Proyecto Caballo Ajedrez](https://github.com/DanielSantiagoV/caballo_de_ajedrez.git)  
Despliegue: [GitHub Pages – Caballo Ajedrez](https://danielsantiagov.github.io/caballo_de_ajedrez/)

---

## 📞 Contacto y Redes

### 📱 Contacto Directo
- 📧 Email: [vinascodaniel9@gmail.com](mailto:vinascodaniel9@gmail.com)
- 📱 Teléfono: 315 6990555

### 🌐 Redes Sociales
- 🐙 [GitHub](https://github.com/DanielSantiagoV)
- 🎵 [Spotify - Mi Playlist de Programación](https://open.spotify.com/playlist/6a3d9qWLg1cOyMRWoqwr16)

---

### 🎵 Ambiente de Trabajo
- 🎧 [Mi Playlist de Programación](https://open.spotify.com/playlist/6a3d9qWLg1cOyMRWoqwr16)

---

## 💭 Filosofía Personal

> "El código no es solo lo que hago. Es lo que soy. Cada línea de código es una oportunidad para crear algo extraordinario y dejar una huella en el mundo digital." - Daniel Santiago

---

## ✨ Características Destacadas del Proyecto

✔️ 🎨 **Diseño Moderno**: Interfaz elegante con gradientes y animaciones  
✔️ 📱 **100% Responsive**: Optimizado para móviles, tablets y desktop  
✔️ ♞ **Tablero Visual**: Representación gráfica interactiva del tablero  
✔️ ⚡ **Cálculos en Tiempo Real**: Movimientos calculados instantáneamente  
✔️ 🎯 **Interactividad Completa**: Clic en casillas para cambiar posición  
✔️ 🛡️ **Validación Robusta**: Manejo completo de errores de usuario  
✔️ 🔧 **Código Modular**: Arquitectura orientada a objetos  
✔️ 🎭 **Animaciones Suaves**: Transiciones y efectos visuales  
✔️ ♿ **Accesibilidad**: Navegación por teclado y contraste adecuado  
✔️ 🚀 **Performance Optimizada**: Código eficiente y rápido  

---

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🌍 Documentación en Otros Idiomas

- 🇺🇸 [English Documentation](README_EN.md)

---

<p align="center">
  Desarrollado con ❤️ por Daniel Santiago Vinasco<br>
  🔥 <b><a href="https://github.com/DanielSantiagoV">Visita mi GitHub</a></b> 🚀
</p>