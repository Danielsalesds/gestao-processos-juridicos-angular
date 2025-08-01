import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { MainLayout } from '../../layouts/main-layout/main-layout';

@Component({
  selector: 'home',   // nome da tag do componente
  standalone: true, 
  templateUrl:'./home.html',
  imports: [MainLayout],
  
})
export class home {
    protected title = 'home';
//constructor(private keycloak: KeycloakService) {}
  
}
