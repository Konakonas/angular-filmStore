import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {combineLatest, EMPTY, fromEvent, Observable, of} from "rxjs";
import {distinctUntilChanged, map, startWith} from "rxjs/operators";
import {FilmStore} from "../shared/store.service";
import {Film} from "../shared/interfaces";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})

export class SearchMovieComponent implements AfterViewInit {

  // @ViewChild('searchInput') searchInput!: ElementRef;
  searchControl = new FormControl();

  search: Observable<Film[]> = EMPTY;

  constructor(private filmStore: FilmStore) {
  }

  ngAfterViewInit(): void {
    const search$: Observable<string> = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        distinctUntilChanged(),
      );
    this.search = combineLatest([this.filmStore.store$, search$])
      .pipe(
        map(this.filterSearch)
      );
  }

  filterSearch([films, searchTerm]: [Film[], string]): Film[] {
    return films.filter(film => `${film.name} ${film.description}`.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
