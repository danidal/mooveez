import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/_services/movies.service';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements OnInit {
  loading: boolean;
  directors: string[];
  actors: string[];
  genres: string[];
  years: number[];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.moviesService.getAll().then(() => {
      this.directors = this.selectDistinctFromMovies('directors');
      this.actors = this.selectDistinctFromMovies('cast');
      this.genres = this.selectDistinctFromMovies('genres');
      this.years = this.selectDistinctFromMovies('year');
    }).then(() => this.loading = false);
  }

  selectDistinctFromMovies(objParam: string) {
    // tslint:disable-next-line: no-string-literal
    let objParamValues = this.moviesService.movies.map(movie => movie[objParam]);
    if (objParamValues instanceof Array) {
      objParamValues = [].concat.apply([], objParamValues);
    }
    return objParamValues.filter((v, i, a) => a.indexOf(v) === i);
  }

}
