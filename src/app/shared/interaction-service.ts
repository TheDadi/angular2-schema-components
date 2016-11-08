import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';



@Injectable()
export class InteractionService {

  constructor(private http: Http) {
  }

  interact(){
    return this.http.get('url')
      .map((response: Response) => response.json());
  }
}
