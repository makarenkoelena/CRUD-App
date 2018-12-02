import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class BooksService {

  constructor(private _http: HttpClient) {
  }

  readBooks(): Observable<any> {
    const link = 'https://jsonblob.com/api/1b93bb25-e80f-11e8-9007-370d8ace50c9';
    return this._http.get(link)
      .pipe(
        map(result => result),
         // tap(val => console.log(JSON.stringify(val, null, 4)))
      )
      ;

  }
}
