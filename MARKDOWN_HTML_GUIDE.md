# 🛡️ Cyber Portfolio & Node.js Static Builder Guide (v2.0)

This guide documents how the modern **Cyber Portfolio v2.0** engine works and how you can manage all portfolio content directly using a single Markdown file: [`content/portfolio.md`](file:///d:/githubpages/0xRohinth.github.io/content/portfolio.md).

---

## 📝 Editing Portfolio Content via Markdown (`content/portfolio.md`)

You do **NOT** need to edit JavaScript code to modify your portfolio. All portfolio data is stored in standard Markdown frontmatter inside:
👉 `content/portfolio.md`

### 1. Modifying Personal Information & Bio

Open `content/portfolio.md` and edit the YAML frontmatter top section:

```yaml
name: "Rohinth Rathna S"
title: "SOC Analyst Aspirant"
subtitle: "Blue Team Operations"
location: "Tirunelveli, India"
avatar: "images/me.jpg"
resume_url: "rohinth_rathna_resume.pdf"
bio: "Passionate Cybersecurity student pursuing B.E. Computer Science & Engineering..."
```

### 2. Modifying Social & Blog Links

```yaml
social:
  github: "https://github.com/0xRohinth"
  linkedin: "https://www.linkedin.com/in/rohinth-rathna-s-355272254/"
  email: "mailto:rohinth.rathna@example.com"
  blogsite: "https://0xrohinth.github.io/blogsite/index.html#writeups"
```

### 3. Adding or Deleting Skills

Under `skills:`, edit or add/delete items:

```yaml
skills:
  - category: "SOC & Security Ops"
    description: "Log analysis, SIEM rules, incident handling, threat hunting."
    tags: ["SIEM Tools", "Wireshark", "Splunk", "Security Blue Team"]
  - category: "Pentesting & Analysis"
    description: "Web application pentesting, malware analysis, vulnerabilities."
    tags: ["Burp Suite", "Nmap", "Metasploit", "OWASP Top 10"]
```

### 4. Adding or Deleting Projects

To **add a new project**, add a block under `projects:` in `content/portfolio.md`:

```yaml
projects:
  - title: "My New Security Tool"
    badge: "Open Source"
    badge_color: "cyan" # cyan, green, or yellow
    tag: "Python / CLI"
    description: "A short description of what your tool does."
    url: "https://github.com/0xRohinth/MyNewTool"
```

To **delete a project**, simply remove its entry block under `projects:`.

### 5. Managing Certifications & Experience

```yaml
certifications:
  - name: "Google Cloud Cybersecurity Certificate"
    issuer: "Google Cloud / Coursera"
    status: "VERIFIED"
    status_color: "mintGreen" # mintGreen or yellow

experience:
  - role: "IoT & Embedded Systems Intern"
    company: "Taras Solutions"
    description: "Completed 1-month internship exploring fundamentals of hardware security."
```

---

## ⚡ Rebuilding the Site

Whenever you edit, add, or delete items in `content/portfolio.md`, run:

```bash
npm run build
```

This automatically reads `content/portfolio.md`, processes your updates, compiles Tailwind CSS, and updates `index.html` and `portfolio.html` instantly!