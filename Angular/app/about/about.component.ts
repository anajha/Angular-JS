import { Component } from '@angular/core';

@Component({
  selector: 'about-app',
  template: `<div>
  <h1>You are on  {{name}} page</h1>
  </div>
  `,
})
export class AboutComponent  { name = 'About'; }