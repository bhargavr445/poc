import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {HeaderService} from '../Header/header.service';
import {Student} from '../models/student';
import {SharedService} from '../shared.service';
declare var $;
@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {

  constructor(private service: HeaderService, private sharedService: SharedService, private router: Router,  private route: ActivatedRoute,) {

  }
  searchForm: FormGroup;
  createRecord: FormGroup;
  display = 'none';
  students: Student[];
  createdStatus: any;
  countries: string[] = ['HBO', 'PROMO', 'TEST', 'DATA'];
  defaultValue:  'UK';
  ngOnInit() {
    this.searchForm = new FormGroup({
      'id': new FormControl(null),
      'from': new FormControl(null),
      'to': new FormControl(null),
      'country': new FormControl(this.countries[0])
    });

    this.createRecord = new FormGroup({
      'name': new FormControl(null),
      'state': new FormControl(null),
      'period': new FormControl(null),
      'userName': new FormControl(null),
      'modification': new FormControl(null)
    });

    // this.searchForm.controls['country'].setValue(this.defaultValue, {onlySelf: true});
    setTimeout( function() {
      $(function() {
        $('#dt').DataTable();
      });
    }, 2000);
    this.route.fragment.subscribe(
      (data) => {
       if (data) {
        this.onEdit();
       }
      }
    );
  }

  onEdit() {
    console.log(this.searchForm.value);
    this.service.getData().subscribe(
      data => {
        this.students = data;
        console.log(data);
      }
    );
  }

  editEmployee(student: Student) {
    console.log(student);
  }

   getRecordDetails(stu: Student) {
    console.log(stu);
  }
  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  addData() {
    this.display = 'none';
  }
  editData(name: string) {
    // this.sharedService.editData(stu);
    this.router.navigate(['header/edit-pin', name]);

  }
  createData() {
    console.log(this.createRecord.value);
    this.service.createData(this.createRecord.value).subscribe(
      (data) => {
        this.createdStatus = data;
        this.onEdit();
      });
    this.display = 'none';
  }
  getAllRecords() {
    this.service.getAllData().subscribe();
  }
  cancelForm() {
    this.searchForm.reset();
  }
}
