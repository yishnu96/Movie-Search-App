
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string;
  movies: any[] = [];

  constructor( private movieService : MovieService,private http: HttpClient) { }

  ngOnInit(): void {
  }

  getSearchResults(event) {
    console.log(event.target.value);
    this.query = event.target.value;

    this.movieService.searchMovie(this.query).subscribe((res : any ) => {
      console.log(res);
      this.movies = res.results;
    });

  }

}
