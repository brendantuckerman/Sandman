<!-- Button for performing action -->
<template>  
        <button 
          :type="type"
          :text="text"
          :name="name"
          :aria-label="ariaLabel"
          :aria-describedby="ariaDescribedby"
          :class="[size, borderColor]"
        >
            <slot>
                {{ text }}
            </slot> 
        </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  text: {
    type: String,
    required: true,
    default: 'Click here!',
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
   ariaLabel: { //for cases of no text
    type: String,
  },
  name: {
    type: String,
    default: '',
  },
  ariaDescribedby: {
    type: String,
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
  borderColor: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },
});
</script>

<style scoped>

    button{
        @apply p-4 rounded-full border border-4;
        @apply max-w-fit;
        @apply dark:text-retro-white;
        @apply hover:bg-retro-green hover:underline;
    }

    .primary{
        @apply border-retro-green bg-retro-red;
    }

    .secondary{
        @apply border-retro-red bg-retro-green;
        @apply hover:bg-retro-red;
    } 

</style>