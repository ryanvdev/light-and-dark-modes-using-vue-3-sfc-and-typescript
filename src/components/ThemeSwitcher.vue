<script setup lang="ts">
import { useTheme } from 'vuetify';
import { computed } from 'vue';

const themeStore = useTheme();

const themeNames = computed(() => {
  return Object.keys(themeStore.themes.value);
});

const selectedTheme = computed({
  get: () => [themeStore.global.name.value],
  set: (v) => {
    if (v.length === 0) return;
    themeStore.global.name.value = v[0];
  },
});
</script>

<template>
  <v-btn id="theme-switcher" prepend-icon="md:contrast"> Themes </v-btn>

  <v-menu activator="#theme-switcher">
    <v-list min-width="200" v-model:selected="selectedTheme">
      <v-list-item v-for="name of themeNames" :key="name" :value="name">
        {{ name }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style module="styles" lang="scss">
//
</style>
