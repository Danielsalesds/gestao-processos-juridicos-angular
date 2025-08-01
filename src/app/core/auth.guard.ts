import { createAuthGuard } from 'keycloak-angular';
import type { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import type { AuthGuardData } from 'keycloak-angular';

export const authGuard = createAuthGuard(
  async (route, state, authData) => {
    if (authData.authenticated) {
      return true; // usuário logado, libera acesso
    }

    // redireciona para o login
    await authData.keycloak.login({
      redirectUri: window.location.origin + state.url,
    });
    return false;
  }
);

