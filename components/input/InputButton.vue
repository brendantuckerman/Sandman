<!-- Button Template -->
<template>  
        <button 
          :type="type"
          :text="text"
          :name="name"
          :aria-label="ariaLabel"
          :aria-describedby="ariaDescribedby"
          :class="[btnClasses, btnstyle]"
        >
            <slot>
                {{ text }}
            </slot> 
        </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  text: {
    type: String,
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
  btnshape:{
      type: String as PropType<'round' | 'pill' >,
      default: 'round' 
  },

  btnstyle: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },

});

const btnClasses = computed(() => ({
    //Apply correct tailwind classes for button props
    'rounded-full w-20 h-20': props.btnshape  === 'round',
    'rounded-full min-w-24': props.btnshape === 'pill',

}))
</script>

<style scoped>

    button{
        @apply p-4 border border-4;
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
