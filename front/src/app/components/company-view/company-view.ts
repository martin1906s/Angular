import { Component, Input, input } from '@angular/core';
import { company } from '../../model/company';

@Component({
  selector: 'company-view',
  imports: [],
  templateUrl: './company-view.html',
})
export class CompanyView {
  @Input()company!:company;

}
