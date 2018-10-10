import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriptions} from '../models/subscriptions';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient ) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/poc/getById/1');
  }

  createData(subscription: Subscriptions): Observable<any> {
    return this.http.post<any>('http://localhost:8080/poc/createSubscription', subscription);
     // .pipe(catchError()

  }
  getAllData(): Observable<Subscriptions[]> {
    return this.http.get<Subscriptions[]>('http://localhost:8080/poc/getById/1');
  }

  getDataTOEdit(name: string): Observable<Subscriptions> {
    return this.http.get<Subscriptions>(`${'http://localhost:8080/poc/getRecordById'}/${name}`);
  }

  updateSubscription(sub: Subscriptions): Observable<Subscriptions> {
    return this.http.put<Subscriptions>('http://localhost:8080/poc/updateSubscription', sub);
  }
}
