import { createAuthGuard } from 'keycloak-angular';
import type { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import type { AuthGuardData } from 'keycloak-angular';

export const authGuard = createAuthGuard(
  async (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    authData: AuthGuardData
  ): Promise<boolean | UrlTree> => {
    // authData.authenticated é true se o usuário estiver logado
    return authData.authenticated;
  }
);
