import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return async () => {
    try {
      await keycloak.init({
        config: {
          url: 'http://localhost:8080/',
          realm: 'processos',
          clientId: 'frontend',
        },
        initOptions: {
          onLoad: 'login-required', // ou 'check-sso'
          checkLoginIframe: false,
        },
      });
      console.log('✅ Keycloak inicializado com sucesso');
    } catch (error) {
      console.error('❌ Erro ao inicializar Keycloak', error);
    }
  };
}
