import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../_models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[];
  selectedMovie: Movie;

  promise = new Promise((resolve, reject) => {
    this.http
      .get<Movie[]>(`http://localhost:4000/movies`)
      .toPromise()
      .then(
        res => {
          debugger;
          this.movies = res;
          resolve();
        },
        msg => {
          debugger;
          reject(msg);
        }
      );
  });

  constructor(private http: HttpClient) {
    this.movies = [];
  }

  getAll() {
    /* const promise = new Promise((resolve, reject) => {
      this.http
        .get<Movie[]>(`http://localhost:4000/movies`)
        .toPromise()
        .then(
          res => {
            debugger;
            this.movies = res;
            resolve();
          },
          msg => {
            debugger;
            reject(msg);
          }
        );
    });
    return promise; */
    return this.promise;
  }

  updateOneFav(id: string, isFav: boolean) {
    const promise = new Promise((resolve, reject) => {
      this.http
        .put<any>(`http://localhost:4000/movies/current/${id}`, {isFav})
        .toPromise()
        .then(
          res => {
            // Success
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

  getByIdFromLocal(id: string) {
    for (const movie of this.movies) {
      if (movie._id === id) {
        this.selectedMovie = movie;
        return movie;
      }
    }
  }

}
