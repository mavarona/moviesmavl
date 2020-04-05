import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slides-title',
  templateUrl: './slides-title.component.html',
  styleUrls: ['./slides-title.component.scss'],
})
export class SlidesTitleComponent {

  @Input() title = '';

  constructor() { }

}
