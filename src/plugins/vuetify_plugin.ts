import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import * as vuetifyComponents from 'vuetify/components';
import * as vuetifyDirectives from 'vuetify/directives';
import { md } from 'vuetify/iconsets/md';

const vuetifyPlugin = createVuetify({
  components: {
    ...vuetifyComponents,
  },
  directives: {
    ...vuetifyDirectives,
  },
  icons: {
    defaultSet: 'md',
    sets: {
      md,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#F3F3F9',
          surface: '#FFFFFF',
          primary: '#747EDF',
          secondary: '#42F0BD',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',
          title: '#0fff00',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#15171B',
          surface: '#202528',
          primary: '#747EDF',
          secondary: '#42F0BD',
          'on-primary': '#202528',
          'on-secondary': '#202528',
          title: '#ffff00',
        },
      },
      otherTheme: {
        dark: true,
        colors: {
          background: '#15171B',
          surface: '#202528',
          primary: '#ff00ff',
          secondary: '#00ffff',
          'on-primary': '#202528',
          'on-secondary': '#202528',
          title: '#00ffff',
        },
      },
      otherThemeLight: {
        dark: false,
        colors: {
          background: '#F3F3F9',
          surface: '#FFFFFF',
          primary: '#ff00ff',
          secondary: '#00ffff',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',
          title: '#00fff0',
        },
      },
    },
  },
});

export { vuetifyPlugin };
