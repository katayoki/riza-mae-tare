<script lang="ts">
  import { theme } from '$lib/stores/theme';

  let menuOpen = $state(false);

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  function toggleTheme() {
    theme.update(t => t === 'dark' ? 'light' : 'dark');
  }
</script>

<nav class:scrolled={true}>
  <a href="/" class="nav-logo">Heirriz</a>

  <!-- Desktop Links -->
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#awards">Awards</a></li>
    <li><a href="#organizations">Organizations</a></li>
    <li><a href="#seminars">Seminars</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#education">Education</a></li>
  </ul>

  <div class="nav-right">
    <!-- Dark mode toggle -->
    <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
      {#if $theme === 'dark'}
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      {:else}
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      {/if}
    </button>

    <!-- Burger button (mobile only) -->
    <button class="burger" onclick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
      {#if menuOpen}
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      {:else}
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      {/if}
    </button>
  </div>

  <!-- Mobile Drawer -->
  {#if menuOpen}
    <div class="mobile-overlay" onclick={closeMenu} onkeydown={closeMenu} role="button" tabindex="-1"></div>
    <ul class="mobile-menu">
      <li><a href="#about" onclick={closeMenu}>About</a></li>
      <li><a href="#skills" onclick={closeMenu}>Skills</a></li>
      <li><a href="#awards" onclick={closeMenu}>Awards</a></li>
      <li><a href="#organizations" onclick={closeMenu}>Organizations</a></li>
      <li><a href="#seminars" onclick={closeMenu}>Seminars</a></li>
      <li><a href="#experience" onclick={closeMenu}>Experience</a></li>
      <li><a href="#education" onclick={closeMenu}>Education</a></li>
    </ul>
  {/if}
</nav>

<style>
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5vw;
    background: color-mix(in srgb, var(--white) 85%, transparent);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 1.2rem;
    color: var(--sky-deep);
    text-decoration: none;
    letter-spacing: -0.01em;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
  }

  .nav-links a {
    font-size: 0.85rem;
    color: var(--ink-soft);
    text-decoration: none;
    font-weight: 400;
    letter-spacing: 0.02em;
    transition: color var(--transition);
  }
  .nav-links a:hover { color: var(--sky-deep); }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .theme-toggle {
    width: 36px; height: 36px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface);
    color: var(--ink-soft);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition);
  }
  .theme-toggle:hover {
    border-color: var(--sky-accent);
    color: var(--sky-deep);
  }

  .burger {
    display: none;
    width: 36px; height: 36px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface);
    color: var(--ink-soft);
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition);
    position: relative;
    z-index: 201;
  }
  .burger:hover {
    border-color: var(--sky-accent);
    color: var(--sky-deep);
  }

  /* Mobile drawer */
  .mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 198;
    backdrop-filter: blur(2px);
    cursor: pointer;
  }

  .mobile-menu {
    position: fixed;
    top: 0; right: 0;
    height: 100vh;
    width: 72vw;
    max-width: 300px;
    background: var(--white);
    border-left: 1px solid var(--border);
    z-index: 199;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 5rem 2rem 2rem;
    gap: 0.5rem;
    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.1);
    animation: slideIn 0.25s ease;
  }

  .mobile-menu a {
    display: block;
    padding: 0.85rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--ink-soft);
    text-decoration: none;
    border-radius: 8px;
    transition: all var(--transition);
  }
  .mobile-menu a:hover {
    background: var(--sky);
    color: var(--sky-deep);
    padding-left: 1.4rem;
  }

  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .burger { display: flex; }
  }
</style>