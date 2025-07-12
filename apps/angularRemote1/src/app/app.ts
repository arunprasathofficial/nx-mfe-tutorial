import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <div class="card border-danger shadow-sm px-4 py-3">
      <div class="hstack justify-content-between align-items-start mb-3">
        <div>
          <h2 class="text-danger">Angular App</h2>
          <p class="m-0 fw-semibold">Web Component</p>
        </div>
        <img src="/assets/images/angular.png" alt="Angular Logo" class="img-fluid logo">
      </div>
      <p class="text-secondary fst-italic">Version: {{ version }}</p>
    </div>
  `,
  styles: `
    .logo {
      height: 75px;
      max-height: 75px;
    }
  `,
})
export class App {
  version = VERSION.full;
}
