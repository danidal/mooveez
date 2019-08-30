import { Component, Input, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { MoviesService } from '../../_services/movies.service';

@Component({
  selector: 'app-movies-carousel',
  templateUrl: './movies-carousel.component.html',
  styleUrls: ['./movies-carousel.component.scss']
})
export class MoviesCarouselComponent implements AfterViewChecked  {
  @Input() groupDimension: number;

  private multiple = false;
  private loading = false;
  private itemGroups: any[];

  constructor(private moviesService: MoviesService, private cdRef: ChangeDetectorRef) {
    this.doSearch();
  }

  /* Hook that responds anytime the user interacts with the view: on hover, on sliding... */
  ngAfterViewChecked() {
    debugger;
    this.doCarouselSettings();
    this.cdRef.detectChanges();
  }

  doCarouselSettings() {
    debugger;
    const carouselItems = document.getElementsByClassName('carousel-item');
    this.activeFirstSlide(carouselItems);
    this.activeCarouselControls(carouselItems);
  }

  activeFirstSlide(carouselItems: HTMLCollectionOf<Element>) {
    const carouselItemsActive = document.getElementsByClassName('carousel-item active');
    if (carouselItemsActive.length === 0 && carouselItems.length > 0) {
      carouselItems[0].classList.add('active');
    }
  }

  activeCarouselControls(carouselItems: HTMLCollectionOf<Element>) {
    if (carouselItems.length > 1) {
      this.multiple = true;
    }
  }

  doSearch() {
    this.loading = true;
    this.moviesService.getAll().then(() => {
      debugger;
      this.itemGroups = this.divideMoviesInGroups(this.groupDimension);
      this.loading = false;
    });
  }

  get m() { return this.moviesService.movies; }

  private divideMoviesInGroups(groupDimension) {
    const itemGroups: any[] = [];
    for (let i = 0; i < this.m.length; i += groupDimension) {
      const itemGroup = {
        items: []
      };
      const items: any[] = [];
      for (let j = 0; j < groupDimension; j++) {
        if (i + j === this.m.length) {
          break;
        }
        items.push(this.m[i + j]);
      }
      itemGroup.items = items;
      itemGroups.push(itemGroup);
    }
    return itemGroups;
  }

}
