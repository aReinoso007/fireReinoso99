import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Registro', url: 'crear', icon: 'mail' },
    { title: 'Listado', url: 'listar', icon: 'paper-plane' }
  ];
  constructor() {}
}
