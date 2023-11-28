<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

interface Props {
  title?: string;
  value?: number;
  icon?: string;
  progress?: number;
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'md:stacked_line_chart',
  title: 'Title',
  value: 50_000,
  progress: 70,
});

const value = props.value.toLocaleString('en-US', { currency: 'USD', style: 'currency' });
</script>

<template>
  <v-sheet color="surface" elevation="12" class="pa-5" rounded="lg">
    <v-row>
      <!-- Header -->
      <v-col cols="12">
        <v-sheet
          width="50"
          height="50"
          rounded="circle"
          class="d-flex justify-center align-center"
          color="secondary"
        >
          <v-icon :icon="props.icon" color="on-secondary" size="30" />
        </v-sheet>
      </v-col>

      <!-- Body -->
      <v-col cols="12">
        <v-row>
          <!-- Title and Price -->
          <v-col cols="7">
            <h3 class="text-h6 text-primary pb-2">{{ props.title }}</h3>
            <p style="font-size: x-large">
              <strong>{{ value }}</strong>
            </p>
          </v-col>

          <!-- Progress -->
          <v-col cols="5" class="d-flex align-center justify-center">
            <v-progress-circular
              :model-value="props.progress"
              size="100"
              width="15"
              color="primary"
            >
              <template #default="{ value }">
                <strong> {{ value }}% </strong>
              </template>
            </v-progress-circular>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style module="styles" lang="scss">
//
</style>
