import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'partes-interessadas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ], 
  templateUrl: './partes-interessadas.html',
  styleUrl: './partes-interessadas.css'
})
export class PartesInteressadas {

}
