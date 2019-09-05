import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-data-container',
  templateUrl: './movie-data-container.component.html',
  styleUrls: ['./movie-data-container.component.scss']
})
export class MovieDataContainerComponent {
  @Input() movie: any;

  constructor() { }

}
