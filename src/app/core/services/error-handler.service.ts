import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, throwError } from 'rxjs';

export class ErrorHandlerService {

  constructor(protected messageService: MessageService) { }

  /**
   * This method displays a toast with an error message.
   * @param message Message to show.
   */
  log(message: string) {
    this.messageService.openToast(message);
  }

  /**
   * This method displays an error in the console and returns it to be
   *  managed where it has occurred
   * @param result Error result
   */
  handleError<E>(result?: E) {
    return (error: any): Observable<E> => {
      console.log(`${error.statusText}: `, error);
      return throwError(error as E);
    };
  }
}
