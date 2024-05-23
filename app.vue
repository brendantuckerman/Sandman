<template>
  <div :class="{'dark': isDarkMode}">
  <div class="container">
    <header class="flex justify-between items-center">
      <div>
        <h1>Slingshot </h1>
        <h5> Point. Click.</h5>
      </div>
      <nav>
        <ul class="flex justify-between items-center gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/stylesheet">Stylesheet</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/posts/1">Posts 1 (try posts/n)</NuxtLink></li>
          <li><ToggleSwitch  @toggle="handleToggle"></ToggleSwitch></li>
        </ul>
      </nav>
     
    </header>
    <main class="container">
      <NuxtPage />
    </main>
    <footer>
      <h3>Footer content</h3>
    </footer>
  </div>  
</div>
</template>

<script setup>

// Darkmode
const isDarkMode = ref(false);

function handleToggle(mode) {
  isDarkMode.value = mode;
}
</script>



