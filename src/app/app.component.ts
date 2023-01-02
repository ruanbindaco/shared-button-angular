import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-cards></app-cards>
  <app-event></app-event> 
  <router-outlet></router-outlet>
  ` 
})
export class AppComponent {
}
