import { Component } from '@angular/core';

import { MoviesService } from '../../_services/movies.service';
import { Movie } from 'src/app/_models/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedMovie: Movie;

  constructor(
    private moviesService: MoviesService
  ) { }

  selectMovie() {
    this.selectedMovie = this.moviesService.selectedMovie;
  }

}
