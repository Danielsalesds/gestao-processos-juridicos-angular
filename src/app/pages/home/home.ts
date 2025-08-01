import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'home',   // nome da tag do componente
  standalone: true, 
  templateUrl:'./home.html',
  
})
export class home {
    protected title = 'home';
//constructor(private keycloak: KeycloakService) {}
  
}
