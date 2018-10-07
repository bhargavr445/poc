import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

const appRoutes: Routes = [
  { path: 'header',
    loadChildren: './Header/header.module#HeaderModule'
  },
  { path: 'student',
    loadChildren: './student/student.module#StudentModule'

  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
