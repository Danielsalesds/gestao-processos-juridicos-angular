import { Component } from '@angular/core';

@Component({
  selector: 'home',   // nome da tag do componente
  standalone: true,                  // componente standalone, sem módulo
  templateUrl:'./home.html',
  
})
export class home {
    protected title = 'home';
}
