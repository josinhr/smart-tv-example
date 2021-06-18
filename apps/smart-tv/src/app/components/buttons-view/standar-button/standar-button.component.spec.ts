import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandarButtonComponent } from './standar-button.component';

describe('StandarButtonComponent', () => {
  let component: StandarButtonComponent;
  let fixture: ComponentFixture<StandarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
