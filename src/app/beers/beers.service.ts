import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BeersService {
  private url = 'https://api.punkapi.com/v2/beers?';
  constructor(private http: HttpClient) { }
  /**
   * @param {page} {perpage} Are Page number and items per page
   *
   * @example
   * service.get(2, 25) Return page 2 with 25 items
   *
   * @returns List of beers
   */
    get(page: number, perpage: number) {
      return this.http.get(this.url + 'page=' + page +
                                      '&per_page=' + perpage)
            .pipe(catchError(error => this.handleError(error)));
    }

    private handleError(error: HttpErrorResponse) {
      return Observable.throw(error);
    }
}
