import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../_models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[];

  constructor(private http: HttpClient) {
    this.movies = [];
  }

  getAll() {
    debugger;
    // return this.http.get<Movie[]>(`http://localhost:4000/movies`);

    const promise = new Promise((resolve, reject) => {
      this.http
        .get<Movie[]>(`http://localhost:4000/movies`)
        .toPromise()
        .then(
          res => {
            // Success
            this.movies = res;
            resolve();
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

}
