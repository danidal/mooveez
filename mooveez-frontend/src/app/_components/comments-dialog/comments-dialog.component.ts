import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Movie } from 'src/app/_models/movies';
import { Comment as dbComment } from 'src/app/_models/comments';
import { User } from 'src/app/_models/users';

import { CommentsService } from 'src/app/_services/comments.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-comments-dialog',
  templateUrl: './comments-dialog.component.html',
  styleUrls: ['./comments-dialog.component.scss']
})
export class CommentsDialogComponent implements OnChanges, OnInit {
  @Input() movie: Movie;
  comments: dbComment[];
  commentForm: FormGroup;
  currentUser: User;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private commentsService: CommentsService,
    private authenticationService: AuthenticationService,
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnChanges(): void  {
    this.getMovieComments();
  }

  ngOnInit(): void  {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });
  }

  getMovieComments(): void {
    this.loading = true;
    this.commentsService.getByMovieId(this.movie._id).then(() => {
      this.comments = this.c;
      this.loading = false;
    });
  }

  get c(): dbComment[] { return this.commentsService.comments; }

  get f() { return this.commentForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.commentForm.invalid) {
      return;
    }

    this.loading = true;
    this.commentsService.addComment(this.commentForm.value.comment, this.movie._id, this.currentUser)
      .pipe(first())
      .subscribe(
        data => {
          /* this.alertService.success('Registration successful', true); */
          /* this.router.navigate(['/login']); */
          this.getMovieComments();
        },
        error => {
          /* this.alertService.error(error); */
          this.loading = false;
        });
}

}
