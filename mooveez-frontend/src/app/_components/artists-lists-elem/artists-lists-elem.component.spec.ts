import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsListsElemComponent } from './artists-lists-elem.component';

describe('ArtistsListsElemComponent', () => {
  let component: ArtistsListsElemComponent;
  let fixture: ComponentFixture<ArtistsListsElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsListsElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsListsElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
