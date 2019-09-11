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
            'stroke-dasharray': '{{ value1 }} 100',
            stroke: 'rgb({{ red1 }}, {{ green1 }}, 0)',
            offset: 0.1
          }),
          style({
            'stroke-dasharray': '{{ value2 }} 100',
            stroke: 'rgb({{ red2 }}, {{ green2 }}, 0)',
            offset: 0.2
          }),
          style({
            'stroke-dasharray': '{{ value3 }} 100',
            stroke: 'rgb({{ red3 }}, {{ green3 }}, 0)',
            offset: 0.3
          }),
          style({
            'stroke-dasharray': '{{ value4 }} 100',
            stroke: 'rgb({{ red4 }}, {{ green4 }}, 0)',
            offset: 0.4
          }),
          style({
            'stroke-dasharray': '{{ value5 }} 100',
            stroke: 'rgb({{ red5 }}, {{ green5 }}, 0)',
            offset: 0.5
          }),
          style({
            'stroke-dasharray': '{{ value6 }} 100',
            stroke: 'rgb({{ red6 }}, {{ green6 }}, 0)',
            offset: 0.6
          }),
          style({
            'stroke-dasharray': '{{ value7 }} 100',
            stroke: 'rgb({{ red7 }}, {{ green7 }}, 0)',
            offset: 0.7
          }),
          style({
            'stroke-dasharray': '{{ value8 }} 100',
            stroke: 'rgb({{ red8 }}, {{ green8 }}, 0)',
            offset: 0.8
          }),
          style({
            'stroke-dasharray': '{{ value9 }} 100',
            stroke: 'rgb({{ red9 }}, {{ green9 }}, 0)',
            offset: 0.9
          }),
          style({
            'stroke-dasharray': '{{ value10 }} 100',
            stroke: 'rgb({{ red10 }}, {{ green10 }}, 0)',
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
    /* const green = (this.imdb.rating * 10) * 5.1;
    const red = 255 - ((this.imdb.rating * 10) - 50) * 5.1;
    document.getElementById('circle').style.stroke = 'rgb(' + red + ', ' + green + ', 0)'; */
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
