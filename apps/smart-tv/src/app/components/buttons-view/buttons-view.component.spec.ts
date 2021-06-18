import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsViewComponent } from './buttons-view.component';

describe('ButtonsViewComponent', () => {
  let component: ButtonsViewComponent;
  let fixture: ComponentFixture<ButtonsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
