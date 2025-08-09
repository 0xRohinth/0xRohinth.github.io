# Rohinth Rathna - Personal Website

> A Jekyll-based personal website for Rohinth Rathna, deployed with GitHub Pages

## Quick Start

**Prerequisites:** Ruby 3.0+ and Bundler

```bash
# 1. Clone the repository
git clone https://github.com/ybressler/personal-website.git
cd personal-website

# 2. Install dependencies
bundle install

# 3. Run locally
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site!

## 📋 Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [Advanced Configuration](#advanced-configuration)

## Installation

### System Requirements
- **Ruby**: 3.0 or higher
- **Bundler**: Latest version
- **Git**: For version control

### Setup Steps

1. **Install Ruby and Bundler**
   ```bash
   # macOS (using Homebrew)
   brew install ruby
   gem install bundler
   
   # Ubuntu/Debian
   sudo apt update
   sudo apt install ruby-full build-essential
   gem install bundler --user-install
   ```

2. **Clone and Setup**
   ```bash
   git clone https://github.com/ybressler/personal-website.git
   cd personal-website
   bundle install
   ```

3. **Verify Installation**
   ```bash
   bundle exec jekyll serve
   ```

## Development

### Project Structure
```
├── _config.yml         # Jekyll configuration
├── _data/             # Data files
├── _includes/         # Reusable components
├── _layouts/          # Page templates
├── assets/            # CSS, JS, images
├── pages/             # Main pages
└── index.md           # Homepage
```

### Running Locally
```bash
# Start development server
bundle exec jekyll serve

# With live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build
```

<details>
<summary>🎨 Content Creation Guide</summary>

### Creating Pages
You can create pages using [markdown or HTML](MARKDOWN_HTML_GUIDE.md).

### Available Components
Use these styled components in your content:

```html
<div class="info-msg">
  <i class="fa fa-info-circle"></i>
  This is an info message.
</div>

<div class="success-msg">
  <i class="fa fa-check"></i>
  This is a success message.
</div>

<div class="warning-msg">
  <i class="fa fa-warning"></i>
  Warning message here.
</div>

<div class="error-msg">
  <i class="fa fa-times-circle"></i>
  This is an error message.
</div>
```

### Theme Information
- **Base theme**: [jekyll-theme-minimal-resume](https://github.com/murraco/jekyll-theme-minimal-resume)
- **Menu system**: [Jekyll Menus](https://github.com/forestryio/jekyll-menus)

</details>

---
**Built with ❤️ using Jekyll and GitHub Pages**
