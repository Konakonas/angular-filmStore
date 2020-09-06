import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isStore: boolean = true;

  store() {
    this.isStore = !this.isStore;
  }

  title = 'filmstore';
}
