<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Awards from '$lib/components/Awards.svelte';
  import Organizations from '$lib/components/Organizations.svelte';
  import Seminars from '$lib/components/Seminars.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Education from '$lib/components/Education.svelte';

  import { profile, skills, awards, organizations, seminars, experience, education } from '$lib/data/portfolio';
</script>

<Hero {profile} />
<About {profile} />
<Skills {skills} />
<Awards {awards} />
<Organizations {organizations} />
<Seminars {seminars} />
<Experience {experience} />
<Education {education} />