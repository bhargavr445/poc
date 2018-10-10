import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderRoutingModule } from './header-routing.module';
import {HeaderComponent} from './header.component';
import { SecurityComponent } from '../security/security.component';
import { PinComponent } from '../pin/subscription.component';
import {MouseOverDirective} from '../directives/mouse-over.directive';
import { EditSubscriptionComponent } from '../pin/edit-subscription.component';


@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule,
   FormsModule, ReactiveFormsModule],
  declarations: [HeaderComponent, SecurityComponent, PinComponent, MouseOverDirective, EditSubscriptionComponent]
})
export class HeaderModule { }
