import { Component } from '@angular/core';

@Component({
  selector: 'services-app',
  template: `<div>
  <h1>You are on  {{name}} page</h1>
  </div>
  `,
})
export class ServicesComponent  { name = 'Services'; }