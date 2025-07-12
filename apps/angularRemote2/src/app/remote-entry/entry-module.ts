import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntry } from './entry';
import { remoteRoutes } from './entry.routes';
import { Com1 } from './com-1/com-1';
import { Com2 } from './com-2/com-2';

@NgModule({
  declarations: [RemoteEntry, Com1, Com2],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
