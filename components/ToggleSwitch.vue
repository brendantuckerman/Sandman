<template>
    <div class="toggle-switch" @click="toggleMode">
      <a class=" button button-toggle switch" :class="{ active: isDarkMode }">
        <font-awesome-icon icon="fa-solid fa-sun" v-if="isDarkMode" />
        <font-awesome-icon icon="fa-solid fa-moon" v-else />
    </a>
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
      if(this.isDarkMode){
        document.body.classList.add("dark");
    } else{
        document.body.classList.remove("dark");
    }

    },
  },

};
</script>