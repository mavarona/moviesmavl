import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMDB, MovieDetail, ResponseCredits, Genre } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;
const APIKEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularPage = 0;
  genres: Genre[] = [];

  constructor( private http: HttpClient ) { }

  getMovies() {

    const filterDate = this.firstAndLastDayInMonth();

    const init = filterDate.firstDate;
    const end = filterDate.lastDate;

    return this.executeQuery<ResponseMDB>(`/discover/movie?primary_release_date.gte=${init}&primary_release_date.lte=${end}`);

  }

  getPopular() {

    this.popularPage++;

    const query = `/discover/movie?sort_by=popularity.desc&page=${ this.popularPage }`;

    return this.executeQuery<ResponseMDB>(query);

  }

  getMovieDetail( id: string ) {

    return this.executeQuery<MovieDetail>(`/movie/${ id }?a=1`);

  }

  getMovieCredits( id: string ) {
    return this.executeQuery<ResponseCredits>(`/movie/${ id }/credits?a=1`);
  }

  getMovieSearch( term: string ) {
    return this.executeQuery(`/search/movie?query=${ term }`);
  }

  getGenres(): Promise<Genre[]> {

    return new Promise( resolve => {
      this.executeQuery(`/genre/movie/list?a=1`)
      .subscribe( resp => {
        this.genres = resp['genres'];
        resolve(this.genres);
      });
    });

  }

  private executeQuery<T>( query: string ) {
    query = URL + query;
    query += `&api_key=${APIKEY}&language=es&include_image_language=es`;
    return this.http.get<T>( query );
  }

  private getMounthFormat( month: number ): string {

    let monthRes;
    if ( month < 10) {
      monthRes = '0' + month;
    } else {
      monthRes = month;
    }
    return monthRes;

  }

  private firstAndLastDayInMonth(): any {

    const now = new Date();
    const lastDate = new Date( now.getFullYear(), now.getMonth() + 1, 0 ).getDate();

    return {
      firstDate: `${ now.getFullYear() }-${ this.getMounthFormat(now.getMonth() + 1) }-01`,
      lastDate: `${ now.getFullYear() }-${ this.getMounthFormat(now.getMonth() + 1) }-${lastDate}`
    };

  }

}
