<template>
    <div class="toggle-switch" @click.stop="toggleMode"  tabindex="0">
      <a class=" button button-toggle switch">
        <font-awesome-icon :icon="['fas', 'moon']" v-if="!isDarkMode" />
        <font-awesome-icon icon="fa-solid fa-sun" v-else />
    </a>
    </div>
</template>

<script >
import { ref nextTick } from 'vue';

export default {
 data() {
    return {
      isDarkMode: ref(false),
    };
  },
  

  watch: {
    isDarkMode(newValue, oldValue){
        this.toggleDarkClass();
        console.log(this.isDarkMode);
    }
  },

  methods: {
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
    },

    toggleDarkClass(){
        if(this.isDarkMode){
            document.body.classList.add("dark");
        } else{
            document.body.classList.remove("dark");
        }
    }
  },
};
</script>