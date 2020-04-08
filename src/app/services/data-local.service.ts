import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MovieDetail } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  movies: MovieDetail[] = [];

  constructor( private storage: Storage,
               private toastCtrl: ToastController ) {
      this.loadFavorites();
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  saveMovie( movieData: MovieDetail ) {

    let exists = false;
    let message = '';

    for ( const movie of this.movies ) {
      if( movie.id === movieData.id ){
        exists = true;
        break;
      }
    }

    if( exists ) {
      this.movies = this.movies.filter( movie => movie.id !== movieData.id );
      message = 'Removido de favoritos';
    } else {
      this.movies.push( movieData );
      message = 'Agregado a favoritos';
    }

    this.presentToast( message );
    this.storage.set('movies', this.movies);

    return !exists;

  }

  async loadFavorites() {
    const moviesStorage = await this.storage.get('movies');
    this.movies = moviesStorage || [];
    return this.movies;
  }

  async existMovie( id ) {
    id = Number(id);
    await this.loadFavorites();
    const exists = this.movies.find( movie => movie.id === id );
    return (exists) ? true : false;
  }

}
