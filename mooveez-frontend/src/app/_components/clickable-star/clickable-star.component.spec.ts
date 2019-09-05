import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableStarComponent } from './clickable-star.component';

describe('ClickableStarComponent', () => {
  let component: ClickableStarComponent;
  let fixture: ComponentFixture<ClickableStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
