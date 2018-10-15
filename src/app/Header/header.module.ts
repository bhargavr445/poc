
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderRoutingModule } from './header-routing.module';
import {HeaderComponent} from './header.component';
import { SecurityComponent } from '../security/security.component';
import { PinComponent } from '../subscription/subscription.component';
import {MouseOverDirective} from '../directives/mouse-over.directive';
import { EditSubscriptionComponent } from '../subscription/edit-subscription.component';
import {DataTableModule, DropdownModule, ButtonModule, CheckboxModule, CalendarModule, ChipsModule, DialogModule} from 'primeng/primeng';



@NgModule({
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    CommonModule,
    DialogModule,
    HeaderRoutingModule,
    DataTableModule,
    DropdownModule,
    ButtonModule,
    CheckboxModule,
    CalendarModule,
    ChipsModule,
   // BrowserAnimationsModule,
   FormsModule, ReactiveFormsModule],
  declarations: [HeaderComponent, SecurityComponent, PinComponent, MouseOverDirective, EditSubscriptionComponent]
})
export class HeaderModule { }
