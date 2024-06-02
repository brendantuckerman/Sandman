<!-- Provide input styling for search -->
<template>
    <div class="input-text-container">
      <label class="flex flex-col dark:text-retro-white"> 
          {{  searchLabelText }}
        <div >
            <input 
              type="Search"
              class="bg-retro-yellow dark:bg-retro-white p-2 
              border border-2 border-retro-green dark:border-retro-yellow"
              :placeholder="placeholder"
              :name="name"
            />
            <input type="submit">
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

  name: String,
  default: "Search"
  
})

</script>
