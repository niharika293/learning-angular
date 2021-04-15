// ts file contains the logic of the component.
// Components are classes, they shouldn' diretly interact with the outer world(APIs etc). A service should come as a middleman.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codeial-angular';
}
