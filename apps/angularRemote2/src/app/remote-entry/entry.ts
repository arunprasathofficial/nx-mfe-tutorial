import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-angularRemote2-entry',
  standalone: false,
  template: `
    <div class="card border-danger shadow-sm">
      <div class="px-4 py-3">
        <div class="hstack justify-content-between align-items-start mb-3">
          <div>
            <h2 class="text-danger">Angular App</h2>
            <p class="m-0 fw-semibold">Remote Entry Module</p>
          </div>
          <img src="/assets/images/angular.png" alt="Angular Logo" class="img-fluid logo">
        </div>
        <p class="text-secondary fst-italic">Version: {{ version }}</p>
      </div>

      <hr class="m-0" />

      <div class="px-4 py-3">
        <div class="d-flex gap-3">
          <button class="btn btn-sm btn-outline-primary" routerLink="com-1" routerLinkActive="active">
            Component 1
          </button>
          <button class="btn btn-sm btn-outline-primary" routerLink="com-2" routerLinkActive="active">
            Component 2
          </button>
        </div>

        <div class="card shadow-none px-4 py-3 my-3" [ngClass]="{'d-none': !isRouteLoaded }">
          <router-outlet (activate)="onRouteActivate()"></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: `
    .logo {
      height: 75px;
      max-height: 75px;
    }
  `,
})
export class RemoteEntry {
  version = VERSION.full;
  isRouteLoaded = false;

  onRouteActivate(): void {
    setTimeout(() => this.isRouteLoaded = true);
  }
}
