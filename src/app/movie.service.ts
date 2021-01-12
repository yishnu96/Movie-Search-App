import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly API_KEY = `d5f79c1a674b4986f62b187d6090378c`;

  constructor(private http: HttpClient) { }

  searchMovie(searchQuery: string) {

    // 'https://api.themoviedb.org/3/search/movie?api_key=' + this.API_KEY + '&query=' + searchQuery

    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.API_KEY + '&query=' + searchQuery);
  }

  getMovieDetails(imdbId: string) {
    return this.http.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`);
  }


}
