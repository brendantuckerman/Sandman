<!-- Provide input styling for text, email, pw, tel and url -->
<template>
  <div class="input-text-container">
    <label class="flex flex-col dark:text-retro-white"> 
        {{  labelText }}
        <input 
          :type="isType"
          class="bg-retro-yellow dark:bg-retro-white p-2 
          border border-2 border-retro-green dark:border-retro-yellow"
          :placeholder="placeholder"
          :isRequired
          :name="name"
        />
    </label>
  </div>

</template>

<script setup lang="ts">

import type { PropType } from 'vue';

const props = defineProps({
  
  labelText:{
    type: String,
    default:  "Text Input Label"
  },

  isType: {
    type: String as PropType< 'text' | 'email' | 'password' | 'tel' | 'url'>,
    required: true,
    default: 'text'
  },
  

  placeholder:{
    type: String,
    default: "Enter your response here"
  },
  
  isRequired:{
    type: Boolean,
    default: true,
  },

  name: String
  
})

</script>