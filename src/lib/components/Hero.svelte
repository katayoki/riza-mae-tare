<script lang="ts">
  import type { profile as ProfileType } from '$lib/data/portfolio';

  interface Props {
    profile: typeof ProfileType;
  }

  let { profile }: Props = $props();
</script>

<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-blob"></div>

  <div class="hero-inner">
    <div class="hero-image-wrap">
      <img src="/riza-hero.jpg" alt="Riza Mae Tare" class="hero-image" />
    </div>

    <div class="hero-content">
      <h1 class="hero-name">
        {profile.name.first}<br /><em>{profile.name.last}</em>
      </h1>
      <p class="hero-title">{profile.title} · {profile.tagline}</p>
      <p class="hero-summary">{profile.summary}</p>
      <div class="hero-cta">
        <a href="#experience" class="btn btn-primary">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          View Experience
        </a>
        <a href="#about" class="btn btn-outline">
          Get in Touch
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 8rem 5vw 5rem;
    position: relative;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 70% 40%, var(--sky) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 10% 80%, var(--sky-mid) 0%, transparent 60%);
    z-index: 0;
  }

  .hero-blob {
    position: absolute;
    width: 520px; height: 520px;
    background: radial-gradient(circle, var(--sky-mid) 0%, transparent 70%);
    border-radius: 50%;
    top: -100px; right: -60px;
    opacity: 0.5;
    animation: drift 8s ease-in-out infinite alternate;
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 5rem;
    width: 100%;
    max-width: 1100px;
  }

  .hero-image-wrap {
    flex-shrink: 0;
    width: 300px;
    height: 400px;
    border-radius: 20px;
    overflow: hidden;
    border: 3px solid var(--sky-accent);
    box-shadow: 8px 8px 0px var(--sky-deep);
    opacity: 0;
    animation: fadeUp 0.7s 0.1s forwards;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  .hero-content {
    max-width: 600px;
  }

  .hero-name {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2.8rem, 6vw, 4.5rem);
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 0.3rem;
    opacity: 0;
    animation: fadeUp 0.7s 0.25s forwards;
  }
  .hero-name em {
    font-style: italic;
    color: var(--sky-deep);
  }

  .hero-title {
    font-size: 1rem;
    font-weight: 300;
    color: var(--ink-soft);
    margin-bottom: 1.6rem;
    letter-spacing: 0.04em;
    opacity: 0;
    animation: fadeUp 0.7s 0.4s forwards;
  }

  .hero-summary {
    font-size: 1.05rem;
    color: var(--ink-soft);
    font-weight: 300;
    max-width: 520px;
    margin-bottom: 2.5rem;
    opacity: 0;
    animation: fadeUp 0.7s 0.55s forwards;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 0.7s 0.7s forwards;
  }

  @media (max-width: 900px) {
    .hero-inner {
      flex-direction: column-reverse;
      gap: 2.5rem;
    }
    .hero-image-wrap {
      width: 100%;
      height: 300px;
    }
  }

  @media (max-width: 768px) {
    section { padding: 7rem 5vw 4rem; }
    .hero-blob { width: 300px; height: 300px; top: -50px; right: -80px; }
  }
</style>