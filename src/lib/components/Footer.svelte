<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer>
  <p>With love, for <span>Riza Mae M. Tare</span> · © {year}</p>
  <p class="sub">A story told in pixels ♡</p>
</footer>

<style>
  footer {
    text-align: center;
    padding: 3rem 5vw;
    border-top: 1px solid var(--border);
    background: var(--white);
  }

  footer p {
    font-size: 0.85rem;
    color: var(--ink-muted);
  }

  footer span { color: var(--sky-deep); }

  .sub { margin-top: 0.4rem; }
</style>
