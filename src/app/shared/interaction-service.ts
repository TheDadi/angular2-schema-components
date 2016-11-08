import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Output} from '@angular/core/src/metadata/directives';
import {InteractionEvent} from '../models/InteractionEvent';



@Injectable()
export class InteractionService {

  @Output() actionEvent: EventEmitter<InteractionEvent> = new EventEmitter<InteractionEvent>();

  constructor(private http: Http) {
  }
}
