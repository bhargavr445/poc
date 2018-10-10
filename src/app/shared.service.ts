import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Subscriptions} from './models/subscriptions';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private editStudent = new BehaviorSubject<Subscriptions>(null);
  student$ = this.editStudent.asObservable();

  editData(student: Subscriptions) {
    this.editStudent.next(student);
  }
}
