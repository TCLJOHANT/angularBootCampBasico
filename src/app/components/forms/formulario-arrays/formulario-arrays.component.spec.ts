import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioArraysComponent } from './formulario-arrays.component';

describe('FormularioArraysComponent', () => {
  let component: FormularioArraysComponent;
  let fixture: ComponentFixture<FormularioArraysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioArraysComponent]
    });
    fixture = TestBed.createComponent(FormularioArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
