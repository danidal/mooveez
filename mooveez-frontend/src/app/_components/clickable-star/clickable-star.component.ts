import { Component, Input } from '@angular/core';

import { MoviesService } from '../../_services/movies.service';
import { Movie } from 'src/app/_models/movies';

@Component({
  selector: 'app-clickable-star',
  templateUrl: './clickable-star.component.html',
  styleUrls: ['./clickable-star.component.scss']
})
export class ClickableStarComponent {
  @Input() movie: Movie;

  constructor(
    private moviesService: MoviesService
  ) { }

  setFav() {
    debugger;
    this.movie.favourite = !this.movie.favourite;
    this.moviesService.updateOneFav(this.movie._id, this.movie.favourite);
  }

}
