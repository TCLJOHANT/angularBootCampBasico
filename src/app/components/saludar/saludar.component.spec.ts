import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludarComponent } from './saludar.component';

describe('SaludarComponent', () => {
  let component: SaludarComponent;
  let fixture: ComponentFixture<SaludarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaludarComponent]
    });
    fixture = TestBed.createComponent(SaludarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
