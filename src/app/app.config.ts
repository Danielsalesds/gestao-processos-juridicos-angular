import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideKeycloak } from 'keycloak-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(), // Detecta mudanças sem NgZone (mais performático)
    provideRouter(routes),            // Suas rotas standalone
    provideKeycloak({
      config: {
        url: 'http://localhost:8080/',  // URL do seu Keycloak
        realm: 'processos',             // Nome do realm
        clientId: 'frontend',           // ID do cliente
      },
      initOptions: {
        onLoad: 'login-required',       // ou 'check-sso' se quiser apenas checar login
        checkLoginIframe: false,        // desativa verificação periódica (recomendado local)
      },
    }),
  ],
};
