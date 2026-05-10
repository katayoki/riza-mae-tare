<script lang="ts">
  import '../app.css';
  import { browser } from '$app/environment';
  import { theme } from '$lib/stores/theme';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  // Apply theme immediately on mount to avoid flash
  if (browser) {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ?? (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initial);
  }

  let { children } = $props();
</script>

<svelte:head>
  <title>Riza Mae M. Tare — Psychology Student & Student Leader</title>
  <meta name="description" content="Portfolio of Riza Mae M. Tare, a BS Psychology student at PUP San Juan, consistent President's Lister, and passionate advocate for leadership, community, and human development." />
</svelte:head>

<Nav />
{@render children()}
<Footer />