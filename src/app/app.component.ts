import {Component} from '@angular/core';
import {CartService} from "./shared/basket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public cartSetvice: CartService) {
  }

}
