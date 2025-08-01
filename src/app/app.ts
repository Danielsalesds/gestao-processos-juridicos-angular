import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth.service';



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

  constructor(private auth: AuthService) {}

    async logout() {
      console.log("Sair do sistema!");
        await this.auth.logout();
    }

}

