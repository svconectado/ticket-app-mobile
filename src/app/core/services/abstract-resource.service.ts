import { Observable } from 'rxjs';

import { Resource } from '../models/resource.model';
import { MessageService } from './message.service';
import { ErrorHandlerService } from './error-handler.service';

export abstract class AbstractResourceService<T extends Resource> extends ErrorHandlerService {

  constructor(protected messageService: MessageService) {
    super(messageService);
  }

  /**
   * This method gets a list of generic objects that are instances of <T>.
   * @param criteria Arrangement of values that will be sent in the request as query parameters.
   */
  abstract getList(...criteria: any[]): Observable<T[]>;
  /**
   * This method fetches an object from the server.
   * @param idObject Identifier of the object to obtain, you can also send the object itself,
   *  and within the method the identifier must be extracted.
   */
  abstract getObject(idObject: number | T): Observable<T>;
  /**
   * This method sends an object to the server for update.
   * @param object Object to update.
   */
  abstract putObject(object: T): Observable<any>;
  /**
   * This method sends an object to the server for create.
   * @param object Object to create.
   */
  abstract postObject(object: T): Observable<any>;
  /**
   * This method sends the identifier of an object to the server for deletion.
   * @param objectId Identifier of the object to delete, you can also send the object itself,
   *  and within the method the identifier must be extracted.
   */
  abstract deleteObject(objectId: number | T): Observable<T>;
}
