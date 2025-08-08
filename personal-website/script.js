const profile = {
  name: "Your Name",
  initials: "YN",
  role: "Full-Stack Developer",
  summary: "I build fast, accessible web apps and delightful user experiences.",
  location: "City, Country",
  yearsOfExperience: 3,
  focus: ["React", "Node.js", "TypeScript"],
  email: "you@example.com",
  socials: [
    { name: "GitHub", url: "https://github.com/yourname" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yourname/" },
    { name: "Twitter", url: "https://twitter.com/yourname" }
  ],
  skills: {
    Languages: ["JavaScript", "TypeScript", "Python", "SQL"],
    Frameworks: ["React", "Next.js", "Node.js", "Express"],
    Tools: ["Git", "Docker", "PostgreSQL", "Redis"],
    Cloud: ["AWS", "Vercel"],
    Testing: ["Jest", "Playwright"]
  },
  projects: [
    {
      title: "Project One",
      description: "A concise description of what this project does and why it matters.",
      tags: ["React", "API", "UI"],
      link: "https://example.com"
    },
    {
      title: "Project Two",
      description: "Another project with a focus on performance and reliability.",
      tags: ["Node.js", "Postgres"],
      link: "https://example.com"
    },
    {
      title: "Project Three",
      description: "A smaller tool that solves a specific problem elegantly.",
      tags: ["TypeScript", "CLI"],
      link: "https://example.com"
    }
  ],
  about: [
    { label: "Role", value: "Full-Stack Developer" },
    { label: "Location", value: "City, Country" },
    { label: "Open to", value: "Remote / Hybrid" },
    { label: "Interests", value: "UX, DX, Performance, Tooling" }
  ]
};

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function renderHero() {
  setText("brand-initials", profile.initials);
  setText("brand-name", profile.name);
  setText("hero-name", profile.name);
  setText("hero-role", profile.role);
  setText("hero-summary", profile.summary);
  setText("stat-location", profile.location);
  setText("stat-experience", `${profile.yearsOfExperience}+ years`);

  const focus = document.getElementById("stat-focus");
  if (focus) {
    focus.innerHTML = profile.focus.map((f) => `<span class="chip">${f}</span>`).join("");
  }
}

function renderSkills() {
  const container = document.getElementById("skills-content");
  if (!container) return;
  container.innerHTML = Object.entries(profile.skills)
    .map(([category, items]) => {
      const chips = items.map((s) => `<span class=\"chip\">${s}</span>`).join("");
      return `<div class=\"skill-card\">\n  <h3>${category}</h3>\n  <div class=\"chips\">${chips}</div>\n</div>`;
    })
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = profile.projects
    .map((p) => {
      const tags = p.tags.map((t) => `<span class=\"chip\">${t}</span>`).join("");
      const link = p.link ? `<a href=\"${p.link}\" target=\"_blank\" rel=\"noopener\">View ↗</a>` : "";
      return `<article class=\"project-card\">\n  <div class=\"title\">${p.title}</div>\n  <div class=\"desc\">${p.description}</div>\n  <div class=\"chips tags\">${tags}</div>\n  ${link}\n</article>`;
    })
    .join("");
}

function renderAbout() {
  const aboutText = document.getElementById("about-text");
  if (aboutText) {
    aboutText.textContent = `I’m a ${profile.role} based in ${profile.location}, passionate about building high-quality products that solve real problems. I value clear communication, thoughtful design, and reliable execution.`;
  }
  const list = document.getElementById("about-info");
  if (list) {
    list.innerHTML = profile.about
      .map((row) => `<div class=\"info-row\"><span class=\"label\">${row.label}</span><span>${row.value}</span></div>`) 
      .join("");
  }
}

function renderContact() {
  const emailLink = document.getElementById("email-link");
  if (emailLink) emailLink.href = `mailto:${profile.email}`;

  const links = document.getElementById("social-links");
  if (links) {
    links.innerHTML = profile.socials
      .map((s) => `<a href=\"${s.url}\" target=\"_blank\" rel=\"noopener\">${s.name}</a>`) 
      .join("");
  }
}

function renderFooter() {
  const year = document.getElementById("footer-year");
  if (year) year.textContent = new Date().getFullYear();
  const name = document.getElementById("footer-name");
  if (name) name.firstChild && (name.firstChild.textContent = `© ${new Date().getFullYear()} ${profile.name}`);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function main() {
  renderHero();
  renderSkills();
  renderProjects();
  renderAbout();
  renderContact();
  renderFooter();
  initSmoothScroll();
}

document.addEventListener("DOMContentLoaded", main);