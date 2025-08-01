import { Component, OnInit } from '@angular/core';
import { PartesService } from '../partes-interessadas/service/partes.service';
import { DataJudService } from '../datajud/service/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{
   totalPartes = 0;
    totalProcessos = 0;
    ultimosProcessos: any[] = [];

    constructor(
      private partesService: PartesService,
      private dataJudService: DataJudService
    ) {}

    ngOnInit() {
      this.totalPartes = this.partesService.getPartes().length; 

      this.dataJudService.getProcessos().subscribe(data => {
        this.totalProcessos = data.length;
        this.ultimosProcessos = data.slice(0, 5);
      });
    }
}
