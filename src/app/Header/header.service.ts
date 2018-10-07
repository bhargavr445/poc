import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../models/student';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient ) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/poc/getById/1');
  }

  createData(subscription: Student): Observable<any> {
    return this.http.post<any>('http://localhost:8080/poc/createSubscription', subscription);
     // .pipe(catchError()

  }
  getAllData(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/poc/getById/1');
  }

  getDataTOEdit(name: string): Observable<Student> {
    return this.http.get<Student>(`${'http://localhost:8080/poc/getRecordById'}/${name}`);
  }

  updateSubscription(sub: Student): Observable<Student> {
    return this.http.put<Student>('http://localhost:8080/poc/updateSubscription', sub);
  }
}
