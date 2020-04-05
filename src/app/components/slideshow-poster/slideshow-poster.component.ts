import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  };

  @Input() movies: Movie[] = [];

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

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
