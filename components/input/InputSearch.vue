<!-- Provide input styling for search -->
<template>
    <div class="input-text-container">
      <label class="flex flex-col dark:text-retro-white"> 
          {{  searchLabelText }}
        <div class="flex relative">
            <input 
              :placeholder="placeholder"
              :name="name"
              type="Search"
              class="bg-retro-yellow dark:bg-retro-white p-2 
              border border-2 border-retro-green dark:border-retro-yellow"
             
            />
            <div class="flex items-center justify-center absolute right-2  search-icon top-2">
            <input type="submit" 
              class="absolute right-2 top-1 z-50 search-input w-8 text-transparent bg-transparent  hover:cursor-pointer" 
              @click="submitSearch">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" 
              class="absolute right-2 top-1 pr-2"
              />
            </div>
        </div>
      </label>
    </div>
  
  </template>

<script setup lang="ts">

import type { PropType } from 'vue';

const props = defineProps({
  
  searchLabelText:{
    type: String,
    default:  "Search"
  },

  placeholder:{
    type: String,
    default: "Enter your search terms..."
  },

  name: {
    type: String,
    default: "Search"
  }
})

const submitSearch = function(){
    console.log('Search clicked');
    //Search function goes here
}

</script>

<style scoped>

.search-input{
  color: transparent;
}

</style>
