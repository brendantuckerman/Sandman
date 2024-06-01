<template>
  <div class="container page-container relative min-h-screen">
    <header class="flex justify-between items-center absolute left-0  w-full pb-8 pt-4 z-50 border-b-2 border-dashed border-retro-yellow ">
      <div class="site-branding-container flex gap-4">
        <div class="color-box overflow-hidden grid grid-cols-4 gap-1 -skew-y-[15deg] w-12">
            <div class="bg-retro-red h-full"></div>
            <div class="bg-retro-blue dark:bg-retro-white h-full"></div>
            <div class="bg-retro-green h-full"></div>
            <div class="bg-retro-yellow h-full"></div>
        </div>
        <div>
          <h1>{{ SiteName }}</h1>
          <h5>{{ TagLine }}</h5>
        </div>
    </div>
      <nav>
        <ul class="hidden sm:flex justify-between items-center gap-8">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/sandman">Example Page</NuxtLink></li>
          <li><NuxtLink to="/stylesheet">Stylesheet</NuxtLink></li>
          <li><NuxtLink to="/documentation">Documentation</NuxtLink></li>
          <li><NuxtLink to="/posts/1">Posts 1 (try posts/n)</NuxtLink></li>
          <li><ToggleSwitch></ToggleSwitch></li>
        </ul>
      </nav>

    </header>
    <main class="container pb-64 pt-44 sm:px-40">
        <NuxtPage />
    </main>
    <footer>
      <TheFooter />
    </footer>
   
  </div>
</template>

<script setup>

// Todo put this in GlobalHeader
const SiteName = "Sandman";
const TagLine = "Beach. <body>"



</script>




