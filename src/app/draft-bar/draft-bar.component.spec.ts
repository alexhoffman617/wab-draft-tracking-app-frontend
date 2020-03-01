import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftBarComponent } from './draft-bar.component';

describe('DraftBarComponent', () => {
  let component: DraftBarComponent;
  let fixture: ComponentFixture<DraftBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
