import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Film} from './interfaces';
import films from '../../filmStore.json';
import {delay} from 'rxjs/operators';


@Injectable()
export class FilmStore {

  store$: BehaviorSubject<Film[]> = new BehaviorSubject(this.getFromLocalStorage());

  constructor(private http: HttpClient) {
    this.load();
    this.store$.subscribe(this.setToLocalStorage);
  }

  load(): void {
    if (this.getFromLocalStorage() == null) {
      this.setToLocalStorage(films);
    }
    of(this.getFromLocalStorage())
      .pipe(
        delay(1000))
      .subscribe(
        filmsCopy => this.store$.next(filmsCopy)
      )
    ;
  }

  setToLocalStorage(value: Film[]) {
    localStorage.setItem('store', JSON.stringify(value));
  }

  getFromLocalStorage(): Film[] | null {
    return JSON.parse(localStorage.getItem('store'));
  }

  getNewId(): number {
    return this.store$.value.length + 1;
  }

  addNewFilm(newFilm: Exclude<Film, 'Id'>) {

    const film: Film = {
      Id: this.getNewId(),
      ...newFilm,
      price: Number(newFilm.price),
    };
    this.store$.next([...this.store$.value, film]);
    // this.setToLocalStorage(JSON.parse(localStorage.getItem('store')).push(newFilm));
  }

}
