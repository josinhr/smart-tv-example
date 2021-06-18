import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingAppViewComponent } from './loading-app-view.component';

describe('LoadingAppViewComponent', () => {
  let component: LoadingAppViewComponent;
  let fixture: ComponentFixture<LoadingAppViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingAppViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingAppViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
