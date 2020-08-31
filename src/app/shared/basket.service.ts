import {Injectable, OnDestroy} from '@angular/core';
import {Film} from './interfaces';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';



@Injectable()
export class CartService implements OnDestroy{

  cart$: BehaviorSubject<Film[]> = new BehaviorSubject(this.getFromLocalStorage());
  destroy$ = new ReplaySubject(1);

  constructor() {
    this.cart$
      .pipe(takeUntil(this.destroy$))
      .subscribe(films => {this.setToLocalStorage(films)})
  }

  filmToCart(curFilm: Film): void {
    let films = this.cart$.value;
    // console.log(films.find(film => film.Id === curFilm.Id))
    films = films.find(film => film.Id === curFilm.Id)
      ? films.filter(film => film.Id !== curFilm.Id)
      : [...films, curFilm]
    this.cart$.next(films);
  }

  clearCart() {
    this.cart$.next([]);
  }

  deleteFromCart(curFilmId: number) {
    this.cart$.next(this.cart$.value.filter(film => film.Id !== curFilmId));
  }

  getFromLocalStorage() {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
  }

  setToLocalStorage(value: Film[]) {
    localStorage.setItem('cart', JSON.stringify(value));
  }

  isSelected(film: Film): string {
    return this.cart$.value.includes(film) ? 'В избранном' : 'Добавить в избранное';
  }

  ngOnDestroy(): void {
    this.destroy$.next()
  }

}
