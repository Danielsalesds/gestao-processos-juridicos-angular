import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideKeycloak } from 'keycloak-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideKeycloak({
      config: {
        url: 'http://localhost:8080/',
        realm: 'processos',
        clientId: 'frontend',
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
      },
    }),
  ]
};
