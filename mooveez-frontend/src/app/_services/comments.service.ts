import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Comment as dbComment } from '../_models/comments';
import { User } from '../_models/users';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments: dbComment[];

  constructor(private http: HttpClient) {
    this.comments = [];
  }

  getByMovieId(movieId) {
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<dbComment[]>(`http://localhost:4000/comments/${movieId}`)
        .toPromise()
        .then(
          res => {
            this.comments = res;
            resolve();
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }

  addComment(text: string, movieId: string, currentUser: User) {
    const newComment = {
      name: currentUser.name,
      email: currentUser.email,
      movie_id: movieId,
      text,
      date: new Date()
    };
    return this.http.put(`http://localhost:4000/comments/`, newComment);
  }
}
