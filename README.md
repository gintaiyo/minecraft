# ⛏️ Minecraft Utility Hub

A retro, pixelated web application built for Minecraft players. It features 7 essential tools for in-game mechanics, coordinate mapping, resource planning, and redstone logic, complete with custom CSS mob animations.

---

## 🚀 Features

- **🌀 Nether Portal Calculator:** Converts Overworld and Nether coordinates accurately based on the 1:8 dimension ratio.
- **📦 Build Resource Calculator:** Calculates raw material needs, stacks (64/16/1), double chests, and Shulker box storage requirements.
- **🔴 Redstone Signal Calculator:** Tracks redstone power loss over block distances and recommends repeater placements.
- **📚 Enchantment Optimizer:** Guides combining order for books in an anvil to minimize prior work penalties and avoid "Too Expensive!".
- **💀 Mob Farm Yield Estimator:** Estimates hourly XP and item drop rates for Dungeon Spawners, General Mob Towers, and Enderman Farms.
- **🌾 Villager Discount Tracker:** Tracks emerald price reductions across multiple zombie curing stages.
- **💎 Beacon Pyramid Planner:** Calculates total blocks and stack counts needed for Levels 1–4 beacon pyramids.
- **👾 Animated Mobs:** Features custom pixelated CSS animations of Steve, Creeper, Wolf, Cat, and Wither.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS (Embedded JavaScript)
- **Styling:** CSS3 (Pixelated retro GUI theme using Google Fonts: *Press Start 2P* & *VT323*)

---

## 📁 Project Structure

mc-utility-hub/
├── package.json
├── server.js
├── public/
│   └── css/
│       └── style.css
└── views/
    ├── index.ejs
    ├── portal-calculator.ejs
    ├── resource-calculator.ejs
    ├── redstone-logic.ejs
    ├── enchanting-guide.ejs
    ├── mob-grinder.ejs
    ├── villager-trades.ejs
    └── beacon-planner.ejs

---

## 💻 Getting Started

### Prerequisites

Make sure you have Node.js and NPM installed on your machine.

### Installation

1. Clone or download this repository.
2. Navigate to the project directory: `cd mc-utility-hub`
3. Install the dependencies: `npm install`

### Running the Application

Start the Express server using `npm start` and open http://localhost:3000 in your browser.

---

## 🌐 Routes Overview

| Route | Description |
| :--- | :--- |
| `/` | Main dashboard displaying all available tools |
| `/portal-calculator` | Overworld ↔ Nether coordinate converter |
| `/resource-calculator` | Storage & stack breakdown calculator |
| `/redstone-logic` | Signal attenuation & repeater planner |
| `/enchanting-guide` | Anvil penalty optimization guide |
| `/mob-grinder` | Farm yield and XP estimator |
| `/villager-trades` | Zombie cure discount tracker |
| `/beacon-planner` | Beacon pyramid material counter |
