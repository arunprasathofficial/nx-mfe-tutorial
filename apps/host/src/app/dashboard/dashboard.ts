import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleFederationToolsModule, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ModuleFederationToolsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  remoteWebComponentOptions: Array<WebComponentWrapperOptions> = [
    {
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.mjs',
      exposedModule: './WebComponents',
      elementName: 'angular-wc'
    },
    {
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      remoteName: 'reactRemote',
      exposedModule: './WebComponents',
      elementName: 'react-remote'
    },
    {
      type: 'module',
      remoteEntry: 'http://localhost:4301/assets/remoteEntry.js',
      exposedModule: './WebComponents',
      elementName: 'vue-remote'
    }
  ];
}
