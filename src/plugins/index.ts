import type { App } from 'vue';

import { vuetifyPlugin } from './vuetify_plugin';

export function registerPlugins(app: App) {
  app.use(vuetifyPlugin);
}
