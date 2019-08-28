import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallHtmlLogoComponent } from './small-html-logo.component';

describe('SmallHtmlLogoComponent', () => {
  let component: SmallHtmlLogoComponent;
  let fixture: ComponentFixture<SmallHtmlLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallHtmlLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallHtmlLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
