import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  slideOpts = {
    slidesPerView: 1.3,
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
