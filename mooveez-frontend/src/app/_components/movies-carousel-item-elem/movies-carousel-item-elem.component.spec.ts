import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCarouselItemElemComponent } from './movies-carousel-item-elem.component';

describe('MoviesCarouselItemElemComponent', () => {
  let component: MoviesCarouselItemElemComponent;
  let fixture: ComponentFixture<MoviesCarouselItemElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesCarouselItemElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCarouselItemElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
