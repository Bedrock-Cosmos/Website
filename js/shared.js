/**
 * shared.js — Bedrock Cosmos shared components
 * Includes: mobile sidebar toggle, stars generator, sidebar HTML injection, footer HTML injection
 */

/* ─── Mobile Sidebar ─────────────────────────────────────────── */
function toggleMobileSidebar() {
  const sidebar = document.querySelector(".mc-sidebar");
  const overlay = document.getElementById("mc-sidebar-overlay");
  const btn = document.getElementById("mc-mobile-menu-btn");
  const isOpen = sidebar.classList.toggle("mobile-open");
  overlay.classList.toggle("active", isOpen);
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  btn.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
}

/* ─── Stars Generator ────────────────────────────────────────── */
/**
 * Populates a stars container with randomly-placed star divs.
 * @param {string} containerId  - id of the stars container element (default: "stars")
 * @param {number} count        - number of stars to generate (default: 180)
 */
function generateStars(containerId = "stars", count = 180) {
  const sc = document.getElementById(containerId);
  if (!sc) return;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div");
    const sz = Math.random() * 2.5 + "px";
    s.className = "star";
    s.style.cssText = `width:${sz};height:${sz};left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 3}s`;
    sc.appendChild(s);
  }
}

/* ─── Sidebar HTML ───────────────────────────────────────────── */
/**
 * Returns the full sidebar <aside> HTML string.
 * Pass the href of the currently active page to highlight it.
 * @param {string} activePath  - e.g. "/changelogs/" or "/" for home
 */
function getSidebarHTML(activePath = "") {
  const linkGroups = [
    [
      {
        href: "/skinpacks/",
        label: "Skin Packs",
        svg: `<path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><path d="M8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/>`,
      },
      {
        href: "/capes/",
        label: "Capes",
        svg: `<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>`,
      },
    ],
    [
      {
        href: "/changelogs/",
        label: "Changelogs",
        svg: `<path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>`,
      },
      {
        href: "/articles",
        label: "Articles",
        svg: `<path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/>`,
      },
      {
        href: "/videos/",
        label: "Videos",
        svg: `<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>`,
      },
    ],
    [
      {
        href: "/tools/",
        label: "Tools",
        svg: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>`,
      },
    ],
    [
      {
        href: "/terms-of-service/",
        label: "Terms",
        title: "Terms of Service",
        svg: `<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>`,
      },
      {
        href: "/privacy-policy/",
        label: "Privacy",
        title: "Privacy Policy",
        svg: `<path d="M14 18a2 2 0 0 0-4 0"/><path d="m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"/><path d="M2 11h20"/><circle cx="17" cy="18" r="3"/><circle cx="7" cy="18" r="3"/>`,
      },
    ],
  ];

  const divider = `\n    <div class="mc-sidebar-divider"></div>`;

  const makeIcon = (link) => {
    const isActive = activePath && link.href === activePath ? " active" : "";
    const titleAttr = link.title || link.label;
    return `
      <a href="${link.href}" class="mc-sidebar-icon${isActive}" title="${titleAttr}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${link.svg}
        </svg>
        <span class="mc-sidebar-label">${link.label}</span>
      </a>`;
  };

  return `<aside class="mc-sidebar">
    ${linkGroups.map((group) => group.map(makeIcon).join("")).join(divider)}
  </aside>`;
}

/* ─── Footer HTML ────────────────────────────────────────────── */
/**
 * Returns the shared footer HTML string.
 */
function getFooterHTML() {
  return `<footer style="z-index: 10; position: relative">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Socials</h3>
        <a href="https://www.youtube.com/watch?v=rKkmPG4bi4Y" target="_blank">YouTube</a>
        <a href="https://discord.com/invite/HRG2NapegP" id="discord-btn-footer" target="_blank">Discord</a>
      </div>
      <div class="footer-section">
        <h3>Resources</h3>
        <a href="https://github.com/Bedrock-Cosmos/Launcher/releases/">Download</a>
        <a href="https://github.com/orgs/Bedrock-Cosmos/repositories/">GitHub</a>
      </div>
      <div class="footer-section">
        <h3>Legal</h3>
        <a href="/terms-of-service/">Terms of Service</a>
        <a href="/privacy-policy/">Privacy Policy</a>
      </div>
      <div class="footer-section">
        <h3>Pages</h3>
        <a href="/skinpacks/">Skin Packs</a>
        <a href="/capes/">Capes</a>
        <a href="/changelogs/">Changelogs</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Bedrock Cosmos &copy; 2026 - All Rights Reserved - Not affiliated with Mojang Studios or Microsoft</p>
    </div>
  </footer>`;
}

/* ─── Shared CSS (injected once at runtime) ──────────────────── */
/**
 * Injects the shared mobile-sidebar CSS into <head> if not already present.
 * Call once per page load.
 */
function injectSharedStyles() {
  if (document.getElementById("bc-shared-styles")) return;
  const style = document.createElement("style");
  style.id = "bc-shared-styles";
  style.textContent = `
    .mc-mobile-menu-btn {
      display: none;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      color: var(--mc-text);
      cursor: pointer;
      padding: 0 14px;
      height: 100%;
      flex-shrink: 0;
      border-right: 1px solid var(--mc-border);
      transition: background 0.15s;
      z-index: 201;
    }
    .mc-mobile-menu-btn:hover {
      background: var(--mc-hover);
    }
    @media (max-width: 600px) {
      .mc-topbar-title { display: flex !important; }
      .mc-topbar-right { display: none !important; }
      .mc-mobile-menu-btn { display: flex; }
      .mc-topbar { padding-left: 0; }
      .mc-sidebar-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
        z-index: 290;
      }
      .mc-sidebar-overlay.active { display: block; }
    }
  `;
  document.head.appendChild(style);
}

/* ─── Page Init Helper ───────────────────────────────────────── */
/**
 * All-in-one init: injects styles, renders sidebar + footer, generates stars.
 *
 * Usage in each page:
 *   <div id="mc-sidebar-placeholder"></div>
 *   <div id="mc-footer-placeholder"></div>
 *
 *   initSharedComponents({ activePath: '/changelogs/', starCount: 180 });
 *
 * @param {object} opts
 * @param {string}  opts.activePath   - sidebar active link (e.g. "/changelogs/")
 * @param {string}  opts.starsId      - id of the stars container (default: "stars")
 * @param {number}  opts.starCount    - number of stars (default: 180)
 */
function initSharedComponents({
  activePath = "",
  starsId = "stars",
  starCount = 180,
} = {}) {
  injectSharedStyles();

  const sidebarPlaceholder = document.getElementById("mc-sidebar-placeholder");
  if (sidebarPlaceholder) {
    sidebarPlaceholder.outerHTML = getSidebarHTML(activePath);
  }

  const footerPlaceholder = document.getElementById("mc-footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = getFooterHTML();
  }

  generateStars(starsId, starCount);
}
