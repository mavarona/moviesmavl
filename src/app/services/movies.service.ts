import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  getMovies() {

    // tslint:disable-next-line: max-line-length
    return this.http.get<ResponseMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=fdc47c098c5ef33a532b58cd659210cb&language=es&include_image_language=es`);

  }

}
