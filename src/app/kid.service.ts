import { Injectable } from '@angular/core';
import { Kid } from './kid';
import { KIDS } from './mock-kids';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class KidService {

  constructor() { }

  getKids(): Observable<Kid[]> {
    return of(KIDS);
  }

  getKid(id: number): Observable<Kid> {
    return of(KIDS.find(kid => kid.id === id));
  }

}
