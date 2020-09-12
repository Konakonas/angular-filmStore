import { Component, OnInit } from '@angular/core';
import {Film} from "../shared/interfaces";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FilmStore} from "../shared/store.service";

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {
  newFilm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', [Validators.required, Validators.pattern(/^(http|https):\/\// ) ]),
  });
  // newFilm = new Film;
  constructor(private filmStore: FilmStore) { }

  ngOnInit(): void {
  }

  addNewFilm() {
    this.filmStore.addNewFilm(this.newFilm.value);
  }

}
