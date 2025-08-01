import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datajud } from './datajud';

describe('Datajud', () => {
  let component: Datajud;
  let fixture: ComponentFixture<Datajud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datajud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datajud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
