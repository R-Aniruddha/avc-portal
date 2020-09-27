import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

import {Unit} from './unit';

@Injectable()
export class ApiService {

  units = Unit;

  constructor(private http: HttpClient) {}

  public getAllUnits(): Observable<Unit[]> {
    return this.http.get<Unit[]>('http://localhost:3000/UNITS');
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}

//Run
//$ json-server db.json
