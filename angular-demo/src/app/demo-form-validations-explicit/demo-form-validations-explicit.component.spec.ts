import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormValidationsExplicitComponent } from './demo-form-validations-explicit.component';

describe('DemoFormValidationsExplicitComponent', () => {
  let component: DemoFormValidationsExplicitComponent;
  let fixture: ComponentFixture<DemoFormValidationsExplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormValidationsExplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormValidationsExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
