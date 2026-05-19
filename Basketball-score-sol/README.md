# 🏀 Basketball Score Tracker

A simple and elegant basketball score tracking application built with vanilla HTML, CSS, and JavaScript. Perfect for keeping track of scores during basketball games for HOME and GUEST teams.

## ✨ Features

- **Real-time Score Updates**: Instantly update scores for both HOME and GUEST teams
- **Multiple Point Options**: Add +1, +2, or +3 points with dedicated buttons
- **New Game Function**: Reset both scores to 0 with a single click
- **Responsive Design**: Clean, centered layout with a modern card-based design
- **Interactive Buttons**: Hover effects for better user experience
- **Large Display**: Easy-to-read score display using the Cursed Timer font
- **Leader Highlighting** ⭐: The team with the higher score is highlighted with gold text and pink glow effect
- **Period/Quarter Tracking**: Display current period (1-4) with a button to advance to the next period
- **Fouls Counter**: Track team fouls with increment (+) and decrement (−) buttons for each team

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

## ![Basketball Score Tracker](./ss/Screenshot%20basketball-project.png)

![Basketball Score Tracker Upgrade](./ss/Screenshot%20basketball-project-up2.png)

## 📖 How to Use

1. **Add Points**: Click the `+1`, `+2`, or `+3` buttons under HOME or GUEST to increase their score
2. **Track Score**: Watch the score update in real-time on the digital display
3. **Leader Highlight**: The team with the higher score will be highlighted with gold text and a pink glow effect
4. **Track Fouls**: Use the `+` and `−` buttons in the Fouls section to track team fouls
5. **Advance Periods**: Click `Next Period` to move to the next period (cycles from 1-4)
6. **Reset Game**: Click the `New Game` button to reset all scores, fouls, and period back to 0/1

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

- `incrementHome(points)`: Add points to HOME team and update leader
- `incrementGuest(points)`: Add points to GUEST team and update leader
- `incrementHomeFouls()`: Increment HOME team fouls
- `decrementHomeFouls()`: Decrement HOME team fouls (minimum 0)
- `incrementGuestFouls()`: Increment GUEST team fouls
- `decrementGuestFouls()`: Decrement GUEST team fouls (minimum 0)
- `nextPeriod()`: Advance to next period (cycles 1-4)
- `updateLeader()`: Update visual highlighting based on score comparison
- `newGame()`: Reset all game data including scores, fouls, and period

### CSS Classes

- `.container`: Main card wrapper
- `.team`: Individual team section
- `.team.leader`: Active leader styling (gold text, pink border, glow effect)
- `.button-score`: Scoring buttons
- `.point-text`: Score display area
- `.new-game`: New Game button styling
- `.period-display`: Period counter container
- `.period-info`: Period information display
- `.button-period`: Period advance button
- `.stats-group`: Fouls counter container
- `.stat-item`: Individual stat (fouls) wrapper
- `.button-stat`: Increment/decrement buttons for stats

## 🎯 Future Enhancements

- Add team name customization
- Save game history to local storage
- Add sound effects for scoring
- Add game timer/countdown feature
- Implement game statistics (points per period, shooting percentage)
- Mobile app version
- Keyboard shortcuts for quick scoring
- Undo/Redo functionality
- Multiple game modes (Best of 3, Best of 5)

## 📝 Notes

This is a learning project from the Scrimba Fullstack Developer Path. It demonstrates fundamental concepts of:

- DOM manipulation
- Event handling
- CSS layout (Flexbox)
- State management with JavaScript variables

### ⭐ Stretch Goals Implemented

This enhanced version includes all the stretch goals for additional functionality:

1. **Highlight the Leader** 🏆
   - The team with the higher score is automatically highlighted
   - Visual effects include: gold-colored team name, pink border, and glowing shadow
   - Highlights disappear when scores are tied
   - Updates in real-time as scores change

2. **Period/Quarter Tracking** 📊
   - Display shows current period (1, 2, 3, or 4)
   - "Next Period" button advances to the next period
   - Automatically cycles back to period 1 after period 4
   - Period resets when "New Game" is clicked

3. **Fouls Counter** ⚠️
   - Each team has independent foul tracking
   - `+` button increments fouls
   - `−` button decrements fouls (cannot go below 0)
   - Fouls are prominently displayed below the scoring buttons
   - Resets to 0 when "New Game" is clicked

## 🤝 About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜

- [Our courses](https://scrimba.com/courses)
- [The Frontend Career Path](https://scrimba.com/fullstack-path-c0fullstack)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

---

**Happy Coding!** 🚀
