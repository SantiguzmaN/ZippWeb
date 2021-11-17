import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasZippComponent } from './zonas-zipp.component';

describe('ZonasZippComponent', () => {
  let component: ZonasZippComponent;
  let fixture: ComponentFixture<ZonasZippComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonasZippComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonasZippComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
