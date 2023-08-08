import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacsPageComponent } from './contacs-page.component';

describe('ContacsPageComponent', () => {
  let component: ContacsPageComponent;
  let fixture: ComponentFixture<ContacsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContacsPageComponent]
    });
    fixture = TestBed.createComponent(ContacsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
