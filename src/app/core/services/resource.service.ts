import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';

import { MessageService } from './message.service';

import { Resource } from '../models/resource.model';
import { AbstractResourceService } from './abstract-resource.service';

export class ResourceService<T extends Resource> extends AbstractResourceService<T> {
  protected url: string;

  constructor(protected http: HttpClient, protected messageService: MessageService, endPoint: string) {
    super(messageService);
    this.url = `${environment.baseApiUrl}/${endPoint}`;
  }

  getList(...criteria: any[]): Observable<T[]> {
    let queryParameters = '';
    if (criteria) {
      queryParameters = '?';
      criteria.forEach(criterion => {
        for (const key in criterion) {
          if (criterion.hasOwnProperty(key)) {
            queryParameters += `${key}=${criterion[key]}&`;
          }
        }
      });
    }
    return this.http.get<T[]>(`${this.url}/${queryParameters}`)
    .pipe(
      tap(_ => console.log('Data obtained successfully.')),
      catchError(this.handleError<any>())
    );
  }

  getObject(idObject: number | T): Observable<T> {
    const id = typeof idObject === 'number' ? idObject : idObject.id;
    return this.http.get<T>(`${this.url}/${id}`)
    .pipe(
      tap((datum: T) => console.log(`Datum obtained successfully: ${datum}.`)),
      catchError(this.handleError<T>())
    );
  }

  putObject(object: T): Observable<any> {
    return this.http.put(`${this.url}/${object.id}`, object).pipe(
      tap((datum: T) => this.log(`The changes in ${datum} were saved successfully.`)),
      catchError(this.handleError<T>())
    );
  }

  postObject(object: T): Observable<any> {
    return this.http.post(this.url, object)
    .pipe(
      tap((datum: T) => this.log(`${datum} was saved correctly.`)),
      catchError(this.handleError<T>())
    );
  }

  deleteObject(object: number | T): Observable<T> {
    const id = typeof object === 'number' ? object : object.id;
    return this.http.delete<T>(`${this.url}/${id}`)
    .pipe(
      tap((datum: T) => this.log(`${datum} was deleted correctly.`)),
      catchError(this.handleError<T>())
    );
  }

}
