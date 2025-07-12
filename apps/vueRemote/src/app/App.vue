<script setup lang="ts">
import '../styles.scss';
import { version } from 'vue';

const vueVersion = version;
</script>

<template>
  <div class="card border-success shadow-sm px-4 py-3">
    <div class="hstack justify-content-between align-items-start mb-3">
      <div>
        <h2 class="text-success">
          Vue App
        </h2>
        <p class="m-0 fw-semibold">
          Web Component
        </p>
      </div>
      <img 
        class="img-fluid logo" 
        :src="'/assets/images/vue.png'"
        alt="Vue Logo"
      >
    </div>
    <p class="text-secondary fst-italic">
      Version: {{ vueVersion }}
    </p>
  </div>
</template>

<style scoped>
  .logo {
    height: 75px;
    max-height: 75px;
  }
</style>
