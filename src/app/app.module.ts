import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { BasketComponent } from './basket/basket.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {CartService} from './shared/basket.service';
import {FilmStore} from './shared/store.service';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { NewMovieComponent } from './new-movie/new-movie.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
  {
    path: '', component: StoreComponent
  },
  {
    path: 'cart', component: BasketComponent
  },
  {
    path: 'movie/:id', component: MovieInfoComponent
  },
  {
    path: 'addMovie', component: NewMovieComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    BasketComponent,
    MovieInfoComponent,
    NewMovieComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    }),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [CartService, FilmStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
