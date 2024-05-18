<template>
  
  <header>
    <h1 class="text-4xl underline"> This is the header </h1>
    <h2> {{ $config.public.myValue || "No value yet "}}</h2>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/stylesheet">Stylesheet</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/posts/1">An example of a posts page. Change the number in the url for any post</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <main>
    <NuxtPage />
  </main>
  <footer>
    <h3>Footer content</h3>
  </footer>
</template>
