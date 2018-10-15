import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header.component';
import {SecurityComponent} from '../security/security.component';
import {PinComponent} from '../subscription/subscription.component';
import {EditSubscriptionComponent} from '../subscription/edit-subscription.component';

const HeaderRoutes: Routes = [
  {   path: '',            component: HeaderComponent,
    children: [
      { path: '', component: SecurityComponent },
      { path: 'subscription', component: PinComponent },
      {path: 'subscription-subscription/:name', component: EditSubscriptionComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(HeaderRoutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
