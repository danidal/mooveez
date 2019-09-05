import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artists-lists-elem',
  templateUrl: './artists-lists-elem.component.html',
  styleUrls: ['./artists-lists-elem.component.scss']
})
export class ArtistsListsElemComponent {
  @Input() elems: any[];
  @Input() name: string;

  constructor() { }

}
