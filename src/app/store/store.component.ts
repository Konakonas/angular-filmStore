import {Component, OnInit} from '@angular/core';
import {FilmService} from '../shared/store.service';
import {Film} from '../shared/interfaces';
import {CartService} from '../shared/basket.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  films: Film[] = [];

  constructor(public filmStore: FilmService,
              private cartSetvice: CartService) {
  }

  ngOnInit() {
    this.filmStore.load();
  }

  filmToBasket(film: Film) {
    this.cartSetvice.filmToCart(film);
  }
}


