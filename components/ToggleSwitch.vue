<template>
    <div class="toggle-switch" @click="toggleMode">
      <div class="switch" :class="{ active: isDarkMode }">Toggle</div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$emit('toggle', this.isDarkMode);
    },
  },
};
</script>