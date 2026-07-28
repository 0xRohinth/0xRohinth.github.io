# 🛡️ Rohinth Rathna - Cyber Portfolio & Security Knowledge Base (v2.0)

[![Build & Deploy to GitHub Pages](https://github.com/0xRohinth/0xRohinth.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/0xRohinth/0xRohinth.github.io/actions/workflows/deploy.yml)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-58a6ff.svg)](https://nodejs.org)
[![Theme](https://img.shields.io/badge/theme-Blue%20Team%20Cyan-3fb950.svg)](#)

Welcome to the repository of **Rohinth Rathna**'s personal Cyber Portfolio site built with a high-performance Node.js static generation engine and Tailwind CSS.

- 🌐 **Live Portfolio:** [0xrohinth.github.io](https://0xrohinth.github.io/)
- 📑 **Dedicated CTF Writeups & Security Blog:** [0xrohinth.github.io/blogsite](https://0xrohinth.github.io/blogsite/index.html#writeups)

---

## 🚀 Features

- **Blue Team / Matrix Cyan Dark Aesthetic:** Custom-tailored dark theme (`#0d1117` Abyss Slate & `#161b22` Dark Steel) with glowing cyan accents.
- **Skill Matrix & Security Arsenal:** Clean breakdown of SOC operations, penetration testing, log analysis tools, and scripting capabilities.
- **Featured Projects Showcase:** Highlights open-source security tools such as `IoT Interface`, `CryptoNotes` (Obsidian plugin), and `Encryptmalware`.
- **Integrated Blog Portal:** Seamless link to dedicated writeups engine (`blogsite`).
- **Fully Automated CI/CD:** Powered by GitHub Actions (`.github/workflows/deploy.yml`) for automated builds and deployment to GitHub Pages.

---

## 🛠️ Technology Stack

- **Engine:** Node.js (custom lightweight static build pipeline)
- **Styling:** Tailwind CSS (v3.4) + Custom CSS (`src/style.css`)
- **Icons & Typography:** FontAwesome 6, Inter, Fira Code
- **Deployment:** GitHub Pages & GitHub Actions

---

## 💻 Local Development Setup

### 1. Prerequisites
- Node.js (v18 or v20+)
- npm

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/0xRohinth/0xRohinth.github.io.git
cd 0xRohinth.github.io
npm install
```

### 3. Build Site & Assets
Compile Tailwind CSS and run the Node static site engine:

```bash
npm run build
```

This will output:
- `assets/css/style.css` (minified Tailwind CSS)
- `index.html` & `portfolio.html`

---

## 📁 Repository Structure

```text
0xRohinth.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions auto-deployment workflow
├── assets/
│   └── css/
│       └── style.css           # Compiled minified Tailwind CSS
├── images/                      # Profile photo and asset images
├── src/
│   └── style.css               # Tailwind directives & theme overrides
├── build.js                    # Node.js static site builder engine
├── index.html                  # Main portfolio landing page
├── portfolio.html              # Dedicated portfolio details page
├── package.json                # Project dependencies & scripts
├── tailwind.config.js          # Tailwind color & font configuration
└── README.md                   # Repository documentation
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
