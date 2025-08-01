import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({ providedIn: 'root' }) // 👈 Disponível globalmente
export class AuthService {
  constructor(private keycloak: KeycloakService) {}

  /** Verifica se está logado */
  async isLoggedIn(): Promise<boolean> {
        return await this.keycloak.isLoggedIn(); 
  }

  /** Faz logout e redireciona para a home */
  async logout(): Promise<void> {
    const isLogged = await this.keycloak.isLoggedIn();
    console.log("Logout solicitado. Logado =", isLogged);

    if (isLogged) {
      await this.keycloak.logout('http://localhost:4200');
      console.log("Logout concluído!");
    }
  }

  /** Obtém token atual (se precisar) */
  async getToken(): Promise<string | undefined> {
    return this.keycloak.getToken();
  }
}
