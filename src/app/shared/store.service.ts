import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Film} from './interfaces';
import films from '../../filmStore.json';


@Injectable()
export class FilmService {

  private filmsSubject = new BehaviorSubject<Film[]>([]);

  get films() {
    return this.filmsSubject.asObservable();
  }

  constructor(private http: HttpClient) {
  }

  load(){
    of(films).subscribe((value) => this.filmsSubject.next(value));
  };
}
