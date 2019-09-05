import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/_models/movies';

@Component({
  selector: 'app-movies-carousel-item-elem',
  templateUrl: './movies-carousel-item-elem.component.html',
  styleUrls: ['./movies-carousel-item-elem.component.scss']
})
export class MoviesCarouselItemElemComponent {
  @Input() movie: Movie;
  @Output() selectMovieEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  selectMovie() {
    this.selectMovieEvent.emit(this.movie._id);
  }

}
