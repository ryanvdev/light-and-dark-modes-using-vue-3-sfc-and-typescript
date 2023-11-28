<script setup lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue';
</script>

<template>
  <v-app-bar>
    <v-app-bar-title>
      <strong :class="styles['title']"> Frontend with Ryan </strong>
    </v-app-bar-title>

    <theme-switcher />
  </v-app-bar>
</template>

<style module="styles" lang="scss">
.title {
  color: rgb(var(--v-theme-title));
}
</style>
