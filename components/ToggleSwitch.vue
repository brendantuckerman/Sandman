<template>
  <div 
    class="toggle-switch" 
    @click="toggleMode" 
    @keyup.enter="toggleMode" 
    tabindex="0"
    role="button"
    aria-label="Toggle Dark Mode"
  >
    <a class="button button-toggle switch">
      <div v-if="isDarkMode">
        <font-awesome-icon :icon="['fas', 'sun']" />
      </div>
      <div v-else-if="!isDarkMode">
        <font-awesome-icon :icon="['fas', 'moon']" /> 
      </div> 
    </a>
  </div>
</template>

<script >
import { ref } from 'vue';

export default {
  data() {
    return {
      isDarkMode: ref(false),
    };
  },
  
  watch: {
    isDarkMode(newValue, oldValue){
        this.toggleDarkClass();
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