import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Student} from './models/student';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private editStudent = new BehaviorSubject<Student>(null);
  student$ = this.editStudent.asObservable();

  editData(student: Student) {
    this.editStudent.next(student);
  }
}
