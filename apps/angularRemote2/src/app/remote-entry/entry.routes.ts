import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { Com1 } from './com-1/com-1';
import { Com2 } from './com-2/com-2';

export const remoteRoutes: Route[] = [
    {
        path: '',
        component: RemoteEntry,
        children: [
            { path: 'com-1', component: Com1 },
            { path: 'com-2', component: Com2 },
        ]
    }
];
