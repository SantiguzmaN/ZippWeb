import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cmovComponent } from './cmov.component';

describe('beginComponent', () => {
  let component: cmovComponent;
  let fixture: ComponentFixture<cmovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cmovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cmovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
