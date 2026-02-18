import { ApplicationConfig, Component, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { DsfrAnchorLink, DsfrHeaderComponent, DsfrHeaderMenuItem, DsfrSkipLinksComponent, DsfrFooterComponent, DsfrLogo } from '@edugouvfr/ngx-dsfr';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule, DsfrHeaderComponent, DsfrSkipLinksComponent, DsfrFooterComponent],
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
  counter = signal(0);

  protected readonly title = signal('lcf-front');
  logo = signal<DsfrLogo>({
    label: 'République<br/>Française',
    navigation: { routerLink: '/my-route' },
    imageAlt: '',
    imagePath: '',
    customClass: '',
    tooltipMessage: 'Informations complémentaires sur le site ou service',
  })
  menu = signal<DsfrHeaderMenuItem[]>([
    {
      label: 'Accueil',
      link: '/'
    },
    {
      label: 'Dossiers',
      link: '/dossiers/personne/add'
    }
  ]);

  skipLinks = signal<DsfrAnchorLink[]>([
    {
      label: 'Contenu',
      link: '#main'
    }
  ]);

}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};

bootstrapApplication(App,appConfig);
