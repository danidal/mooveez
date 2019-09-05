import { Component, Input, OnChanges } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-rating-chart',
  animations: [
    trigger('circleTrigger', [
      transition('false <=> true', [
        animate('1s ease-out', keyframes([
          style({
            'stroke-dasharray': '0 100',
            stroke: 'rgb(255, 0 , 0)',
            offset: 0
          }),
          style({
            'stroke-dasharray': '{{ finalValue }} 100',
            stroke: 'rgb({{ red }}, {{ green }}, 0)',
            offset: 1
          })
        ]))
      ]),
    ]),
  ],
  templateUrl: './rating-chart.component.html',
  styleUrls: ['./rating-chart.component.scss']
})
export class RatingChartComponent implements OnChanges {
  @Input() imdb: any;
  move: boolean;

  constructor() {
    this.move = true;
  }

  ngOnChanges() {
    this.animateRating();
  }

  animateRating() {
    this.animateCounter();
    this.animateCircle();
  }

  animateCircle() {
    const green = 25.5 * this.imdb.rating;
    const red = 25.5 * (10 - this.imdb.rating);
    document.getElementById('circle').style.stroke = 'rgb(' + red + ', ' + green + ', 0)';
    this.move = !this.move;
  }

  animateCounter() {
    const options = {
      decimalPlaces: 1
    };
    const demo = new CountUp('targetElement', this.imdb.rating, options);
    if (!demo.error) {
      demo.start();
    } else {
      console.error(demo.error);
    }
  }

}
