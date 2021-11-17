import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosUserComponent } from './terminos-user.component';

describe('TerminosUserComponent', () => {
  let component: TerminosUserComponent;
  let fixture: ComponentFixture<TerminosUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminosUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
