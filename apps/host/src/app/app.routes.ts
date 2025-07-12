import { Route } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Dashboard } from './dashboard/dashboard';

export const appRoutes: Route[] = [
  {
    path: 'angular-remote-1',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.mjs',
      exposedModule: './WebComponents',
      elementName: 'angular-wc'
    } as WebComponentWrapperOptions
  },
  {
    path: 'angular-remote-2',
    loadChildren: () =>
      import('angularRemote2/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: 'react-remote',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      remoteName: 'reactRemote',
      exposedModule: './WebComponents',
      elementName: 'react-remote'
    } as WebComponentWrapperOptions
  },
  {
    path: 'vue-remote',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4301/assets/remoteEntry.js',
      remoteName: 'vueRemote',
      exposedModule: './WebComponents',
      elementName: 'vue-remote'
    } as WebComponentWrapperOptions
  },
  {
    path: '',
    component: Dashboard,
  },
];
