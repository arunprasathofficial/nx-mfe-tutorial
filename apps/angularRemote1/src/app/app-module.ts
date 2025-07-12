import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { createCustomElement } from '@angular/elements'
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {

  constructor(
    private injector: Injector,
  ) { }

  ngDoBootstrap(): void {
    customElements.define('angular-wc', createCustomElement(App, {
      injector: this.injector
    }));
  }
}
