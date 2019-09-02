import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';
import { AlertService } from '../../_services/alert.service';
import { MoviesService } from '../../_services/movies.service';

import { User } from '../../_models/users';
import { Movie } from 'src/app/_models/movies';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {
  currentUser: User;
  users = [];
  private up = true;
  groupDimension: number;
  selectedMovie: Movie;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private moviesService: MoviesService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.resizeDataContainer();
    this.groupDimension = this.setGroupDimension();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  resizeDataContainer() {
    this.up = !this.up;
    let containerTop: string;
    let buttonTop: string;
    if (this.up) {
        containerTop = '-35%';
        buttonTop = '16%';
    } else {
        containerTop = '0%';
        buttonTop = '51%';
    }
    document.getElementById('absolute-container').style.top = containerTop;
    document.getElementById('up').style.top = buttonTop;
  }

  private setGroupDimension() {
    const carouselWidth: number = window.innerWidth > 767 ? window.innerWidth - 70 : window.innerWidth;
    const carouselHeight: number = window.innerHeight / 2;
    const carouselRelation: number = carouselWidth * 1.5 / carouselHeight; // 1.5: average relation between height and width in posters
    return Math.round(carouselRelation);
  }

  selectMovie(id: string) {
    this.selectedMovie = this.moviesService.getByIdFromLocal(id);
  }

}
