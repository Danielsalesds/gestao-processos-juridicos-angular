import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PartesService } from '../../service/parteServece';
import { Location } from '@angular/common';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css'] 
}) 
export class Formulario implements OnInit {
  private location = inject(Location);


  form!: FormGroup;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private partesService: PartesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      nome: ['', Validators.required],
      tipo: ['PF', Validators.required],
      cpfCnpj: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const parte = this.partesService.getById(+id);
      if (parte) {
        this.form.patchValue(parte);
        this.isEdit = true;
      }
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const dados = this.form.value;
    this.isEdit
      ? this.partesService.update(dados)
      : this.partesService.add(dados);

    this.router.navigate(['/partes-interessadas']);
  }
  voltar() {
    this.location.back();
  }
}
