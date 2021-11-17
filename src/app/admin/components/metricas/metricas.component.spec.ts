import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricasComponent } from './metricas.component';

describe('CalificacionesComponent', () => {
  let component: MetricasComponent;
  let fixture: ComponentFixture<MetricasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
