<template>
  <div class="footer-wrapper h-28 absolute bottom-0 sm:w-screen">
    <div class="grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-2">
      <nav>
        <ul>
          <li>Link 1</li>
        </ul>
      </nav>
      <div class="footer-center-text">
        <p>{{ centertext }}</p>
        <slot />
      </div>
      <div class="socials">
        <ul>
          <!-- TODO icon if available, title if not -->
          <li v-for="item in socials">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  socials: {
    type: Array,
    default: ['Social 1', 'Social 2'],
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
   centertext: { 
    type: String,
    default: 'Copyright 2024 Brendan Tuckerman'
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