import { Injectable } from '@angular/core';
import { Hero } from '../types/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';

const httpHeaders = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log(`fetched ${_.length} heroes`)),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero with id: ${id}`)),
      catchError(this.handleError<Hero>(`getHero with id=${id}`))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpHeaders).pipe(
      tap((newHero: Hero) => this.log(`add hero with id: ${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpHeaders).pipe(
      tap(_ => this.log(`updated hero with id: ${hero.id}`)),
      catchError(this.handleError('updateHero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpHeaders).pipe(
      tap(_ => this.log(`deleted hero with id: ${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    )
  } 

  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()) {
      // if not search term, return empty heroes array
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`${_.length} results found for matching term: ${term}`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  private log(msg: string): void {
    this.messageService.add(`HeroService: ${msg}`);
  }

 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  handleError<T>(operation: string = 'operation', result?: T): (error: any, caught: Observable<T>) => import("rxjs").ObservableInput<any> {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
