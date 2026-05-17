# 🏀 Basketball Score Tracker

A simple and elegant basketball score tracking application built with vanilla HTML, CSS, and JavaScript. Perfect for keeping track of scores during basketball games for HOME and GUEST teams.

## ✨ Features

- **Real-time Score Updates**: Instantly update scores for both HOME and GUEST teams
- **Multiple Point Options**: Add +1, +2, or +3 points with dedicated buttons
- **New Game Function**: Reset both scores to 0 with a single click
- **Responsive Design**: Clean, centered layout with a modern card-based design
- **Interactive Buttons**: Hover effects for better user experience
- **Large Display**: Easy-to-read score display using the Cursed Timer font

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Running the Project

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python (if available)
python -m http.server 8000
# Then open http://localhost:8000 in your browser

# Or using Node.js http-server
npx http-server
```

## 📸 Final Result

![Basketball Score Tracker](./ss/Screenshot%20basketball-project.png)

## 📖 How to Use

1. **Add Points**: Click the `+1`, `+2`, or `+3` buttons under HOME or GUEST to increase their score
2. **Track Score**: Watch the score update in real-time on the digital display
3. **Reset Game**: Click the `New Game` button at the top to reset both scores to 0

## 🎨 Design

- **Colors**: Dark blue background (#1B244A) with pink accents (#F94F6D)
- **Layout**: Centered card design with two team sections side by side
- **Typography**: Verdana for labels and buttons, Cursed Timer ULiL for score display
- **Responsive**: Flexbox layout for proper alignment and spacing

## 📁 File Structure

```
Basketball-score-sol/
├── index.html          # Main HTML file with structure
├── index.css           # Styling and layout
├── index.js            # JavaScript functionality
└── README.md           # This file
```

## 💻 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox and transitions
- **JavaScript (Vanilla)**: Score tracking and game logic
- **Google Fonts**: Cursed Timer ULiL font for score display

## 📚 Code Overview

### JavaScript Functions

- `incrementHome(points)`: Add points to HOME team
- `incrementGuest(points)`: Add points to GUEST team
- `newGame()`: Reset both scores to 0

### CSS Classes

- `.container`: Main card wrapper
- `.team`: Individual team section
- `.button-score`: Scoring buttons
- `.point-text`: Score display area
- `.new-game`: New Game button styling

## 🎯 Future Enhancements

- Add team name customization
- Save game history
- Add sound effects
- Implement quarter/period tracking
- Add fouls tracking
- Mobile app version

## 📝 Notes

This is a learning project from the Scrimba Fullstack Developer Path. It demonstrates fundamental concepts of:

- DOM manipulation
- Event handling
- CSS layout (Flexbox)
- State management with JavaScript variables

## 🤝 About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜

- [Our courses](https://scrimba.com/courses)
- [The Frontend Career Path](https://scrimba.com/fullstack-path-c0fullstack)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

---

**Happy Coding!** 🚀
