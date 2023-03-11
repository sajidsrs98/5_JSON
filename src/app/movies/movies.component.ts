import { Component } from '@angular/core';
import moviesData from '../movies.json';
interface Movie {
  id : number;
  name : string;
  releaseDate : string;
  earning : number;
  rating : number;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {

  constructor() {}

  movies : Movie[] = moviesData;

}
