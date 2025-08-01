import { inject, Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({ providedIn: 'root' }) // Disponível globalmente
export class AuthService {
    private keycloak = inject(KeycloakService);
  constructor() {
    console.log('AuthService criado', this.keycloak ? 'com Keycloak' : 'SEM Keycloak');
  }

  /** Verifica se está logado */
  async isLoggedIn(): Promise<boolean> {
        return await this.keycloak.isLoggedIn(); 
  }

  /** Faz logout e redireciona para a home */
  async logout(): Promise<void> {
        try {
        const isLogged = await this.keycloak.isLoggedIn();
        console.log("Logout solicitado. Logado =", isLogged);

        if (isLogged) {
            // Passa apenas a URL como string
            await this.keycloak.logout('http://localhost:4200');
            console.log("Logout concluído! Redirecionando...");
        }
        } catch (err) {
        console.error("Erro ao fazer logout:", err);
        }
    }

  /** Obtém token atual (se precisar) */
  async getToken(): Promise<string | undefined> {
    return this.keycloak.getToken();
  }
}
