import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeViewComponent } from './wellcome-view.component';

describe('WellcomeViewComponent', () => {
  let component: WellcomeViewComponent;
  let fixture: ComponentFixture<WellcomeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellcomeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
