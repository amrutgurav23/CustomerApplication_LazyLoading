import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRoutingModule } from '../Routing/CustomerApp.CustomerRouting';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
