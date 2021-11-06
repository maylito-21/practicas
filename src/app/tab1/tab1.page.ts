import { MovieService } from './../service/movie.service';
import { Pelicula, RespuestaMDB } from '../interfaces/interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe( (resp: RespuestaMDB) => {
      console.log('Resp', resp);
      this.peliculasRecientes = resp.results;
    })
  }

}
