import { Component } from '@angular/core';
import { Movie } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { ModalController } from '@ionic/angular';
import { DetailMovieComponent } from '../components/detail-movie/detail-movie.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  termSearch = '';
  movies: Movie[] = [];
  ideas: string[] = ['Spiderman', 'X-men', 'Hobbit'];
  searching = false;

  constructor( private movieService: MoviesService,
               private modalCtrl: ModalController ) {}

  search( event ) {
    this.searching = true;
    const term: string = event.detail.value;

    if( term.length === 0 ) {
      this.searching = false;
      this.movies = [];
      return;
    }

    this.movieService.getMovieSearch( term )
        .subscribe( resp => {
          this.movies = resp['results'];
          this.searching = false;
        });

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
