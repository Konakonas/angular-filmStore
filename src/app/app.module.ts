import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { BasketComponent } from './basket/basket.component';
import {CartService} from './shared/basket.service';
import {FilmService} from './shared/store.service';
import { NewFilmComponent } from './new-film/new-film.component';
import { FilmInfoComponent } from './film-info/film-info.component';

const routes: Routes = [
  {
    path: '', component: StoreComponent
  },
  {
    path: 'cart', component: BasketComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    BasketComponent,
    NewFilmComponent,
    FilmInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  providers: [CartService, FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
