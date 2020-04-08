import { Component } from '@angular/core';
import { MovieDetail, Genre } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  favoriteMovies: MovieDetail[] = [];
  geners: Genre[] = [];
  favoritesGener: any[] = [];

  constructor( private dataLocal: DataLocalService,
               private movieService: MoviesService ) {}

  async ionViewWillEnter() {
    this.favoriteMovies = await this.dataLocal.loadFavorites();
    this.geners = await this.movieService.getGenres();
    this.moviesByGener(this.geners, this.favoriteMovies);
  }

  moviesByGener( genres: Genre[], movies: MovieDetail[] ) {

    this.favoritesGener = [];

    genres.forEach( genre => {

      this.favoritesGener.push({
        generData: genre.name,
        moviesData: movies.filter( movie => {
          return movie.genres.find( currentGenre => currentGenre.id === genre.id );
        })
      });

    });

  }

}
