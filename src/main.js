import { h, createApp } from 'vue';
import { SetupCalendar } from 'v-calendar';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {});
    },
  },
  handleInstance(app) {
    app.use(SetupCalendar);
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
