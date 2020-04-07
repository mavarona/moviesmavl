import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetail, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {

  @Input() id;
  hideText = 150;

  slideOptActors = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: 0
  };

  movie: MovieDetail = {};
  actors: Cast[] = [];

  constructor( private movieService: MoviesService,
               private ctrlModal: ModalController,
               private dataLocal: DataLocalService ) { }

  ngOnInit() {

    this.movieService.getMovieDetail( this.id )
        .subscribe( resp => {
          this.movie = resp;
        });

    this.movieService.getMovieCredits( this.id )
        .subscribe( resp => {
          this.actors = resp.cast;
        });

  }

  back() {
    this.ctrlModal.dismiss();
  }
  favorite() {
    this.dataLocal.saveMovie( this.movie );
  }


}
