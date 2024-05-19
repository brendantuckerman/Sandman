<template>
    <div class="toggle-switch" @click="toggleMode">
      <a class=" button button-toggle switch" :class="{ active: isDarkMode }">Toggle</a>
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