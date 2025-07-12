import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

export const appRoutes: Route[] = [
  {
    path: 'angularRemote',
    loadChildren: () =>
      import('angularRemote/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: 'reactRemote',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'reactRemote',
      exposedModule: './WebComponents',
      elementName: 'react-remote'
    } as WebComponentWrapperOptions
  },
  {
    path: 'vueRemote',
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
    component: NxWelcome,
  },
];
