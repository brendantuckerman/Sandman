<template>
    <div>
        <h2>Welcome to the post page</h2>
        <p>This is post # {{ route.params.id }}</p>
    </div>
</template>



<script setup lang="ts">
  const route = useRoute()

  // When accessing /posts/1, route.params.id will be 1
  console.log(route.params.id)
</script>
