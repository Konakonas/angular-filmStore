import { Component, OnInit } from '@angular/core';
import {Film} from '../shared/interfaces';
import {CartService} from '../shared/basket.service';
import {flatMap, map, reduce, tap} from 'rxjs/operators';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  films: Film[] = []
  sum$ = this.cartSetvice.cart$
    .pipe(
      map(films => {
        return films.map(film => film.price).reduce((a, b) => a + b, 0);
      })
    );
  constructor(public cartSetvice: CartService) { }

  ngOnInit(): void {
  }

  clearCart() {
    this.cartSetvice.clearCart();
  }

  deletePosition(id: number) {
    this.cartSetvice.deleteFromCart(id);
  }

}
