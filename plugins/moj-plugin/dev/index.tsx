import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { mojPluginPlugin, MojPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(mojPluginPlugin)
  .addPage({
    element: <MojPluginPage />,
    title: 'Root Page',
    path: '/moj-plugin'
  })
  .render();
