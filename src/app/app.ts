import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { KeycloakService } from 'keycloak-angular';
import { KeycloakService, provideKeycloak,  } from 'keycloak-angular';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  //styleUrl: './app.css'
  //providers: [KeycloakService],
})
export class App {
  
  protected title = 'gestao-processos-juridicos-angular';

}

