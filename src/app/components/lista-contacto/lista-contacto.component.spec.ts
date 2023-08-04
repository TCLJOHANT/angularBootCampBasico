import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContactoComponent } from './lista-contacto.component';

describe('ListaContactoComponent', () => {
  let component: ListaContactoComponent;
  let fixture: ComponentFixture<ListaContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaContactoComponent]
    });
    fixture = TestBed.createComponent(ListaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
