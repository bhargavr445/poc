import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header.component';
import {SecurityComponent} from '../security/security.component';
import {PinComponent} from '../pin/pin.component';
import {EditPinComponent} from '../pin/edit-pin.component';

const HeaderRoutes: Routes = [
  {   path: '',            component: HeaderComponent,
    children: [
      { path: '', component: SecurityComponent },
      { path: 'pin', component: PinComponent },
      {path: 'edit-pin/:name', component: EditPinComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(HeaderRoutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
