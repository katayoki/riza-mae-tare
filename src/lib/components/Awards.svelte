<script lang="ts">
  import { scrollReveal } from '$lib/actions/scrollReveal';
  import type { AwardItem } from '$lib/data/portfolio';

  interface Props {
    awards: AwardItem[];
  }

  let { awards }: Props = $props();
</script>

<section id="awards">
  <div class="awards-inner">
    <p class="section-label fade-up" use:scrollReveal>Achievements</p>
    <h2 class="section-title fade-up" use:scrollReveal>Awards &amp; Recognition</h2>
    <div class="divider"></div>

    <div class="awards-grid">
      {#each awards as award, i}
        <div class="award-card fade-up" use:scrollReveal={i * 0.08}>
          <div class="award-badge">🏆</div>
          <div class="award-body">
            <p class="award-title">{award.title}</p>
            <p class="award-org">{award.org}</p>
            <span class="award-year">{award.year}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    padding: 6rem 5vw;
    background: var(--white);
    border-top: 1px solid var(--border);
  }

  .awards-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .awards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.2rem;
  }

  .award-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.4rem 1.6rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    transition: all var(--transition);
  }
  .award-card:hover {
    border-color: var(--sky-accent);
    box-shadow: 0 4px 24px rgba(220, 38, 38, 0.1);
    transform: translateY(-3px);
  }

  .award-badge {
    width: 44px; height: 44px;
    background: var(--sky);
    border: 1px solid var(--sky-mid);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .award-body {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .award-title {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--ink);
    line-height: 1.4;
  }

  .award-org {
    font-size: 0.82rem;
    color: var(--ink-soft);
  }

  .award-year {
    display: inline-block;
    margin-top: 0.4rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--sky-deep);
    background: var(--sky);
    border: 1px solid var(--sky-mid);
    padding: 0.15rem 0.6rem;
    border-radius: 100px;
    width: fit-content;
  }

  @media (max-width: 768px) {
    section { padding: 4rem 5vw; }
  }
</style>