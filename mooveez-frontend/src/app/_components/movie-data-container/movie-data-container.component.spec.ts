import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDataContainerComponent } from './movie-data-container.component';

describe('MovieDataContainerComponent', () => {
  let component: MovieDataContainerComponent;
  let fixture: ComponentFixture<MovieDataContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDataContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
