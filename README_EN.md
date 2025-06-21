# ♞ Chess Knight Movement Calculator

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="MIT License">
</p>

<p align="center">
  <strong>A modern, interactive web application for calculating and visualizing all possible moves of a chess knight on an 8x8 board.</strong>
</p>

---

## 🎯 Project Overview

This project implements a sophisticated web application designed to calculate and visualize all possible moves of a chess knight from any given position on an 8x8 chessboard. Built with modern web technologies, it provides an intuitive and visually appealing interface for learning chess knight movements.

### ✨ Key Features

- **🎯 Interactive Visual Chessboard**: 8x8 chessboard with traditional colors and clickable squares
- **♞ Real-time Move Calculation**: Instantly calculates and highlights all possible knight moves
- **📱 Responsive Design**: Fully responsive interface that works on all devices
- **🎨 Modern UI/UX**: Elegant design with smooth animations and gradients
- **⚡ Dual Input Methods**: Use number inputs or click directly on the board
- **📊 Live Move Counter**: Real-time display of possible moves count
- **🔄 Reset Functionality**: Easy board reset to center position
- **⌨️ Keyboard Shortcuts**: Enter to calculate, Ctrl+R to clear

---

## 🚀 Live Demo

**🔗 [Try the Application Live](https://danielsantiagov.github.io/caballo_de_ajedrez/)**

---

## 🛠️ Technologies Used

### Frontend Stack
- **HTML5**: Semantic structure and modern markup
- **CSS3**: 
  - CSS Grid and Flexbox for layouts
  - CSS Custom Properties (variables)
  - Animations and transitions
  - Responsive design with media queries
- **JavaScript ES6+**:
  - Object-oriented programming with classes
  - Arrow functions and destructuring
  - Advanced DOM manipulation
  - Event handling and state management

### Development Tools
- **Git & GitHub**: Version control and deployment
- **Google Fonts**: Poppins typography for better readability

---

## 📁 Project Structure

```
chess-knight-calculator/
│
├── 📄 index.html              # Main HTML file
├── 📁 css/
│   └── 📄 style.css           # Modern responsive styles
├── 📁 js/
│   └── 📄 script.js           # JavaScript logic in classes
├── 📁 img/
│   └── 📄 caballoajedrez.png  # Project icon
├── 📄 README.md               # Spanish documentation
├── 📄 README_EN.md            # English documentation
└── 📄 LICENSE                 # MIT License
```

---

## 🎮 How to Use

### Method 1: Number Inputs
1. Enter the row (1-8) in the "Row" field
2. Enter the column (1-8) in the "Column" field
3. Click "♞ Calculate Movements"
4. View results on the board and in the list

### Method 2: Direct Board Click
1. Click directly on any square of the chessboard
2. Position updates automatically
3. Movements are calculated and displayed instantly

### Additional Features
- **🔄 Clear**: Resets the board to center position (4,4)
- **⌨️ Enter**: Press Enter in any input to calculate
- **⌨️ Ctrl+R**: Keyboard shortcut to clear the board

---

## 🎨 Design & UX

### Color Palette
- **Primary**: #2c3e50 (Dark Blue)
- **Secondary**: #3498db (Light Blue)
- **Accent**: #e74c3c (Red)
- **Success**: #27ae60 (Green)
- **Background**: Purple-blue gradient

### Design Features
- **🎯 Mobile-First**: Optimized design for mobile devices
- **🎨 Smooth Animations**: 0.3s transitions on all elements
- **📱 Responsive Grid**: Adaptive layout with CSS Grid
- **🎭 Hover Effects**: Visual interactions on buttons and squares
- **♿ Accessibility**: Proper contrast and keyboard navigation

---

## 💻 Code Architecture

### Main Class: `ChessKnightCalculator`
```javascript
class ChessKnightCalculator {
    constructor() {
        this.boardSize = 8;
        this.currentPosition = { row: 4, col: 4 };
        this.possibleMoves = [];
        this.board = null;
    }
    
    // Core methods:
    - init()                    // Initialization
    - calculateMoves()          // Move calculation
    - createChessboard()        // Board generation
    - updateDisplay()           // Visual updates
    - handleBoardClick()        // Click handling
}
```

### Code Features
- **🔧 Modular**: Code organized in specific methods
- **🛡️ Robust**: Complete input validation
- **⚡ Efficient**: Optimized algorithm for calculations
- **📖 Readable**: Detailed comments and descriptive names
- **🔄 Maintainable**: Clear and extensible structure

---

## 🧪 Technical Highlights

### CSS Modern Features
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

### JavaScript OOP Implementation
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

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/DanielSantiagoV/caballo_de_ajedrez.git
   ```

2. Navigate to the project directory:
   ```bash
   cd caballo_de_ajedrez
   ```

3. Open `index.html` in your browser or start a local server:
   ```bash
   python -m http.server 8000
   ```

4. Visit `http://localhost:8000` in your browser

---

## 🎯 Learning Objectives

This project demonstrates:
- **Object-Oriented Programming** in JavaScript
- **Advanced DOM Manipulation** and event handling
- **Responsive Design** with CSS Grid and Flexbox
- **State Management** in web applications
- **Animation Implementation** and visual effects
- **Robust Input Validation** and error handling

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

| Name | Info |
|------|------|
| 🧑 Daniel Santiago | Campuslands Student |
| 🎓 Education | Full Stack Web Development |
| 💻 Focus | JavaScript, React, Node.js |
| 📍 Location | Piedecuesta, Santander - Colombia |

### Contact Information
- 📧 Email: [vinascodaniel9@gmail.com](mailto:vinascodaniel9@gmail.com)
- 📱 Phone: 315 6990555
- 🐙 GitHub: [DanielSantiagoV](https://github.com/DanielSantiagoV)

---

## ✨ Project Features

✔️ 🎨 **Modern Design**: Elegant interface with gradients and animations  
✔️ 📱 **100% Responsive**: Optimized for mobile, tablet, and desktop  
✔️ ♞ **Visual Chessboard**: Interactive graphical representation  
✔️ ⚡ **Real-time Calculations**: Instant movement calculations  
✔️ 🎯 **Complete Interactivity**: Click squares to change knight position  
✔️ 🛡️ **Robust Validation**: Complete user error handling  
✔️ 🔧 **Modular Code**: Object-oriented architecture  
✔️ 🎭 **Smooth Animations**: Transitions and visual effects  
✔️ ♿ **Accessibility**: Keyboard navigation and proper contrast  
✔️ 🚀 **Performance Optimized**: Efficient and fast code  

---

## 🌟 Acknowledgments

- Chess community for inspiration
- Modern web development best practices
- CSS Grid and Flexbox for responsive layouts
- JavaScript ES6+ features for clean code

---

<p align="center">
  Made with ❤️ by Daniel Santiago Vinasco<br>
  🔥 <b><a href="https://github.com/DanielSantiagoV">Visit my GitHub</a></b> 🚀
</p> 