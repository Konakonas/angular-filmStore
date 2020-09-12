import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Film} from "../shared/interfaces";
import {combineLatest, EMPTY, Observable} from "rxjs";
import {FilmStore} from "../shared/store.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  private id: number;
  public currentFilm$: Observable<Film> = EMPTY;

  constructor(private route: ActivatedRoute, private filmStore: FilmStore) { }

  ngOnInit(): void {
    this.currentFilm$ = combineLatest([this.route.params, this.filmStore.store$])
      .pipe(map(([{id}, films]) => films.find(film => film.Id === Number(id))));
  }
}
