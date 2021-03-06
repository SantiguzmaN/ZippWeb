import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginComponent } from './begin.component';

describe('beginComponent', () => {
  let component: BeginComponent;
  let fixture: ComponentFixture<BeginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
