import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { BasketComponent } from './basket/basket.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {CartService} from './shared/basket.service';
import {FilmStore} from './shared/store.service';

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
    BasketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  providers: [CartService, FilmStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
