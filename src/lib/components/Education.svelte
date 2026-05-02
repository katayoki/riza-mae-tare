<script lang="ts">
  import { scrollReveal } from '$lib/actions/scrollReveal';
  import type { EducationItem } from '$lib/data/portfolio';

  interface Props {
    education: EducationItem[];
  }

  let { education }: Props = $props();
</script>

<section id="education">
  <div class="edu-inner">
    <p class="section-label fade-up" use:scrollReveal>Background</p>
    <h2 class="section-title fade-up" use:scrollReveal>Education</h2>
    <div class="divider"></div>

    <div class="edu-list">
      {#each education as item, i}
        <div class="edu-card fade-up" use:scrollReveal={i * 0.08}>
          <div class="edu-icon">🎓</div>
          <div>
            <p class="edu-degree">{item.degree}</p>
            <p class="edu-school">{item.school}</p>
            <p class="edu-location">{item.location}</p>
            <p class="edu-year">{item.years}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    padding: 6rem 5vw;
    background: var(--surface);
    border-top: 1px solid var(--border);
  }

  .edu-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .edu-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 680px;
  }

  .edu-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.6rem 2rem;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    transition: all var(--transition);
  }
  .edu-card:hover {
    border-color: var(--sky-accent);
    box-shadow: 0 4px 20px rgba(185, 28, 28, 0.1);
    transform: translateX(4px);
  }

  .edu-icon {
    width: 48px; height: 48px;
    background: var(--sky);
    border: 1px solid var(--sky-mid);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    flex-shrink: 0;
  }

  .edu-degree {
    font-size: 1rem;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 0.15rem;
  }

  .edu-school {
    font-size: 0.9rem;
    color: var(--sky-deep);
    font-weight: 500;
  }

  .edu-location {
    font-size: 0.82rem;
    color: var(--ink-muted);
    margin-top: 0.1rem;
  }

  .edu-year {
    font-size: 0.82rem;
    color: var(--ink-muted);
    margin-top: 0.2rem;
  }

  @media (max-width: 768px) {
    section { padding: 4rem 5vw; }
  }
</style>  