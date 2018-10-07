import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {SharedService} from '../shared.service';
import {Student} from '../models/student';
import {FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {HeaderService} from '../Header/header.service';
@Component({
  selector: 'app-edit-pin',
  templateUrl: './edit-pin.component.html',
  styleUrls: ['./edit-pin.component.css']
})
export class EditPinComponent implements OnInit {
  editStudentForm: FormGroup;
  updatedStudent: Subscription;
  newStudent: Student;
  name: string;
  subscribeParams: Subscription;
  constructor(private sharedService: SharedService, private service: HeaderService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
//  this.updatedStudent = this.sharedService.student$.subscribe(data => {
// this.newStudent = data;
// this.init(this.newStudent);
// console.log('newStudent');
// console.log(this.updatedStudent);
// console.log(data);
//     });

    this.editStudentForm = new FormGroup({
      'name': new FormControl(null),
      'period': new FormControl(null),
      'state': new FormControl(null),
      'userName': new FormControl(null),
      'modification': new FormControl(null)
    });

    this.subscribeParams = this.route.params.subscribe(
      (param: Params) => {
      this.name = param['name'];
      console.log('router param ext');
      console.log(this.name);
      this.service.getDataTOEdit(this.name).subscribe(
        (data) => {
          this.init(data);
        }
      );
      }
    );
  }

  editData() {
this.service.updateSubscription(this.editStudentForm.value).subscribe(
  (data) => {
    console.log(data);
    this.router.navigate(['header/pin'],
      {fragment: 'true'});
  }
);
  }
  init(stud: Student) {
    // const studentReset = JSON.parse(JSON.stringify(stu));
    this.editStudentForm.setValue({
      name: stud.name,
      period: stud.period,
      state: stud.state,
      userName: stud.userName,
      modification: stud.modification
    });
  }
}
