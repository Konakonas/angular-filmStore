import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Film} from './interfaces';
import films from '../../filmStore.json';
import {delay} from 'rxjs/operators';


@Injectable()
export class FilmStore {

  constructor(private http: HttpClient) {
  }

  load(): Observable<Film[]> {
    return of(films).pipe(
      delay(1000)
    );
  };w
}
