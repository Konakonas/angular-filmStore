import {Component} from '@angular/core';
import {Film} from '../shared/interfaces';
import {CartService} from '../shared/basket.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent{

  films: Film[] = [];
  sum$ = this.cartSetvice.cart$
    .pipe(
      map(films => {
        return films.map(film => film.price).reduce((a, b) => a + b, 0);
      })
    );

  constructor(public cartSetvice: CartService) {
  }

  clearCart() {
    this.cartSetvice.clearCart();
  }

  deletePosition(id: number) {
    this.cartSetvice.deleteFromCart(id);
  }

}
