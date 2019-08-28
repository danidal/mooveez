import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlLogoComponent } from './html-logo.component';

describe('HtmlLogoComponent', () => {
  let component: HtmlLogoComponent;
  let fixture: ComponentFixture<HtmlLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
