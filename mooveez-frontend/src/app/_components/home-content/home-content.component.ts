import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../../_models/users';
import { UserService } from '../../_services/user.service';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {
  currentUser: User;
  users = [];
  private up = true;

  itemGroups: any[] = [
    {
      items: [
        {
          posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTIzNDI3NzAxM15BMl5BanBnXkFtZTcwNzM0NzQyMQ@@._V1_SY1000_SX677_AL_.jpg'
        },
        {
          posterUrl: 'https://m.media-amazon.com/images/M/MV5BZDc1NzI2MGEtZDA2Yy00ZWExLTgwYmItNjU3N2QyYmM0MzYwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg'
        },
		{
          posterUrl: 'https://m.media-amazon.com/images/M/MV5BOGY3NDAzOTMtMjdmZC00ZGExLWJmZWQtYTNiZTYwZDQxMmViXkEyXkFqcGdeQXVyNTM5NzI0NDY@._V1_SY1000_SX677_AL_.jpg'
        },
		{
          posterUrl: 'https://m.media-amazon.com/images/M/MV5BM2M0MWFhZDEtOTNiMS00OTdjLWEzZjktZWRjZjhlMjJmNmUyXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SY1000_SX677_AL_.jpg'
        },
		{
          posterUrl: 'https://m.media-amazon.com/images/M/MV5BNmNlN2VlOTctYTdhMS00NzUxLTg0ZGMtYWE2ZTJmMThlMTk2XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SY1000_SX677_AL_.jpg'
        }
      ]
    },
    {
      items: [
        {
          posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjY2NzMyNmEtZmM0Ny00YzY4LWFlNWYtZmNjZGUwY2YyZjg3XkEyXkFqcGdeQXVyMjIxMzMyMQ@@._V1_SY1000_SX677_AL_.jpg'
        },
        {
          posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjNkZTU4YzMtNjU5Yy00ZDY2LThiNzAtYTllMjkxNWQxNWQ2XkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SY1000_SX677_AL_.jpg'
        },
        {
          posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjExNTcyMjI2Ml5BMl5BanBnXkFtZTgwMDgwNTg4NjE@._V1_SY1000_SX677_AL_.jpg'
        },
		{
          posterUrl: 'https://m.media-amazon.com/images/M/MV5BNDRiNzdlYzUtNzIxMy00OGI4LThlNjQtNTI3Njg5NjVlOWJkL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SY1000_SX677_AL_.jpg'
        },
		{
          posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTI0MzM4MjUwMF5BMl5BanBnXkFtZTcwMjM5MTUyMQ@@._V1_SY1000_SX677_AL_.jpg'
        }
      ]
    },
	{
      items: [
        {
          posterUrl: 'https://m.media-amazon.com/images/M/MV5BY2M4Y2UxYmItNzc0ZS00Y2NkLWIyMGMtZDc3NmU0NjZjMzhhL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SY1000_SX677_AL_.jpg'
        },
        {
          posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTYyNDkwODc0NV5BMl5BanBnXkFtZTYwMDY2NTM5._V1_SY1000_SX677_AL_.jpg'
        }
      ]
    }
];

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
      this.loadAllUsers();
      this.resizeDataContainer();
  }

  deleteUser(id: number) {
      this.userService.delete(id)
          .pipe(first())
          .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
      this.userService.getAll()
          .pipe(first())
          .subscribe(users => this.users = users);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

  resizeDataContainer() {
    this.up = !this.up;
    let upDownLabel: string;
    let containerTop: string;
    let buttonTop: string;
    if (this.up) {
        upDownLabel = 'down';
        containerTop = '-35%';
        buttonTop = '16%';
    } else {
        upDownLabel = 'up';
        containerTop = '0%';
        buttonTop = '51%';
    }
    document.getElementById('absolute-container').style.top = containerTop;
    document.getElementById('up').style.top = buttonTop;
    document.getElementById('up').innerHTML = upDownLabel;
  }

}
