<template>
  <div class='container page-container relative min-h-screen'>
    <header class="flex justify-between items-center pb-8">
      <div>
        <h1>{{ SiteName }}</h1>
        <h5>{{ TagLine }}</h5>
      </div>
      <nav>
        <ul class="hidden sm:flex justify-between items-center gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/stylesheet">Stylesheet</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/posts/1">Posts 1 (try posts/n)</NuxtLink></li>
          <li><ToggleSwitch></ToggleSwitch></li>
        </ul>
      </nav>

    </header>
    <main class="container pb-64">
      <NuxtPage />
    </main>
    <footer>
      <GlobalFooter />
    </footer>
   
  </div>
</template>

<script setup>

// Todo put this in GlobalHeader
const SiteName = "Slingshot";
const TagLine = "Point. Click."


</script>




