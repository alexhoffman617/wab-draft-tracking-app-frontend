import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominateBarComponent } from './nominate-bar.component';

describe('NominateBarComponent', () => {
  let component: NominateBarComponent;
  let fixture: ComponentFixture<NominateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
