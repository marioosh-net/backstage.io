import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const mojPluginPlugin = createPlugin({
  id: 'moj-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const MojPluginPage = mojPluginPlugin.provide(
  createRoutableExtension({
    name: 'MojPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
