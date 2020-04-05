import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  lastMovies: Movie[] = [];
  popular: Movie[] = [];

  constructor( private movieService: MoviesService ) {}

  ngOnInit(): void {
    this.movieService.getMovies()
        .subscribe( resp => {
          this.lastMovies = resp.results;
        });
    this.getPopular();
  }

  loadMore() {
    this.getPopular();
  }

  getPopular() {
    this.movieService.getPopular()
        .subscribe( resp => {
          const arrData = [ ...this.popular, ...resp.results];
          this.popular = arrData;
        });
  }

}
