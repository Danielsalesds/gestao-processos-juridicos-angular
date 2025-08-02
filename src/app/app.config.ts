import { APP_INITIALIZER, ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { KeycloakService, provideKeycloak } from 'keycloak-angular';
import { initializeKeycloak } from './core/KeycloakService';
import Keycloak from 'keycloak-js';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(), // Detecta mudanças sem NgZone (mais performático)
    provideRouter(routes),            // Suas rotas standalone
    KeycloakService, // 🔹 Garante o provider do serviço
    provideHttpClient(withInterceptors([authInterceptor])),
   
    

    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      deps: [KeycloakService],
      multi: true,
    },
    
    
  ],
};
