import { Component } from '@angular/core'
import { registerElement } from '@nativescript/angular'
import { RiveView } from '@nativescript/rive'
registerElement('RiveView', () => RiveView)

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {}
