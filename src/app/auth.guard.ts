import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

export const authGuard: CanActivateFn = async () => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  const isLoggedIn = await keycloak.isLoggedIn();
  console.log('authGuard: isLoggedIn =', isLoggedIn);

  if (!isLoggedIn) {
    console.log('authGuard: redirecionando para login');
    await keycloak.login();
    return false;
  }

  return true;
};
