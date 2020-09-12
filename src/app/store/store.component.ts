import {Component, OnInit} from '@angular/core';
import {FilmStore} from '../shared/store.service';
import {Film} from '../shared/interfaces';
import {CartService} from '../shared/basket.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  films: Film[] = [];

  constructor(public filmStore: FilmStore,
              private cartSetvice: CartService) {
  }

  ngOnInit() {

  }

  filmToBasket(film: Film) {
    this.cartSetvice.filmToCart(film);
  }
}


