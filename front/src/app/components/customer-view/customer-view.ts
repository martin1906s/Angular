import { Component, Input } from '@angular/core';
import { customers } from '../../model/customers';

@Component({
  selector: 'customer-view',
  imports: [],
  templateUrl: './customer-view.html',
})
export class CustomerView {
  @Input() customer!: customers;
}
