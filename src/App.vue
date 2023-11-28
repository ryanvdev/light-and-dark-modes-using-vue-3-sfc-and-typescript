<script setup lang="ts">
import AppBar from './components/AppBar.vue';
import Insights from './components/Insights.vue';
</script>

<template>
  <v-app>
    <app-bar />

    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="index of 3" :key="index" cols="12" md="6" lg="4">
            <insights
              :title="`Total Sales ${index}`"
              :value="24_200 * (index + 1)"
              :progress="20 + (index * 20)"
              icon="equalizer"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style module="styles" lang="scss">
//
</style>
