import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCarouselItemComponent } from './movies-carousel-item.component';

describe('MoviesCarouselItemComponent', () => {
  let component: MoviesCarouselItemComponent;
  let fixture: ComponentFixture<MoviesCarouselItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesCarouselItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
