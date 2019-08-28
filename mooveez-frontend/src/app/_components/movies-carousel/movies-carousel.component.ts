import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-carousel',
  templateUrl: './movies-carousel.component.html',
  styleUrls: ['./movies-carousel.component.scss']
})
export class MoviesCarouselComponent implements OnInit {
  @Input() itemGroups: any[];

  constructor() { }

  ngOnInit() { }

}
