import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private menuController: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Escuchar los cambios de ruta para habilitar o deshabilitar el menú
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/index') {  // Aquí '/index' es la ruta de tu página de inicio
            this.menuController.enable(false);  // Deshabilita el menú en la página de inicio
          } else {
            this.menuController.enable(true);  // Habilita el menú en otras páginas
          }
        }
      });
    });
  }
}
