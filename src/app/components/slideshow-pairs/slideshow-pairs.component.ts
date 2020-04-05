import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };

  @Input() movies: Movie[] = [];
  @Output() loadMore = new EventEmitter();

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  LoadMore() {
    this.loadMore.emit();
  }

  async viewDetail(id: string) {

    const modal = await this.modalCtrl.create({
      component: DetailMovieComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

}
