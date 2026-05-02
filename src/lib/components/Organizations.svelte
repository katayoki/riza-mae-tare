<script lang="ts">
  import { scrollReveal } from '$lib/actions/scrollReveal';
  import type { OrgItem } from '$lib/data/portfolio';

  interface Props {
    organizations: OrgItem[];
  }

  let { organizations }: Props = $props();
</script>

<section id="organizations">
  <div class="orgs-inner">
    <p class="section-label fade-up" use:scrollReveal>Involvement</p>
    <h2 class="section-title fade-up" use:scrollReveal>Organizations &amp; Memberships</h2>
    <div class="divider"></div>

    <div class="orgs-list">
      {#each organizations as item, i}
        <div class="org-card fade-up" use:scrollReveal={i * 0.06}>
          <div class="org-dot"></div>
          <div class="org-body">
            <p class="org-role">{item.role}</p>
            <p class="org-name">{item.org}</p>
          </div>
          <span class="org-period">{item.period}</span>
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

  .orgs-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .orgs-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-width: 800px;
  }

  .org-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    transition: all var(--transition);
  }
  .org-card:hover {
    border-color: var(--sky-accent);
    box-shadow: 0 4px 20px rgba(220, 38, 38, 0.08);
    transform: translateX(4px);
  }

  .org-dot {
    width: 10px; height: 10px;
    background: var(--sky-deep);
    border-radius: 50%;
    flex-shrink: 0;
  }

  .org-body {
    flex: 1;
  }

  .org-role {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--ink);
  }

  .org-name {
    font-size: 0.82rem;
    color: var(--ink-soft);
    margin-top: 0.1rem;
  }

  .org-period {
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--sky-deep);
    background: var(--sky);
    border: 1px solid var(--sky-mid);
    padding: 0.2rem 0.7rem;
    border-radius: 100px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    .org-card {
      flex-wrap: wrap;
    }
    .org-period {
      margin-left: 1.4rem;
    }
  }

  @media (max-width: 768px) {
    section { padding: 4rem 5vw; }
  }
</style>