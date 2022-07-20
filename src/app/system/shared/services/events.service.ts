import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from 'src/app/shared/core/base-api';
import { WFMEvent } from '../models/event.model';


@Injectable({
  providedIn: 'root'
})
export class EventsService extends BaseApi {

  constructor(http: HttpClient) {
    super(http);
  }

  addEvent(event: WFMEvent): Observable<WFMEvent> {
    return this.post('events', event);
  }

  getEvents(): Observable<WFMEvent[]> {
    return this.get('events');
  }

}
