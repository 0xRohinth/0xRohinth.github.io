const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const OUTPUT_DIR = __dirname;
const PORTFOLIO_MD_PATH = path.join(__dirname, 'content', 'portfolio.md');

// Layout wrapper for Cyber Portfolio site
function getLayoutHTML({ title, content, activeNav = 'portfolio', data = {} }) {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${data.name || 'Rohinth Rathna'} - Cybersecurity & Blue Team</title>
  <meta name="description" content="Cyber Portfolio & Security Knowledge Base v2.0 - ${data.name || 'Rohinth Rathna'}">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="icon" href="favicon.ico">
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body class="bg-abyss text-gray-300 min-h-screen flex flex-col font-sans selection:bg-neonCyan selection:text-abyss">

  <!-- Header / Navigation -->
  <header class="sticky top-0 z-40 bg-steel/90 backdrop-blur border-b border-steelBorder">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="index.html" class="flex items-center space-x-3 group">
        <div class="w-10 h-10 rounded-lg bg-steelBorder border border-neonCyan/40 flex items-center justify-center text-neonCyan font-mono font-bold text-xl group-hover:border-neonCyan group-hover:shadow-[0_0_15px_rgba(88,166,255,0.4)] transition">
          0xR
        </div>
        <div>
          <span class="text-white font-bold tracking-wide text-lg block leading-none">${data.name || 'Rohinth Rathna'}</span>
          <span class="text-xs font-mono text-neonCyan tracking-wider">BLUE TEAM // SOC ANALYST</span>
        </div>
      </a>

      <nav class="flex items-center space-x-1 sm:space-x-4">
        <a href="index.html" class="px-3 py-2 rounded-md font-mono text-sm ${activeNav === 'portfolio' ? 'text-neonCyan bg-steelBorder/50 font-semibold border border-neonCyan/30' : 'text-gray-300 hover:text-white hover:bg-steelBorder/30'} transition flex items-center space-x-2">
          <i class="fas fa-user-shield text-xs"></i>
          <span>[ Portfolio ]</span>
        </a>
        <a href="portfolio.html" class="px-3 py-2 rounded-md font-mono text-sm ${activeNav === 'portfolio' ? 'text-neonCyan bg-steelBorder/50 font-semibold border border-neonCyan/30' : 'text-gray-300 hover:text-white hover:bg-steelBorder/30'} transition flex items-center space-x-2">
          <i class="fas fa-layer-group text-xs"></i>
          <span>[ Details ]</span>
        </a>
        <a href="${data.social?.blogsite || 'https://0xrohinth.github.io/blogsite/index.html#writeups'}" target="_blank" class="px-3 py-2 rounded-md font-mono text-sm text-neonCyan hover:bg-neonCyan/10 border border-neonCyan/40 transition flex items-center space-x-2">
          <i class="fas fa-terminal text-xs"></i>
          <span>Blog & Writeups <i class="fas fa-external-link-alt text-[10px]"></i></span>
        </a>
        <a href="${data.resume_url || 'Rohinth_Rathna_Resume.pdf'}" target="_blank" class="px-3 py-2 rounded-md font-mono text-sm text-mintGreen hover:bg-mintGreen/10 border border-mintGreen/40 transition flex items-center space-x-2">
          <i class="fas fa-file-invoice text-xs"></i>
          <span>Resume</span>
        </a>
      </nav>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
    ${content}
  </main>

  <!-- Footer -->
  <footer class="bg-steel/50 border-t border-steelBorder py-6 mt-12">
    <div class="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400 font-mono flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <div>
        &copy; ${new Date().getFullYear()} ${data.name || 'Rohinth Rathna'} | Cyber Portfolio v2.0
      </div>
      <div class="flex space-x-5 text-base text-gray-400">
        ${data.social?.github ? `<a href="${data.social.github}" target="_blank" class="hover:text-neonCyan transition" title="GitHub"><i class="fab fa-github"></i></a>` : ''}
        ${data.social?.linkedin ? `<a href="${data.social.linkedin}" target="_blank" class="hover:text-neonCyan transition" title="LinkedIn"><i class="fab fa-linkedin"></i></a>` : ''}
        ${data.social?.email ? `<a href="${data.social.email}" class="hover:text-neonCyan transition" title="Email"><i class="fas fa-envelope"></i></a>` : ''}
        ${data.social?.blogsite ? `<a href="${data.social.blogsite}" target="_blank" class="hover:text-neonCyan transition" title="CTF Blog Site"><i class="fas fa-terminal"></i></a>` : ''}
      </div>
    </div>
  </footer>
</body>
</html>`;
}

// Read and parse markdown portfolio file
function loadPortfolioData() {
  if (!fs.existsSync(PORTFOLIO_MD_PATH)) {
    console.error(`Portfolio file not found at ${PORTFOLIO_MD_PATH}`);
    return {};
  }
  const fileContent = fs.readFileSync(PORTFOLIO_MD_PATH, 'utf-8');
  const parsed = matter(fileContent);
  return parsed.data;
}

// Generate Portfolio Pages from Markdown Frontmatter
function generatePages() {
  const p = loadPortfolioData();

  const skillsHTML = (p.skills || []).map(skill => `
    <div class="bg-steel border border-steelBorder rounded-xl p-6 shadow-lg">
      <div class="w-10 h-10 rounded-lg bg-neonCyan/10 border border-neonCyan/40 flex items-center justify-center text-neonCyan mb-4">
        <i class="fas fa-shield-alt text-lg"></i>
      </div>
      <h3 class="text-lg font-bold text-white mb-2">${skill.category}</h3>
      <p class="text-xs text-gray-400 mb-4">${skill.description}</p>
      <div class="flex flex-wrap gap-2 font-mono text-xs">
        ${(skill.tags || []).map(t => `<span class="px-2.5 py-1 rounded bg-abyss border border-steelBorder text-neonCyan">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  const projectsHTML = (p.projects || []).map(proj => {
    const badgeColorClass = proj.badge_color === 'green'
      ? 'text-mintGreen bg-mintGreen/10 border-mintGreen/30'
      : proj.badge_color === 'yellow'
        ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30'
        : 'text-neonCyan bg-neonCyan/10 border-neonCyan/30';

    return `
      <div class="bg-steel border border-steelBorder hover:border-neonCyan/60 rounded-xl p-6 transition shadow-lg flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-mono px-2.5 py-1 rounded border ${badgeColorClass}">${proj.badge}</span>
            <a href="${proj.url}" target="_blank" class="text-gray-400 hover:text-white transition"><i class="fab fa-github text-lg"></i></a>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">${proj.title}</h3>
          <p class="text-sm text-gray-400 leading-relaxed mb-4">${proj.description}</p>
        </div>
        <div class="pt-4 border-t border-steelBorder/60 flex items-center justify-between">
          <span class="text-xs font-mono text-gray-400">${proj.tag}</span>
          <a href="${proj.url}" target="_blank" class="text-xs font-mono text-neonCyan hover:underline flex items-center space-x-1">
            <span>Repository</span> <i class="fas fa-external-link-alt text-[10px]"></i>
          </a>
        </div>
      </div>
    `;
  }).join('');

  const certsHTML = (p.certifications || []).map(cert => `
    <div class="p-4 rounded-lg bg-abyss border border-steelBorder flex items-center justify-between">
      <div>
        <span class="text-white font-bold block text-sm">${cert.name}</span>
        <span class="text-gray-400">${cert.issuer}</span>
      </div>
      <span class="${cert.status_color === 'mintGreen' ? 'text-mintGreen' : 'text-yellow-400'} font-semibold">${cert.status}</span>
    </div>
  `).join('');

  const eduHTML = (p.education || []).map(edu => `
    <div class="p-4 rounded-lg bg-abyss border border-steelBorder">
      <div class="flex justify-between items-start mb-2">
        <span class="text-white font-bold text-sm block">${edu.degree}</span>
        <span class="text-xs font-mono text-neonCyan">${edu.period}</span>
      </div>
      <p class="text-xs text-gray-400">${edu.institution}</p>
    </div>
  `).join('');

  const expHTML = (p.experience || []).map(exp => `
    <div class="p-4 rounded-lg bg-abyss border border-steelBorder">
      <div class="flex justify-between items-start mb-2">
        <span class="text-white font-bold text-sm block">${exp.role}</span>
        <span class="text-xs font-mono text-neonCyan">${exp.company}</span>
      </div>
      <p class="text-xs text-gray-400">${exp.description}</p>
    </div>
  `).join('');

  const content = `
    <div class="space-y-12">
      <!-- Profile Header Banner -->
      <section class="bg-steel/80 border border-steelBorder rounded-2xl p-8 sm:p-10 relative shadow-2xl">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div class="relative">
            <div class="w-32 h-32 rounded-2xl bg-steelBorder border-2 border-neonCyan p-1 overflow-hidden shadow-[0_0_25px_rgba(88,166,255,0.3)]">
              <img src="${p.avatar || 'images/me.jpg'}" alt="${p.name}" class="w-full h-full object-cover rounded-xl" onerror="this.src='https://via.placeholder.com/150/161b22/58a6ff?text=0xRohinth'">
            </div>
            <span class="absolute -bottom-2 -right-2 bg-mintGreen text-abyss font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border border-abyss">
            </span>
          </div>

          <div class="flex-1 text-center md:text-left">
            <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
              <span class="px-3 py-1 text-xs font-mono rounded-full bg-neonCyan/10 text-neonCyan border border-neonCyan/30">
                ${p.title || 'Aspiring Blue Team Analyst'}
              </span>
              <span class="px-3 py-1 text-xs font-mono rounded-full bg-mintGreen/10 text-mintGreen border border-mintGreen/30">
                ${p.subtitle || 'SOC & Security Operations'}
              </span>
              <span class="px-3 py-1 text-xs font-mono rounded-full bg-steelBorder/80 text-gray-300">
                <i class="fas fa-map-marker-alt mr-1"></i> ${p.location || 'Tirunelveli, India'}
              </span>
            </div>

            <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">${p.name}</h1>
            <p class="text-gray-300 text-base leading-relaxed max-w-2xl mb-6">${p.bio}</p>

            <!-- Quick Links -->
            <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 font-mono text-xs">
              <a href="${p.social?.blogsite}" target="_blank" class="px-4 py-2 rounded-lg bg-neonCyan/20 hover:bg-neonCyan/30 text-neonCyan border border-neonCyan/40 font-semibold transition flex items-center space-x-2">
                <i class="fas fa-terminal"></i>
                <span>Explore CTF Walkthroughs & Blog</span>
                <i class="fas fa-external-link-alt text-[10px]"></i>
              </a>
              <a href="${p.resume_url}" target="_blank" class="px-4 py-2 rounded-lg bg-steelBorder hover:bg-steelBorder/80 text-mintGreen border border-mintGreen/40 font-semibold transition flex items-center space-x-2">
                <i class="fas fa-file-download"></i>
                <span>Download CV</span>
              </a>
              ${p.social?.github ? `<a href="${p.social.github}" target="_blank" class="px-3 py-2 rounded-lg bg-steel border border-steelBorder hover:border-neonCyan text-gray-300 transition"><i class="fab fa-github text-base"></i></a>` : ''}
              ${p.social?.linkedin ? `<a href="${p.social.linkedin}" target="_blank" class="px-3 py-2 rounded-lg bg-steel border border-steelBorder hover:border-neonCyan text-gray-300 transition"><i class="fab fa-linkedin text-base"></i></a>` : ''}
              ${p.social?.email ? `<a href="${p.social.email}" class="px-3 py-2 rounded-lg bg-steel border border-steelBorder hover:border-neonCyan text-gray-300 transition"><i class="fas fa-envelope text-base"></i></a>` : ''}
            </div>
          </div>
        </div>
      </section>

      <!-- Skill Matrix Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-extrabold text-white flex items-center space-x-3">
          <i class="fas fa-layer-group text-neonCyan"></i>
          <span>Skill Matrix & Security Arsenal</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${skillsHTML}
        </div>
      </section>

      <!-- Featured Projects Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-extrabold text-white flex items-center space-x-3">
          <i class="fas fa-project-diagram text-neonCyan"></i>
          <span>Featured Security & Engineering Projects</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${projectsHTML}
        </div>
      </section>

      <!-- Education, Certifications & Experience -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Education -->
        <div class="bg-steel border border-steelBorder rounded-xl p-6 shadow-lg space-y-4">
          <h3 class="text-xl font-bold text-white flex items-center space-x-2">
            <i class="fas fa-graduation-cap text-neonCyan"></i>
            <span>Education</span>
          </h3>
          <div class="space-y-4 font-mono text-xs">
            ${eduHTML}
          </div>
        </div>

        <!-- Certifications -->
        <div class="bg-steel border border-steelBorder rounded-xl p-6 shadow-lg space-y-4">
          <h3 class="text-xl font-bold text-white flex items-center space-x-2">
            <i class="fas fa-certificate text-neonCyan"></i>
            <span>Certifications</span>
          </h3>
          <div class="space-y-4 font-mono text-xs">
            ${certsHTML}
          </div>
        </div>

        <!-- Experience -->
        <div class="bg-steel border border-steelBorder rounded-xl p-6 shadow-lg space-y-4">
          <h3 class="text-xl font-bold text-white flex items-center space-x-2">
            <i class="fas fa-briefcase text-neonCyan"></i>
            <span>Experience</span>
          </h3>
          <div class="space-y-4">
            ${expHTML}
          </div>
        </div>
      </section>
    </div>
  `;

  const htmlIndex = getLayoutHTML({
    title: 'Aspiring Blue Team Analyst Portfolio',
    content,
    activeNav: 'portfolio',
    data: p
  });

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), htmlIndex);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'portfolio.html'), htmlIndex);
  console.log('Generated index.html and portfolio.html from content/portfolio.md');
}

function main() {
  console.log('--- Building Cyber Portfolio v2.0 from content/portfolio.md ---');
  generatePages();
  console.log('--- Build Complete Successfully! ---');
}

main();
