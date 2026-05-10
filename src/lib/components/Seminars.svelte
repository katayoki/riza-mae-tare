<script lang="ts">
  import { scrollReveal } from '$lib/actions/scrollReveal';
  import type { SeminarItem } from '$lib/data/portfolio';

  interface Props {
    seminars: SeminarItem[];
  }

  let { seminars }: Props = $props();
</script>

<section id="seminars">
  <div class="seminars-inner">
    <p class="section-label fade-up" use:scrollReveal>Learning</p>
    <h2 class="section-title fade-up" use:scrollReveal>Seminars &amp; Workshops</h2>
    <div class="divider"></div>

    <div class="timeline">
      {#each seminars as item, i}
        <div class="timeline-item fade-up" use:scrollReveal={i * 0.08}>
          <div class="timeline-line">
            <div class="timeline-dot"></div>
            {#if i < seminars.length - 1}
              <div class="timeline-connector"></div>
            {/if}
          </div>
          <div class="timeline-card">
            <span class="seminar-date">{item.date}</span>
            <p class="seminar-title">{item.title}</p>
            <p class="seminar-org">{item.org}</p>
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

  .seminars-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    max-width: 720px;
  }

  .timeline-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .timeline-line {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    padding-top: 0.3rem;
  }

  .timeline-dot {
    width: 14px; height: 14px;
    border-radius: 50%;
    background: var(--sky-deep);
    border: 2px solid var(--sky-accent);
    flex-shrink: 0;
    box-shadow: 0 0 0 4px var(--sky);
  }

  .timeline-connector {
    width: 2px;
    flex: 1;
    min-height: 2.5rem;
    background: var(--border);
    margin: 0.4rem 0;
  }

  .timeline-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.2rem 1.5rem;
    margin-bottom: 0.8rem;
    flex: 1;
    transition: all var(--transition);
  }

  .timeline-card:hover {
    border-color: var(--sky-accent);
    box-shadow: 0 4px 20px rgba(220, 38, 38, 0.08);
    transform: translateX(4px);
  }

  .seminar-date {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--sky-deep);
    background: var(--sky);
    border: 1px solid var(--sky-mid);
    padding: 0.15rem 0.6rem;
    border-radius: 100px;
    margin-bottom: 0.6rem;
    letter-spacing: 0.03em;
  }

  .seminar-title {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--ink);
    line-height: 1.5;
    margin-bottom: 0.3rem;
  }

  .seminar-org {
    font-size: 0.82rem;
    color: var(--ink-muted);
  }

  @media (max-width: 768px) {
    section { padding: 4rem 5vw; }
  }
</style>