<script lang="ts">
  import { scrollReveal } from '$lib/actions/scrollReveal';
  import type { profile as ProfileType } from '$lib/data/portfolio';

  interface Props {
    profile: typeof ProfileType;
  }

  let { profile }: Props = $props();
</script>

<section id="about">
  <div class="about-inner">

    <div class="about-image-col">
      <div class="about-image-wrap fade-up" use:scrollReveal>
        <img src="/riza-about.jpg" alt="Riza Mae Tare" class="about-image" />
      </div>
      <div class="social-links fade-up" use:scrollReveal={0.1}>
        <a href={profile.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
        <a href={profile.social.instagram} target="_blank" rel="noopener" aria-label="Instagram">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          Instagram
        </a>
        <a href={profile.social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
          Facebook
        </a>
      </div>
    </div>

    <div class="about-grid">
      <div>
        <p class="section-label">About</p>
        <h2 class="section-title">A little<br />about me</h2>
        <div class="divider"></div>
        <p class="about-text fade-up" use:scrollReveal>{profile.about}</p>
      </div>

      <div>
        <p class="section-label">Contact</p>
        <h2 class="section-title">Let's<br />connect</h2>
        <div class="divider"></div>
        <ul class="contact-list fade-up" use:scrollReveal>
          <li>
            <span class="contact-icon">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.06 6.06l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            {profile.contact.phone}
          </li>
          <li>
            <span class="contact-icon">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <a href="mailto:{profile.contact.email}">{profile.contact.email}</a>
          </li>
          <li>
            <span class="contact-icon">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            {profile.contact.location}
          </li>
        </ul>
      </div>
    </div>

  </div>
</section>

<style>
  section {
    padding: 6rem 5vw;
    background: var(--white);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .about-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    gap: 4rem;
    align-items: flex-start;
  }

  .about-image-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    flex-shrink: 0;
  }

  .about-image-wrap {
    width: 240px;
    height: 300px;
    border-radius: 16px;
    overflow: hidden;
    border: 3px solid var(--sky-accent);
    box-shadow: 6px 6px 0px var(--sky-deep);
  }

  .about-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    width: 100%;
  }

  .social-links a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 1rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--ink-soft);
    text-decoration: none;
    transition: all var(--transition);
  }

  .social-links a:hover {
    border-color: var(--sky-accent);
    color: var(--sky-deep);
    background: var(--sky);
    transform: translateX(3px);
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
    flex: 1;
  }

  .about-text {
    font-size: 1.05rem;
    color: var(--ink-soft);
    font-weight: 300;
  }

  .contact-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-list li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.95rem;
    color: var(--ink-soft);
  }

  .contact-icon {
    width: 36px; height: 36px;
    background: var(--sky);
    border: 1px solid var(--sky-mid);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sky-deep);
    flex-shrink: 0;
  }

  .contact-list a {
    color: var(--ink-soft);
    text-decoration: none;
  }
  .contact-list a:hover { color: var(--sky-deep); }

  @media (max-width: 900px) {
    .about-inner {
      flex-direction: column;
      align-items: center;
    }
    .about-image-wrap {
      width: 200px;
      height: 250px;
    }
    .social-links {
      flex-direction: row;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    section { padding: 4rem 5vw; }
    .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  }
</style>