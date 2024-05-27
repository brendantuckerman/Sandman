<template>
  <div class="footer-wrapper h-28">
    <div class=" border-t-[1px] border-retro-blue dark:border-retro-yellow grid grid-cols-2 gap-2 sm:grid-cols-3 sm:grid-rows-2 text-sm justify-center items-center justify-items-center py-4">
      <nav>
        <ul class="flex flex-col gap-4">
          <li v-for="link in links" :key="link.id"><a :href="link.href">{{ link.text }}</a></li>
        </ul>
      </nav>
      <div class="footer-center-text">
        <p>{{ centertext }}</p>
        <slot />
      </div>
      <div class="socials flex gap-4">
        <ul>
          <!-- TODO icon if available, title if not -->
          <li v-for="social in socials" :key="social.id">{{ social.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  links:{
    type: Object,
    required: true,
    default: [
    {
      id: 1,
      href: "/",
      text: 'Link 1',
      noFollow: true
    }, 

    {
      id: 2,
      href: "/",
      text: 'Link 2',
      noFollow: true
    }
    ], 

  },
  
  socials: {
    type: Object,
    default: [
      {
        id: 1,
        name: "Social 1",
        class: "fa"
      },

      {
        id: 2,
        name: "Social 2"
      }

    ]

    
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
   centertext: { 
    type: String,
    default: 'Made with the Sandman Theme for Nuxt.js'
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